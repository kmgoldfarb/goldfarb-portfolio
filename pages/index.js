import Head from 'next/head';
import NextLink from 'next/link';
import {
  Button,
  ButtonGroup,
  Heading,
  Box,
  Text,
  Link,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Kevin Goldfarb</title>
        <meta
          name="description"
          content="A portfolio website for Kevin Goldfarb."
        />
        <link rel="icon" href="/uploads/favicon.ico" />
      </Head>
      <main>
        <Box margin="auto" width={['90%', '80%', '70%', '50%']}>
          <Heading
            as="h1"
            size="3xl"
            margin="auto"
            marginTop={6}
            pb={4}
            fontFamily="Heebo"
          >
            Kevin Goldfarb
          </Heading>
      </main>
    </Box>
  );
}
