import {
  Box,
  Flex,
  HStack,
  Img,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { ImQuotesLeft } from 'react-icons/im';

export function Testimonial() {
  return (
    <Flex as="blockquote" flex="1">
      <Box marginEnd="4" fontSize="32px" color="gray.300">
        <ImQuotesLeft />
      </Box>
      <Box>
        <Text color={mode('#2b6cb0', 'gray.300')} fontSize="2xl" mt="4">
Our best deals go directly to NextCar first. We’re proud to be a part of the NextCar growing network of dealerships.
        </Text>
        <HStack spacing="4" mt="8">
          {/* <Img
            w="12"
            h="12"
            alt="Kunle Panther"
            rounded="full"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1547037579-f0fc020ac3be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YWZyaWNhJTIwbWFuJTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          /> */}
          <Box>
            <Text
              color={mode('#2b6cb0', 'gray.300')}
              as="cite"
              fontStyle="normal"
              fontWeight="medium"
            >
              Kunle Panther
            </Text>
            <Text color={mode('gray.600', 'gray.400')}>
              VP, Sales at Stevens Creek Chrysler Jeep Dodge
            </Text>
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
}
