import Image from "next/image";
import { Flex, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

import cocktailImg from "../../public/cocktail.svg";
import surfImg from "../../public/surf.svg";
import buildingImg from "../../public/building.svg";
import museumImg from "../../public/museum.svg";
import earthImg from "../../public/earth.svg";

const destinationTypes = [
  {
    iconSrc: cocktailImg,
    iconAlt: "Cocktail illustration",
    text: "vida noturna",
  },
  { iconSrc: surfImg, iconAlt: "Surf illustration", text: "praia" },
  { iconSrc: buildingImg, iconAlt: "Building illustration", text: "moderno" },
  { iconSrc: museumImg, iconAlt: "Museum illustration", text: "clássico" },
  {
    iconSrc: earthImg,
    iconAlt: "Planet Earth illustration",
    text: "e mais...",
  },
];

export const DestinationTypesList = () => {
  const isMediumScreen = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex justify="center" as="ul" flexWrap="wrap" py={{ base: "9", md: "20" }}>
      {destinationTypes.map((destinationType) => (
        <VStack
          spacing="6"
          as="li"
          key={destinationType.text}
          minW={228}
          py={{ base: "2", md: "4", xl: "1" }}
        >
          {isMediumScreen && (
            <Image
              src={destinationType.iconSrc}
              alt={destinationType.iconAlt}
            />
          )}
          <Text
            as="strong"
            color="textDark"
            fontSize={{ base: "lg", md: "2xl" }}
            fontWeight="semibold"
            display="flex"
            alignItems="center"
            _before={{
              content: '""',
              display: { base: "inline-block", md: "none" },
              w: "2",
              h: "2",
              mr: "2",
              rounded: "full",
              bgColor: "highlight",
            }}
          >
            {destinationType.text}
          </Text>
        </VStack>
      ))}
    </Flex>
  );
};
