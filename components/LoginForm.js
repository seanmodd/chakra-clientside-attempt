import Link from 'next/link';
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  LightMode,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { UnderlineLink } from './LoginWithFlushedInputs/UnderlineLink';

const LoginForm = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) => (
  <>
    {/* <form onSubmit={handleSubmit} className="mt-3">
      <div className="form-group mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div> */}
    {/* <div className="form-group mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button disabled={!email || !password} className="btn btn-primary">
        Submit
      </button>
    </form> */}
    //! BELOW IS FROM CHAKRA PRO
    <form onSubmit={handleSubmit}>
      <Stack spacing="-px">
        <FormControl id="email-address">
          <FormLabel srOnly>Email address</FormLabel>
          <Input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="lg"
            name="email"
            autoComplete="email"
            required
            placeholder="Email address"
            bg={mode('white', 'gray.700')}
            fontSize="md"
            roundedBottom="0"
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel srOnly>Email address</FormLabel>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            autoComplete="current-password"
            required
            size="lg"
            bg={mode('white', 'gray.700')}
            fontSize="md"
            roundedTop="0"
            placeholder="Password"
          />
        </FormControl>
      </Stack>
      <Flex align="center" justify="space-between" mt="8">
        <LightMode>
          <Checkbox
            size="lg"
            colorScheme="blue"
            sx={{
              '.chakra-checkbox__control': {
                '&:not([data-checked])': {
                  bg: mode('white', 'gray.700'),
                },
                rounded: 'base',
                borderWidth: '1px',
              },
              '.chakra-checkbox__label': {
                fontSize: 'sm',
              },
            }}
            color={mode('#2b6cb0', 'whiteAlpha.900')}
          >
            Remember me
          </Checkbox>
        </LightMode>

        <Link color={mode('#2b6cb0', 'whiteAlpha.900')} href="/auth/register">
          <Text
            mt="3"
            color={mode('#2b6cb0', 'whiteAlpha.900')}
            fontWeight="medium"
            cursor="pointer"
            _hover={{ textDecoration: 'underline' }}
          >
            <a>Forgot Password</a>
          </Text>
        </Link>
      </Flex>
      <LightMode>
        <Button
          disabled={!email || !password}
          size="lg"
          type="submit"
          mt="8"
          w="full"
          colorScheme="blue"
          fontSize="md"
          fontWeight="bold"
        >
          Sign in
        </Button>
      </LightMode>
    </form>
  </>
);

export default LoginForm;
