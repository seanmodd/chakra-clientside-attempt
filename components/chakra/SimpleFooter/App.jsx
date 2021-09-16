import * as React from 'react';
import {
  Box,
  ChakraProvider,
  useColorMode,
  Stack,
  IconButton,
  HStack,
  ColorModeProvider,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Copyright } from './Copyright';
import { Logo } from './Logo';
import { SocialMediaLinks } from './SocialMediaLinks';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'gray.400',
    dark: 'gray.50',
  };
  const bgColor = {
    light: 'gray.50',
    dark: 'gray.900',
  };
  return (
    <Box
      as="footer"
      role="contentinfo"
      // mx="auto"
      // position="fixed"
      minW="99%"
      justifyContent="center"
      bottom="0px"
      py="6"
      px={{
        base: '4',
        md: '8',
      }}
    >
      <Stack justifyContent="center">
        <Stack
          direction="row"
          spacing="4"
          align="center"
          justifyContent="center"
        >
          {/* <Logo /> */}
          <SocialMediaLinks />
        </Stack>
        <Copyright
          justifyContent="center"
          color={iconColor[colorMode]}
          alignSelf={{
            base: 'center',
            sm: 'start',
          }}
        />
      </Stack>
    </Box>
  );
};
export default App;
