"use client";

import { Container, Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Cart = dynamic(() => import("../sections/Cart"), { ssr: false });
const Details = dynamic(() => import("../sections/Details"), { ssr: false });

const Page = () => (
  <Container maxW="container.lg" p="0">
    <Flex
      h={{ base: "auto", md: "100vh" }}
      py={[0, 10, 20]}
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default Page;
