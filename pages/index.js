import Head from 'next/head';
import NextLink from 'next/link';
import {
  Button,
  ButtonGroup,
  Heading,
  Box,
  Text,
  Link,
  Image,
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
          <Box pb={6} margin="auto">
            <Text pb={4}>
              A collaborative, self-starting, and quick-learning developer. I'm
              currently based in Milwaukee, Wisconsin, and open to any local or
              remote opportunities.
            </Text>
            <Text pb={4}>
              Email me at{' '}
              <Link isExternal href="mailto:kmgoldfarb@gmail.com">
                <strong>kmgoldfarb@gmail.com</strong>
              </Link>
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
                  borderColor="teal.300"
                  rightIcon={<HiArrowNarrowRight />}
                  _hover={{
                    bg: 'teal.600',
                    textColor: 'white',
                    borderColor: 'teal.800',
                  }}
                >
                  About
                </Button>
              </NextLink>
              <a
                href="/uploads/Kevin_Goldfarb_Resume.pdf"
                alt="Kevin Goldfarb Resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  border="2px"
                  borderColor="teal.300"
                  rightIcon={<HiDownload />}
                  _hover={{
                    bg: 'teal.600',
                    textColor: 'white',
                    borderColor: 'teal.800',
                  }}
                >
                  Resume Download
                </Button>
              </a>
            </ButtonGroup>
          </Box>
          <Box color="teal.300" borderColor="teal.300" border="2px" />
          <Box>
            <Heading margin="auto" mb={6} mt={6}>
              Projects
            </Heading>
            <ProjectCard
              twoGithub={true}
              title="Everyday Notes"
              tech="React + Node + Express + MongoDB"
              website="http://everydaynotes.net"
              github1="https://github.com/kmgoldfarb/everyday-notes-frontend"
              github2="https://github.com/kmgoldfarb/everyday-notes-backend"
              description="A place to practice reflection in your daily life.
              Upload daily journal entries that chronicle your actions, mood, gratitude, and thoughts. Attach an image that represents the day. Access your journal from anywhere."
            />
            <ProjectCard
              twoGithub={false}
              title="Writing Portfolio"
              tech="React + GraphQL + GraphCMS"
              website="https://www.daniellagoldfarb.com"
              github1="https://github.com/kmgoldfarb/writing-portfolio"
              description="A writing portfolio site for scholars and students that allows them to publish their own content and biography using a headless CMS."
            />
            <ProjectCard
              twoGithub={false}
              title="Know Your Democracy"
              tech="React + Google Civic API + Google Places API"
              website="https://www.knowyourdemocracy.com"
              github1="https://github.com/kmgoldfarb/know-your-democracy"
              description="A website that allows residents of the United States to input their address and see who represents them in government, as well as any upcoming elections near them."
            />
          </Box>
        </Box>
      </main>
    </Box>
  );
}
