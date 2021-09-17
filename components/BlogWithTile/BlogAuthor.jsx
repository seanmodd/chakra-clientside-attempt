import {
  Flex,
  HStack,
  useColorModeValue as mode,
  Img,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';

export const BlogAuthor = (props) => {
  const { image, name, role, ...rest } = props;
  return (
    <HStack spacing="4" {...rest}>
      <Img
        objectFit="cover"
        rounded="full"
        htmlHeight="40px"
        htmlWidth="40px"
        w="10"
        h="10"
        alt={name}
        src={image}
      />
      <Flex direction="column">
        <Text
          color={mode('gray.900', 'gray.50')}
          fontWeight="semibold"
          fontSize="sm"
        >
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {role}
        </Text>
      </Flex>
    </HStack>
  );
};
