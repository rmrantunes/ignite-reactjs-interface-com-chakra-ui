import { Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Cover } from "./Cover";

type CityCardProps = {
  image: string;
  city: string;
  country: string;
  flag?: string;
};

export const CityCard = (props: CityCardProps) => {
  return (
    <SimpleGrid templateRows="11rem auto">
      <Cover bgImage={props.image} aria-label={props.city} />
      <Flex
        px="6"
        py="4"
        bgColor="white"
        alignItems="center"
        justify="space-between"
      >
        <VStack alignItems="start" justify="space-between">
          <Text as="strong">{props.city}</Text>
          <Text as="span">{props.country}</Text>
        </VStack>
        {props.flag && (
          <Cover
            rounded="full"
            h="8"
            w="8"
            bgImage={props.flag}
            aria-label={`Bandeira: ${props.country}`}
          />
        )}
      </Flex>
    </SimpleGrid>
  );
};
