import { Box, Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      // as="header"
      w="100%"
      maxWidth={1480}
      h="10"
      mx="auto"
      my="4"
      px="6"
      align="center"
    >
      <Image src="/images/logo.svg" alt="Worldtrip" boxSize="100" mx="auto" />
    </Flex>
  )
}