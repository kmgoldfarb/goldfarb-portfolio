import { Box, Image, Text } from '@chakra-ui/react';

export default function TechCard(props) {
  return (
    <Box p={1} m={1}>
      <Image
        boxSize="80px"
        objectFit="cover"
        src={props.imgsrc}
        alt={props.imgalt}
        border="2px"
        borderColor="teal.300"
        borderRadius="lg"
        boxShadow="md"
        p={1}
      />
      <Text fontSize="lg" align="center" fontWeight="semibold" pt={1}>
        {props.techname}
      </Text>
    </Box>
  );
}
