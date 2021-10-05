import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Text,
  Link,
  Stack,
} from '@chakra-ui/react';
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function ProjectCard(props) {
  return (
    <Box
      borderRadius="lg"
      boxShadow="xl"
      margin="auto"
      marginBottom={8}
      p={4}
      border="2px"
      borderColor="teal.300"
    >
      <Link href={props.website} isExternal>
        <Heading size="lg">{props.title}</Heading>
      </Link>
      <Text mt={4} mb={4}>
        {props.description}
      </Text>
      <Box mb={4}>
        <Text fontFamily="Roboto Mono">
          <strong>TECH: </strong>
          {props.tech}
        </Text>
      </Box>
      <Box>
        {props.twoGithub && (
          <ButtonGroup
            size="sm"
            variant="outline"
            display={['inline', 'block']}
          >
            <Stack direction={['column', 'column', 'row']} spacing={2}>
              <Link
                href={props.website}
                style={{ textDecoration: 'none' }}
                isExternal
              >
                <Button
                  border="2px"
                  rightIcon={<HiOutlineExternalLink />}
                  borderColor="teal.300"
                  _hover={{
                    bg: 'teal.600',
                    textColor: 'white',
                    borderColor: 'teal.800',
                  }}
                >
                  Visit Website
                </Button>
              </Link>
              <Link
                href={props.github1}
                style={{ textDecoration: 'none' }}
                isExternal
              >
                <Button
                  border="2px"
                  rightIcon={<HiOutlineExternalLink />}
                  borderColor="teal.300"
                  _hover={{
                    bg: 'teal.600',
                    textColor: 'white',
                    borderColor: 'teal.800',
                  }}
                >
                  Frontend Github
                </Button>
              </Link>
              <Link
                href={props.github2}
                style={{ textDecoration: 'none' }}
                isExternal
              >
                <Button
                  border="2px"
                  rightIcon={<HiOutlineExternalLink />}
                  borderColor="teal.300"
                  _hover={{
                    bg: 'teal.600',
                    textColor: 'white',
                    borderColor: 'teal.800',
                  }}
                >
                  Backend Github
                </Button>
              </Link>
            </Stack>
          </ButtonGroup>
        )}
        {!props.twoGithub && (
          <ButtonGroup size="sm" variant="outline">
            <Stack direction={['column', 'column', 'row']} spacing={2}>
              <Link
                href={props.website}
                style={{ textDecoration: 'none' }}
                isExternal
              >
                <Button
                  border="2px"
                  rightIcon={<HiOutlineExternalLink />}
                  borderColor="teal.300"
                  _hover={{
                    bg: 'teal.600',
                    textColor: 'white',
                    borderColor: 'teal.800',
                  }}
                >
                  Visit Website
                </Button>
              </Link>
              <Link
                href={props.github1}
                isExternal
                style={{ textDecoration: 'none' }}
              >
                <Button
                  border="2px"
                  rightIcon={<HiOutlineExternalLink />}
                  borderColor="teal.300"
                  _hover={{
                    bg: 'teal.600',
                    textColor: 'white',
                    borderColor: 'teal.800',
                  }}
                >
                  Github
                </Button>
              </Link>
            </Stack>
          </ButtonGroup>
        )}
      </Box>
    </Box>
  );
}
