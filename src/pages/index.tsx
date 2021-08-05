import { Box, Text } from "@chakra-ui/react";

import { HomeHero } from "components/HomeHero";
import { Container } from "components/Container";
import { DestinationTypesList } from "components/DestinationTypesList";
import { ContinentsLinksSlider } from "components/ContinentsLinksSlider";

export default function Home() {
  return (
    <Box as="main" pb="8">
      <HomeHero />
      <Container>
        <DestinationTypesList />
      </Container>
      <Container py={{ base: "5", md: "12" }}>
        <Text
          color="textDark"
          textAlign="center"
          fontSize={{ base: "lg", md: "4xl" }}
          fontWeight="medium"
        >
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
      </Container>
      <Container enablePadding={false}>
        <ContinentsLinksSlider />
      </Container>
    </Box>
  );
}
