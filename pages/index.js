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
import { HiArrowNarrowRight, HiDownload } from 'react-icons/hi';
import ProjectCard from '../Components/ProjectCard';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Kevin Goldfarb</title>
        <meta
          name="description"
          content="A portfolio website for Kevin Goldfarb."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box margin="auto" maxW="2xl">
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
          <Box pb={6} maxW="2xl" margin="auto">
            <Text pb={4}>
              A collaborative, self-starting, and quick-learning developer. I'm
              currently based in Milwaukee, Wisconsin, and open to any local or
              remote opportunities.
            </Text>
            <Text pb={4}>
              Email me at <strong>kmgoldfarb@gmail.com</strong>
            </Text>
            <ButtonGroup
              colorScheme="black"
              size="sm"
              variant="outline"
              spacing="4"
            >
              <NextLink href={'/about'} style={{ textDecoration: 'none' }}>
                <Button
                  border="2px"
                  rightIcon={<HiArrowNarrowRight />}
                  _hover={{
                    bg: '#00B5D8',
                    textColor: 'white',
                    borderColor: '#065666',
                  }}
                >
                  About
                </Button>
              </NextLink>
              <a
                href="/uploads/Kevin_Goldfarb_Resume_Sept_2021.pdf"
                alt="Kevin Goldfarb Resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  border="2px"
                  rightIcon={<HiDownload />}
                  _hover={{
                    bg: '#00B5D8',
                    textColor: 'white',
                    borderColor: '#065666',
                  }}
                >
                  Resume Download
                </Button>
              </a>
            </ButtonGroup>
          </Box>
          <Box>
            <Heading maxW="2xl" margin="auto" pb={4}>
              Projects
            </Heading>
            <ProjectCard
              twoGithub={true}
              title="Everyday Notes"
              tech="React + Node + Express + MongoDB"
              website="http://everydaynotes.net"
              github1="https://github.com/kmgoldfarb/everyday-notes-frontend"
              github2="https://github.com/kmgoldfarb/everyday-notes-backend"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <ProjectCard
              twoGithub={false}
              title="Writing Portfolio"
              tech="React + GraphQL + GraphCMS"
              website="https://www.daniellagoldfarb.com"
              github1="https://github.com/kmgoldfarb/writing-portfolio"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <ProjectCard
              twoGithub={false}
              title="Know Your Democracy"
              tech="React + Google Civic API + Google Places API"
              website="https://www.knowyourdemocracy.com"
              github1="https://github.com/kmgoldfarb/know-your-democracy"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </Box>
        </Box>
      </main>
    </Box>
  );
}
