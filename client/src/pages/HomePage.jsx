import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";

export default function Homepage() {
  return (
    <Box padding={8}>
      <Heading mt={16} textAlign={"start"} size={"4xl"}>
        My Notes App
      </Heading>
      <Text mt={8} maxW={"50%"} textAlign={"justify"}>
        Your Personal Notes App where you can create , read , update and delete your notes
        </Text>
    </Box>
  );
}