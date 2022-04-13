import { ChakraProvider } from '@chakra-ui/react';
import theme from '../utils/theme';
import Nav from '../components/Navbar';

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