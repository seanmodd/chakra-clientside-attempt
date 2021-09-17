import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Img,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';

import { HiOutlineExternalLink } from 'react-icons/hi';
import { useState } from 'react';

import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';

import { useRouter } from 'next/router';

import { login } from '../../redux/actions/auth';
import LoginForm from '../../components/LoginForm';
import { Logo } from '../../components/LoginWithFlushedInputs/Logo';
import { SigninForm } from '../../components/SigninForm';
import { UnderlineLink } from '../../components/LoginWithFlushedInputs/UnderlineLink';

const App = () => {
  const router = useRouter();
  const [email, setEmail] = useState('ryan@gmail.com');
  const [password, setPassword] = useState('rrrrrr');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('SEND LOGIN DATA', { email, password });
    try {
      const res = await login({ email, password });

      if (res.data) {
        console.log(
          'SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT ===> '
        );
        // console.log(res.data);
        // save user and token to local storage
        typeof window !== 'undefined' &&
          window.localStorage.setItem('auth', JSON.stringify(res.data));
        // save user and token to redux
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: res.data,
        });
        router.push('/profile/dashboard');
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };
  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      overflow="hidden"
      minH="100vh"
      height="100%"
      bg={mode('gray.50', 'inherit')}
    >
      <Box
        overflowY="auto"
        flex="1"
        py={{
          base: '10',
          md: '16',
        }}
        px={{
          base: '6',
          md: '10',
        }}
      >
        <Box maxW="sm" mx="auto">
          <Box
            textAlign="center"
            mb={{
              base: '10',
              md: '16',
            }}
          >
            <Heading
              as="h1"
              size="xl"
              color="#2b6cb0"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Sign in to your account
            </Heading>
            <Text
              mt="3"
              color={mode('#2b6cb0', 'whiteAlpha.900')}
              fontWeight="medium"
            >
              Need an account?
              <Link
                color={mode('#2b6cb0', 'whiteAlpha.900')}
                href="/auth/register"
              >
                <Text
                  mt="3"
                  color={mode('#2b6cb0', 'whiteAlpha.900')}
                  fontWeight="medium"
                  cursor="pointer"
                  _hover={{ textDecoration: 'underline' }}
                >
                  <a>Sign up for free</a>
                </Text>
              </Link>
            </Text>
          </Box>
          {/* <SigninForm /> */}
          <LoginForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        </Box>
      </Box>

      <Box
        display={{
          base: 'none',
          lg: 'block',
        }}
        maxH="100vh"
        overflow="hidden"
        flex="1"
        bg="blue.600"
        color="white"
        px="20"
        pt="32"
      >
        <Logo
          mb={{
            base: '14',
            md: '32',
          }}
          w="500px"
          h="7"
          mx="auto"
          iconColor="blue.500"
        />
        <Text
          mt="6"
          fontWeight="extrabold"
          fontSize={{
            base: '2xl',
            lg: '3xl',
          }}
          maxW="sm"
          letterSpacing="tight"
          lineHeight="normal"
        >
          Start Your Car Shopping Journey Today With NextCar.
        </Text>

        <HStack
          as="a"
          href="#"
          justify="center"
          display="inline-flex"
          minW="2xs"
          py="3"
          px="2"
          mt="5"
          fontWeight="semibold"
          border="2px solid white"
          rounded="lg"
          transition="all 0.2s"
          _hover={{
            bg: 'whiteAlpha.200',
          }}
        >
          <Link href="/start-today">
            <Box color={mode('whiteAlpha.900', 'whiteAlpha.900')}>
              Learn more
            </Box>
          </Link>
          <HiOutlineExternalLink />
        </HStack>
      </Box>
    </Flex>
  

  );
};
export default App;
