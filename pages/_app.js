import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
  Box,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';
import theme from '../theme';
import TopNav from '../components/TopNav';
import NavbarWithSubmenu from '../components/chakra/NavbarWithSubmenu/App';
import SimpleFooter from '../components/chakra/SimpleFooter/App';

function MyApp({ Component, pageProps }) {
  const store = createStore(rootReducer, composeWithDevTools());
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider store={store}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <MyBox>
            {/* <TopNav /> */}

            <NavbarWithSubmenu />
            {/* <DarkModeSwitch /> */}

            <Component {...pageProps} />
            <SimpleFooter />
          </MyBox>
        </ColorModeProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
const MyBox = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'black',
    dark: 'white',
  };
  const bgColor = {
    light: 'gray.50',
    dark: 'gray.900',
  };
  return (
    <>
      <Box
        minH="100vh"
        px={['0px', '0px', '0px', '0px']}
        bg={bgColor[colorMode]}
      >
        {children}
      </Box>
    </>
  );
};
