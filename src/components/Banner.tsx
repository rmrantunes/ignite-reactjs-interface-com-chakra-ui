import { Heading } from "@chakra-ui/react";

import { Cover } from "components/Cover";
import { Container } from "components/Container";

type BannerProps = {
  bgImage: string;
  title?: string;
};

export const Banner = (props: BannerProps) => {
  return (
    <Cover
      h={{ base: "36", md: "31.25rem" }}
      bgImage={props.bgImage}
      aria-label={`Background image: ${props.title}`}
      darken
    >
      <Container
        display="flex"
        h="full"
        pb={{ base: 0, md: "14" }}
        alignItems={{ base: "center", md: "flex-end" }}
        justifyContent={{ base: "center", md: "stretch" }}
      >
        {props.title && (
          <Heading
            as="h1"
            color="textLight"
            fontSize={{ base: "2xl", md: "5xl" }}
          >
            {props.title}
          </Heading>
        )}
      </Container>
    </Cover>
  );
};
