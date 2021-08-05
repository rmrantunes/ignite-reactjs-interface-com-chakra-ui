import { GetStaticPaths, GetStaticProps } from "next";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

import { Banner } from "components/Banner";
import { CityCard } from "components/CityCard";
import { Container } from "components/Container";
import { ContinentHighlights } from "components/ContinentHighlights";

type City = {
  city: string;
  country: string;
  image: string;
  countryFlag: string;
};

type ContinentPageProps = {
  continent: {
    banner: string;
    continentName: string;
    smallDescription: string;
    countriesCount: number;
    languagesCount: number;
    citiesInTop100Count: number;
    citiesInTop100: City[];
  };
};

export default function ContinentPage(props: ContinentPageProps) {
  return (
    <main>
      <Banner
        title={props.continent.continentName}
        bgImage={props.continent.banner}
      />
      <Container as="article" pb={{ base: "5", md: "12" }}>
        <ContinentHighlights
          smallDescription={props.continent.smallDescription}
          countriesCount={props.continent.countriesCount}
          languagesCount={props.continent.languagesCount}
          citiesInTop100Count={props.continent.citiesInTop100Count}
        />
        <Box as="section" mt={{ base: "4", md: 0 }}>
          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="medium"
            mb={{ base: "5", md: "10" }}
          >
            Cidades +100
          </Heading>

          <SimpleGrid minChildWidth={256} gap="8">
            {props.continent.citiesInTop100.map((city) => (
              <CityCard
                key={city.countryFlag}
                image={city.image}
                country={city.country}
                city={city.city}
                countryFlag={city.countryFlag}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { continent: "europe" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `http://localhost:8080/continent/${params?.continent}`
  );
  const continent = await response.json();

  return { props: { continent } };
};
