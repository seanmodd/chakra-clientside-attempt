import {
  Box,
  ChakraProvider,
  useColorMode,
  IconButton,
  HStack,
  ColorModeProvider,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import * as React from 'react';

import { NavContent } from './NavContent';

const App = () => (
  <Box>
    <Box as="header" position="fixed" zIndex="99999">
      <Box
        as="nav"
        aria-label="Main navigation"
        bg={mode('gray.50', 'gray.900')}
        maxW="7xl"
        mx="auto"
        px={{
          base: '6',
          md: '0',
        }}
      >
        <DarkModeSwitch />
        <NavContent.Mobile
          display={{
            base: 'flex',
            lg: 'none',
          }}
        />
        <NavContent.Desktop
          display={{
            base: 'none',
            lg: 'flex',
          }}
        />
      </Box>
    </Box>
  </Box>
);
export default App;

const DarkModeSwitch = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'gray.400',
    dark: 'gray.200',
  };
  const bgColor = {
    light: 'gray.200',
    dark: 'gray.900',
  };
  return (
    <>
      <HStack
        position="fixed"
        top={['10px', '17px', '17px', '17px']}
        right="-30px"
        zIndex="10"
        // borderWidth="4px"
        // backgroundColor={bgColor[colorMode]}
        // w="100vw"
        justify="flex-end"
      >
        <IconButton
          aria-label="Toggle Dark Switch"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          zIndex="10000"
          onClick={toggleColorMode}
          color={iconColor[colorMode]}
          bgColor={bgColor[colorMode]}
          marginRight="4rem"
          // bg={bgColor[colorMode]}
        >
          {children}
        </IconButton>
      </HStack>
    </>
  );
};
