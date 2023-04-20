import { Box, Heading, Text } from "@chakra-ui/react";

export default function Homepage() {
  return (
    <Box padding={8}>
      <Heading mt={16} textAlign={"start"} size={"4xl"}>
        My Notes App
      </Heading>
      <Text mt={8} maxW={"100%"} textAlign={"justify"}>
        Your Personal Notes App where you can create , read , update and delete
        your notes
      </Text>
    </Box>
  );
}
