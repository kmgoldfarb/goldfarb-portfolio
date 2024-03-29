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
import TechCard from '../Components/TechCard';

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
          <Box pb={6} margin="auto">
            <Text pb={4}>
              A self-taught, quick to learn, and driven developer with
              substantive front-end and back-end experience. I'm currently based
              in Milwaukee, Wisconsin, and open to any local or remote
              opportunities.
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
            </ButtonGroup>
          </Box>
          <Box color="teal.300" borderColor="teal.300" border="2px" />
          <Heading margin="auto" mb={6} mt={6}>
            Proficiencies
          </Heading>
          <Box
            display="flex"
            justifyContent="space-evenly"
            flexWrap="wrap"
            pb={4}
          >
            <TechCard
              imgsrc="/uploads/React-icon.png"
              imgalt="React"
              techname="React"
            />
            <TechCard
              imgsrc="/uploads/javascript-144.png"
              imgalt="JavaScript"
              techname="JavaScript"
            />
            <TechCard
              imgsrc="/uploads/css3-144.png"
              imgalt="CSS"
              techname="CSS"
            />
            <TechCard
              imgsrc="/uploads/html-5-144.png"
              imgalt="HTML"
              techname="HTML"
            />
            <TechCard
              imgsrc="/uploads/nodejs-144.png"
              imgalt="Node"
              techname="Node"
            />
            <TechCard
              imgsrc="/uploads/python-144.png"
              imgalt="Python"
              techname="Python"
            />
            <TechCard
              imgsrc="/uploads/mongodb-144.png"
              imgalt="MongoDB"
              techname="MongoDB"
            />
            <TechCard
              imgsrc="/uploads/mysql-logo-144.png"
              imgalt="MySQL"
              techname="MySQL"
            />
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
              description="A full stack project that allows users to chronicle their daily thoughts and upload images
              attached to journal entries. Integrated Firebase Authentication within the React app, used Node
              and Express to build the API, and deployed the server to a Linux machine."
            />
            <ProjectCard
              twoGithub={false}
              title="F1 News Today"
              tech="Python + Django + HTML"
              website="https://www.f1news.today/"
              github1="https://github.com/kmgoldfarb/f1-news-today"
              description="A content aggregator that retrievews news articles, standings, and upcoming races for Formula 1 from around the web. Built the frontend using Django templates, and used Python to build the scripts that scrape the web."
            />
            <ProjectCard
              twoGithub={false}
              title="Writing Portfolio Site for Academics"
              tech="React + GraphQL + GraphCMS"
              website="https://www.daniellagoldfarb.com"
              github1="https://github.com/kmgoldfarb/writing-portfolio"
              description="A writing portfolio site for scholars and students that allows them to publish their own content
              and biography using a headless CMS. Utilizes GraphQL queries to fetch appropriate content and
              author information."
            />
            <ProjectCard
              twoGithub={false}
              title="Know Your Democracy"
              tech="React + Google Civic API + Google Places API"
              website="https://www.knowyourdemocracy.com"
              github1="https://github.com/kmgoldfarb/know-your-democracy"
              description="A website that allows residents of the United States to input their address and see who
              represents them in government, as well as any upcoming elections near them. Learned how to
              implement Google Autocomplete to allow for easy user entry of their address."
            />
            <ProjectCard
              twoGithub={false}
              title="Kevin Goldfarb Portfolio"
              tech="NextJS"
              website="https://kevingoldfarb.com"
              github1="https://github.com/kmgoldfarb/goldfarb-portfolio"
              description="The place you're at right now! A site to gather all my work in the same place."
            />
          </Box>
        </Box>
      </main>
    </Box>
  );
}
