import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';

const RegisterForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) => (
  <>
    <form onSubmit={handleSubmit}>
      <Stack spacing="4">
        <FormControl id="name">
          <FormLabel mb={1} color={mode('gray.900', 'gray.50')}>
            Name
          </FormLabel>
          <Input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel color={mode('gray.900', 'gray.50')} mb={1}>
            Email
          </FormLabel>
          <Input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Flex align="baseline" justify="space-between">
            <FormLabel color={mode('gray.900', 'gray.50')} mb={1}>
              Password
            </FormLabel>
          </Flex>
          <Input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="current-password"
          />
        </FormControl>
        <Button
          disabled={!name || !email || !password}
          type="submit"
          colorScheme="blue"
          size="lg"
          fontSize="md"
        >
          Create my account
        </Button>
      </Stack>
    </form>
  </>
);

export default RegisterForm;
