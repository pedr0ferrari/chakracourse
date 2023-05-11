"use client";
import Cart from "@/sections/Cart";
import Details from "@/sections/Details";
import { Container, Flex, VStack, Text } from "@chakra-ui/react";

const Page = () => (
  <Container maxW="container.xl" p="0">
    <Flex h="100vh" py="20">
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default Page;
