import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { register } from '../../redux/actions/auth';
import RegisterForm from '../../components/RegisterForm';
import * as Logos from '../../components/SignupWithFormProviders/Brands';
import { DividerWithText } from '../../components/SignupWithFormProviders/DividerWithText';
import { Logo } from '../../components/SignupWithFormProviders/Logo';
import { SigupForm } from '../../components/SignupWithFormProviders/SigupForm';
import { Testimonial } from '../../components/SignupWithFormProviders/Testimonial';

const App = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register({
        name,
        email,
        password,
      });
      console.log('REGISTER USER ===> ', res);
      toast.success('Register success. Please login.');
      router.push('/auth/login');
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };
  return (
    <Box
      minH="100vh"
      bg={{
        md: mode('gray.100', 'inherit'),
      }}
    >
      <Box
        maxW="6xl"
        mx="auto"
        py={{
          base: '10',
          md: '20',
        }}
        px={{
          base: '4',
          md: '10',
        }}
      >
        <SimpleGrid
          columns={{
            base: 1,
            lg: 2,
          }}
          spacing="14"
        >
          <Box w="full" maxW="xl" mx="auto">
            <Box
              bg={{
                md: mode('white', 'gray.700'),
              }}
              rounded={{
                md: '2xl',
              }}
              p={{
                base: '4',
                md: '12',
              }}
              borderWidth={{
                md: '1px',
              }}
              borderColor={mode('gray.200', 'transparent')}
              shadow={{
                md: 'lg',
              }}
            >
              <Box
                mb="8"
                textAlign={{
                  base: 'center',
                  md: 'start',
                }}
              >
                <Heading
                  textAlign="center"
                  size="lg"
                  mb="2"
                  color={mode('#2b6cb0', 'whiteAlpha.900')}
                  fontWeight="extrabold"
                >
                  Welcome to NextCar
                </Heading>
                <Text
                  fontSize="lg"
                  color={mode('gray.600', 'gray.400')}
                  fontWeight="medium"
                  textAlign="center"
                >
                  Enter your info to get started
                </Text>
              </Box>
              <Stack spacing="4">
                <Button
                  disabled
                  color={mode('#2b6cb0', 'gray.300')}
                  variant="outline"
                  leftIcon={<Box as={FaGoogle} color="red.500" />}
                >
                  Sign up with Google
                </Button>
                <Button
                  disabled
                  color={mode('#2b6cb0', 'gray.300')}
                  variant="outline"
                  leftIcon={
                    <Box
                      as={FaFacebook}
                      color={mode('facebook.500', 'facebook.300')}
                    />
                  }
                >
                  Sign up with Facebook
                </Button>
              </Stack>

              <DividerWithText>or</DividerWithText>

              <RegisterForm
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            </Box>

            <Text
              color={mode('gray.700', 'whiteAlpha.500')}
              mt="8"
              align="center"
              fontWeight="medium"
            >
              Already have an account?{' '}
              <Link
                color={mode('#2b6cb0', 'whiteAlpha.900')}
                href="/auth/login"
              >
                <Text
                  mt="3"
                  color={mode('#2b6cb0', 'whiteAlpha.900')}
                  fontWeight="medium"
                  cursor="pointer"
                  _hover={{ textDecoration: 'underline' }}
                >
                  <a>Log in to NextCar</a>
                </Text>
              </Link>
            </Text>
          </Box>

          <Flex
            direction="column"
            py="24"
            display={{
              base: 'none',
              lg: 'flex',
            }}
          >
            <Testimonial />
            <SimpleGrid
              columns={3}
              spacing="10"
              paddingStart="12"
              alignItems="center"
              color="gray.400"
            >
              <Logos.Wakanda />
              <Logos.ChatMonkey />
              <Logos.Lighthouse />
            </SimpleGrid>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
export default App;
