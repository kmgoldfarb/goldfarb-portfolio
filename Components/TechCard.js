import { Box, Image, Text } from '@chakra-ui/react';

export default function TechCard(props) {
  return (
    <Box p={1} m={1}>
      <Image
        boxSize="80px"
        objectFit="cover"
        src={props.imgsrc}
        alt={props.imgalt}
      />
      <Text fontSize="lg" align="center" fontWeight="bold">
        {props.techname}
      </Text>
    </Box>
  );
}
