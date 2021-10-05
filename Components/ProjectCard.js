import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function ProjectCard(props) {
  return (
    <Box
      maxW="2xl"
      borderRadius="lg"
      boxShadow="xl"
      margin="auto"
      marginBottom={8}
      p={4}
      border="2px"
    >
      <Heading size="lg" as="u">
        {props.title}
      </Heading>
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
        <ButtonGroup
          display="inline"
          colorScheme="black"
          size="sm"
          variant="outline"
          spacing="4"
        >
          {props.twoGithub && (
            <>
              <Link
                href={props.website}
                style={{ textDecoration: 'none' }}
                isExternal
              >
                <Button
                  border="2px"
                  rightIcon={<HiOutlineExternalLink />}
                  _hover={{
                    bg: '#00B5D8',
                    textColor: 'white',
                    borderColor: '#065666',
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
                  _hover={{
                    bg: '#00B5D8',
                    textColor: 'white',
                    borderColor: '#065666',
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
                  _hover={{
                    bg: '#00B5D8',
                    textColor: 'white',
                    borderColor: '#065666',
                  }}
                >
                  Backend Github
                </Button>
              </Link>
            </>
          )}
          {!props.twoGithub && (
            <>
              <Link
                href={props.website}
                style={{ textDecoration: 'none' }}
                isExternal
              >
                <Button
                  border="2px"
                  rightIcon={<HiOutlineExternalLink />}
                  _hover={{
                    bg: '#00B5D8',
                    textColor: 'white',
                    borderColor: '#065666',
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
                  _hover={{
                    bg: '#00B5D8',
                    textColor: 'white',
                    borderColor: '#065666',
                  }}
                >
                  Github
                </Button>
              </Link>
            </>
          )}
        </ButtonGroup>
      </Box>
    </Box>
  );
}
