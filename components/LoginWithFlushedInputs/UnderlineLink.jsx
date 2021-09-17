import { Box, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react';

export const UnderlineLink = (props) => (
  <Box
    as="a"
    href="#"
    textDecoration="none"
    color={mode('#2b6cb0', 'whiteAlpha.900')}
    pos="relative"
    display="inline-block"
    transition="opacity 0.2s"
    _hover={{
      opacity: 0.8,
    }}
    _after={{
      content: `""`,
      display: 'block',
      w: 'full',
      h: '2px',
      bottom: 0,
      bg: 'blue.500',
      insetX: 0,
      insetY: 0,
    }}
    {...props}
  />
);
