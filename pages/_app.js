import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import rootReducer from '../reducers';
import theme from '../theme';

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
          <Component {...pageProps} />
        </ColorModeProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
