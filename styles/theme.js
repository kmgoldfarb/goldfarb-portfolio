import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Heebo, sans-serif',
    heading: 'Roboto Mono, monospace',
  },
  fontWeights: {
    thin: 200,
    normal: 400,
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: 'Roboto Mono, monospace',
      },
    },
  },
});

export default theme;
