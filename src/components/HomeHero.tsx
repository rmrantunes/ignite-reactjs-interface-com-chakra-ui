import Image from "next/image";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Container } from "components/Container";

import airplaneImg from "../../public/airplane.svg";

export const HomeHero = () => {
  return (
    <Box bgImage="/home-hero-bg.png" bgSize="cover" bgPosition="center center">
      <Container>
        <SimpleGrid
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap="8"
          height={{ base: 164, lg: 336 }}
          alignItems="center"
        >
          <Box>
            <Heading
              color="textLight"
              fontWeight="medium"
              lineHeight={1.3}
              fontSize={["xl", "2xl", "4xl"]}
            >
              5 continentes, infinitas possibilidades.
            </Heading>

            <Text
              color="infoLight"
              fontSize={["sm", "sm", "lg"]}
              mt={{ base: "2", lg: "5" }}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          <Box
            display={{ base: "none", lg: "flex" }}
            justifyContent="flex-end"
            position="relative"
            bottom="-16"
            zIndex="dropdown"
          >
            <Image src={airplaneImg} alt="Airplane illustration" />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
