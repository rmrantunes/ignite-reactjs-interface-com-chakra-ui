import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { Banner } from "components/Banner";
import { CityCard } from "components/CityCard";
import { Container } from "components/Container";
import { ContinentHighlights } from "components/ContinentHighlights";

export default function ContinentPage() {
  return (
    <main>
      <Banner title="Europe" bgImage="/europe-cover.jpg" />
      <Container as="article" pb={{ base: "5", md: "12" }}>
        <ContinentHighlights
          smallDescription="A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste."
          countriesCount={50}
          languagesCount={60}
          citiesInTop100Count={27}
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
            <CityCard
              image="/europe-cover.jpg"
              country="Reino Unido"
              city="Londres"
              flag="https://restcountries.eu/data/gbr.svg"
            />
            <CityCard
              image="/europe-cover.jpg"
              country="Reino Unido"
              city="Londres"
              flag="https://restcountries.eu/data/gbr.svg"
            />
            <CityCard
              image="/europe-cover.jpg"
              country="Reino Unido"
              city="Londres"
              flag="https://restcountries.eu/data/gbr.svg"
            />
            <CityCard
              image="/europe-cover.jpg"
              country="Reino Unido"
              city="Londres"
              flag="https://restcountries.eu/data/gbr.svg"
            />
          </SimpleGrid>
        </Box>
      </Container>
    </main>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [{ params: { continent: "europe" } }],
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   return { props: { continent: params?.continent } };
// };
