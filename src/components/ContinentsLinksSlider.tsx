import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { Heading, Link as ChakraLink, Text } from "@chakra-ui/react";

import { Cover } from "components/Cover";

SwiperCore.use([Navigation, Pagination]);

const continents = [
  {
    title: "Europa",
    subtitle: "O continente mais velho do mundo",
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    href: "/continent/europe",
  },
  {
    title: "Ásia",
    subtitle: "O maior e mais populoso continente do mundo.",
    image:
      "https://images.unsplash.com/photo-1543097692-fa13c6cd8595?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    href: "/continent/europe",
  },
  {
    title: "America do Sul",
    subtitle: "Ao leste, Atlântico. Ao oeste, Pacífico.",
    image:
      "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
    href: "/continent/europe",
  },
  {
    title: "America do Norte",
    subtitle: "Eu ouvi 'Grand Canyon'?",
    image:
      "https://images.unsplash.com/photo-1516141535911-e3b982713e61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    href: "/continent/europe",
  },
  {
    title: "África",
    subtitle: "Deserto ou savana?",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    href: "/continent/europe",
  },
  {
    title: "Oceania",
    subtitle: "O menor continente do mundo. Mas tem cangurus :)",
    image:
      "https://images.unsplash.com/photo-1594316152008-09c685e0292e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    href: "/continent/europe",
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
            darken
          >
            <Link href={continent.href} passHref>
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
            </Link>
          </Cover>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
