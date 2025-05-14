import { Center, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Center minH="100vh">
      <Box
        w="100vw"
        h="100vh"
        bg="#021716"
        textAlign="center"
        color="#bfdbfe"
        fontWeight="bold"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="70vw"
          h="70vh"
          bg="#143720"
          textAlign="center"
          color="#bfdbfe"
          fontWeight="bold"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            w="35vw"
            h="35vh"
            bg="#32583f"
            textAlign="center"
            color="#bfdbfe"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="3rem"
            border="2px solid #bfdbfe"
          >
            Kevin Goldfarb
          </Box>
        </Box>
      </Box>
    </Center>
  );
}
