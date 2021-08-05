import { HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";

type ContinentHighlightsProps = {
  smallDescription: string;
  countriesCount: number;
  languagesCount: number;
  citiesInTop100Count: number;
};

type AttributeProps = {
  value: string | number;
  label: string;
};

const Attribute = (props: AttributeProps) => (
  <VStack as="li" spacing={{ base: "-1", md: "-4" }}>
    <Text as="strong" color="highlight" fontSize={{ base: "2xl", md: "5xl" }}>
      {props.value}
    </Text>
    <Text
      as="span"
      fontSize={{ base: "lg", md: "2xl" }}
      fontWeight="semibold"
      color="textDark"
      mt={0}
    >
      {props.label}
    </Text>
  </VStack>
);

export const ContinentHighlights = (props: ContinentHighlightsProps) => {
  return (
    <SimpleGrid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      gap={{ base: "4", md: "16" }}
      alignItems="center"
      py={{ base: "4", md: "20" }}
    >
      <Text
        textAlign="justify"
        fontSize={{ base: "sm", md: "2xl" }}
        color="textDark"
      >
        {props.smallDescription}
      </Text>

      <HStack as="ul" justifyContent="space-around" flexWrap="wrap">
        <Attribute label="países" value={props.countriesCount} />
        <Attribute label="línguas" value={props.languagesCount} />
        <Attribute label="cidades +100" value={props.citiesInTop100Count} />
      </HStack>
    </SimpleGrid>
  );
};
