import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';
import theme from '../theme';
import TopNav from '../components/TopNav';

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
          <TopNav />
          <Component {...pageProps} />
        </ColorModeProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
