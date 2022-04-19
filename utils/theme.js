/* COLOR SCHEME
   #FF5858-orange 1
   #F09819-orange 2
   #0F9BF6-blue 1
   #1823AB-blue 2
   #2b2d2e-black
   #ebf0f2-white
   #FA6E42-orange 3
   #000430-dark blue
   #d1ccbe-light grey
   #6e6a60-dark grey
*/

import { extendTheme } from '@chakra-ui/react';

const colors = {
  orange:{
    1:"#FF5858",
    2:"#F09819",
    3:"#FA6E42"
  },
  blue:{
    1:"#0F9BF6",
    2:"#1823AB",
    3:"#000430"
  },
  blackWhite:{
    "black":"#2b2d2e",
    "white":"#ebf0f2"
  },
  grey:{
    light:"#d1ccbe",
    dark:"#6e6a60"
  }
};
const components = {
  Container: {
    baseStyle: {
      maxW: 'container.xl',
    },
  },
};
const config = {
  initialColorMode: 'ligth',
  useSystemColorMode: true,
};
const fonts={
  heading:'actor, sans-serif',
  body : "Roboto Mono, monospace"
}

const theme = extendTheme({ colors, components, config, fonts});

export default theme;