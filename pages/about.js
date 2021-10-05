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
import { HiArrowNarrowRight, HiDownload } from 'react-icons/hi';

export default function About() {
  return (
    <Box maxW="2xl" margin="auto" pt={8}>
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
      <Text pb={4}>
        Thanks for stopping by my website. I'm a collaborative, self-starting,
        and quick-learning developer looking for frontend or full stack work.
        I'm currently based in Milwaukee, Wisconsin, and open to any local or
        remote opportunities. Previously I've worked as a designer,
        photographer, and communications specialist. I'd love to get to know you
        more, so please connect with me over email or on Twitter.
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
      </Box>
      <Image
        borderRadius="full"
        boxSize="200px"
        src="/uploads/Profile.jpg"
        alt="Kevin Goldfarb"
      />
    </Box>
  );
}
