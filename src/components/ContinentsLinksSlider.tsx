import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { Heading, Link as ChakraLink, Text } from "@chakra-ui/react";

import { Cover } from "components/Cover";

SwiperCore.use([Navigation, Pagination]);

const continents = [
  {
    title: "Europa",
    subtitle: "O continente mais velho do mundo",
    image: "/europe-cover.jpg",
    href: "/continents/europe",
  },
];

export const ContinentsLinksSlider = () => {
  return (
    <Swiper slidesPerView={1} spaceBetween={48} navigation pagination>
      {continents.map((continent) => (
        <SwiperSlide key={continent.title}>
          <Cover
            h={{ base: "15.5rem", md: "28rem" }}
            bgImage={continent.image}
            aria-label="Europe image"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="textLight"
          >
            <ChakraLink textAlign="center">
              <Heading
                fontSize={{ base: "2xl", md: "5xl" }}
                fontWeigh="bold"
                mb={{ base: "3", md: "4" }}
              >
                {continent.title}
              </Heading>
              <Text fontSize={{ base: "sm", md: "2xl" }} fontWeigh="bold">
                {continent.subtitle}
              </Text>
            </ChakraLink>
          </Cover>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
