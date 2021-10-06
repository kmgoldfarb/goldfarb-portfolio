import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
} from '@chakra-ui/react';
import { HiHome, HiDownload } from 'react-icons/hi';

export default function About() {
  return (
    <Box width={['90%', '80%', '70%', '50%']} margin="auto" pt={8}>
      <Breadcrumb pb={2}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/about" isCurrentPage>
            About
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading pb={4}>It's nice to meet you!</Heading>
      <Box color="teal.300" borderColor="teal.300" border="2px" mb={4} />
      <Text pb={4}>
        Thanks for stopping by my website. I'm a self-taught, quick to learn,
        and driven developer with substantive front-end and back-end experience
        based in Milwaukee, Wisconsin. I'm currently open to any local or remote
        opportunities. Previously I've worked as a designer, communications
        specialist, and audio engineer. I'd love to get to know you more, so
        please connect with me over email or on Twitter.
      </Text>
      <Text pb={4}>
        Email:{' '}
        <Link isExternal href="mailto:kmgoldfarb@gmail.com">
          <strong>kmgoldfarb@gmail.com</strong>
        </Link>
      </Text>
      <Text pb={4}>
        Twitter:{' '}
        <Link isExternal href="https://twitter.com/kmgoldfarb">
          <strong>@kmgoldfarb</strong>
        </Link>
      </Text>
      <Box pb={4}>
        <a
          href="/uploads/Kevin_Goldfarb_Resume.pdf"
          alt="Kevin Goldfarb Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            bg="none"
            size="sm"
            border="2px"
            rightIcon={<HiDownload />}
            borderColor="teal.300"
            _hover={{
              bg: 'teal.600',
              textColor: 'white',
              borderColor: 'teal.800',
            }}
          >
            Resume Download
          </Button>
        </a>
      </Box>
      <Image
        borderRadius={8}
        border="2px"
        borderColor="teal.300"
        boxSize="200px"
        src="/uploads/Profile.jpg"
        alt="Kevin Goldfarb"
      />
      <Button
        as="a"
        href="/"
        variant="ghost"
        colorScheme="teal"
        mt={6}
        rightIcon={<HiHome />}
      >
        Go back home
      </Button>
    </Box>
  );
}
