import { extendTheme } from '@chakra-ui/react';

/* #FF5858-orange 1
   #F09819-orange 2
   #0F9BF6-blue 1
   #1823AB-blue 2
*/

const colors = {};
const components = {
  Container: {
    baseStyle: {
      maxW: 'container.xl',
    },
  },
};
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const fonts={
  heading:'actor, sans-serif',
  body:'actor, sans-serif'
}

const theme = extendTheme({ colors, components, config, fonts});

export default theme;