import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import {
  Box,
  Center,
  SimpleGrid,
  useBreakpointValue,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { Container } from "./Container";

import logoImg from "../../public/logo.svg";
import arrowLeftImg from "../../public/arrow-left.svg";

export default function Header() {
  const logoWidth = useBreakpointValue({
    base: 128,
    lg: 185,
  });

  const router = useRouter();
  const isNotHomePage = router.asPath !== "/";

  return (
    <Box as="header" bgColor="textLight">
      <Container>
        <SimpleGrid templateColumns="3rem 1fr 3rem">
          {isNotHomePage && (
            <Link href="/" passHref>
              <ChakraLink
                display="flex"
                alignItems="center"
                justifyContent="center"
                aria-label="Go back to home"
              >
                <Image src={arrowLeftImg} alt="" />
              </ChakraLink>
            </Link>
          )}
          <Center py={{ base: "4", lg: "7" }} gridColumn="2">
            <Image src={logoImg} alt="worldtrip" width={logoWidth} />
          </Center>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
