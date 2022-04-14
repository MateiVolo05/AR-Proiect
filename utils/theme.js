import { extendTheme } from '@chakra-ui/react';

/* COLOR SCHEME
   #FF5858-orange 1
   #F09819-orange 2
   #0F9BF6-blue 1
   #1823AB-blue 2
   #2b2d2e-black
   #ebf0f2-white
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