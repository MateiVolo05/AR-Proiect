import { ChakraProvider } from '@chakra-ui/react';
import theme from '../utils/theme';
import '../styles/scrollbar.css'
import '../styles/animation.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
          <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;