"use client";

import { Container, Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Cart = dynamic(() => import("../sections/Cart"), { ssr: false });
const Details = dynamic(() => import("../sections/Details"), { ssr: false });

const Page = () => (
  <Container maxW="container.lg" p="0">
    <Flex h="100vh" py="20">
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default Page;
