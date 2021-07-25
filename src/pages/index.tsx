import { Box, Divider, Flex, Image, ListIcon, ListItem, UnorderedList, Text, useBreakpointValue, Link as LinkChakra } from "@chakra-ui/react";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import { GoPrimitiveDot } from 'react-icons/go';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";


SwiperCore.use([Navigation]);

export default function Home() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });


  return (
    <>
      <Flex
        w="100vw"
        h={["200", "350"]}
        p={["6", "20"]}

        justifyContent="space-between"
        backgroundImage="/images/background.svg"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Box
          my="auto"
        >
          <Text
            fontSize={["xl", "2xl", "5xl"]}
            fontWeight="500"
            color="gray.50"
          >
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text
            color="gray.50"
            fontWeight=""
            fontSize={["sm", "lg", "3xl"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou
          </Text>
        </Box>
        {isWideVersion && (
          <Box align="center">
            <Image src="/images/airplane.svg" alt="airplane" />
          </Box>
        )}

      </Flex>

      <UnorderedList
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        listStyleType="none"
        w="100%"
        h="200"
        maxWidth={1480}
        mx="auto"
        my="10"
        px={["50", "50", "6"]}
        flexFlow="row wrap"
      >
        <ListItem
          align="center"
          display="flex"
          alignItems="center"
          flexDir={["row", "row", "column"]}
        >
          {isWideVersion ? (
            <Image src="/images/cocktail.svg" alt="cocktail" boxSize="10" />
          ) : (
            <ListIcon as={GoPrimitiveDot} color="yellow.300" />
          )
          }
          <Text>Vida noturna</Text>
        </ListItem>

        <ListItem
          align="center"
          display="flex"
          alignItems="center"
          flexDir={["row", "row", "column"]}
        >
          {isWideVersion ? (
            <Image src="/images/surf.svg" alt="surf" boxSize="10" />
          ) : (
            <ListIcon as={GoPrimitiveDot} color="yellow.300" />
          )}
          <Text>Praia</Text>
        </ListItem>

        <ListItem
          align="center"
          display="flex"
          alignItems="center"
          flexDir={["row", "row", "column"]}
        >
          {isWideVersion ? (
            <Image src="/images/building.svg" alt="building" boxSize="10" />
          ) : (
            <ListIcon as={GoPrimitiveDot} color="yellow.300" />
          )}
          <Text>Moderno</Text>
        </ListItem>

        <ListItem
          align="center"
          display="flex"
          alignItems="center"
          flexDir={["row", "row", "column"]}
        >
          {isWideVersion ? (
            <Image src="/images/museum.svg" alt="museum" boxSize="10" />
          ) : (
            <ListIcon as={GoPrimitiveDot} color="yellow.300" />
          )}
          <Text>Clássico</Text>
        </ListItem>

        <ListItem
          align="center"
          display="flex"
          alignItems="center"
          flexDir={["row", "row", "column"]}
        >
          {isWideVersion ? (
            <Image src="/images/earth.svg" alt="world" boxSize="10" />
          ) : (
            <ListIcon as={GoPrimitiveDot} color="yellow.300" />
          )}
          <Text>e mais ...</Text>
        </ListItem>

      </UnorderedList>

      <Flex>
        <Divider
          mx="auto"
          w="90px"
          size="1px"
          alignSelf="center"
          borderWidth="2px"
          borderRadius="5px"
          borderColor="gray.600"
        />
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="center"
        my="10"
      >
        <Text
          textAlign="center"
          fontSize={["xl", "2xl", "5xl"]}
          fontWeight="500"

        >
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
      </Flex>

      <Flex
        maxWidth={1480}
        w="100%"
        h="450"
        mx="auto"
        my="10"
      >
        <Swiper navigation={true} className="mySwiper">

          <SwiperSlide
            style={{
              backgroundImage: `url("/images/americaNorth.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            <Link href="/continent/north-america" passHref >
              <LinkChakra>
                <Box>
                  <Text color="gray.50" fontSize={["2xl", "5xl"]} fontWeight="700" textAlign="center" >América do Norte</Text>
                  <Text color="gray.300" fontSize={["xs", "sm", "lg"]} fontWeight="700" textAlign="center" >O continente mais antigo</Text>
                </Box>
              </LinkChakra>
            </Link>
          </SwiperSlide>

          <SwiperSlide
            style={{
              backgroundImage: `url("/images/rioDeJaneiro.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            <Box>
              <Text color="gray.50" fontSize={["2xl", "5xl"]} fontWeight="700" textAlign="center" >América do Sul</Text>
              <Text color="gray.300" fontSize={["xs", "sm", "lg"]} fontWeight="700" textAlign="center" >O continente mais antigo</Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url("/images/japan.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            <Box>
              <Text color="gray.50" fontSize={["2xl", "5xl"]} fontWeight="700" textAlign="center" >Ásia</Text>
              <Text color="gray.300" fontSize={["xs", "sm", "lg"]} fontWeight="700" textAlign="center" >O continente mais antigo</Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url("/images/african.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            <Box>
              <Text color="gray.50" fontSize={["2xl", "5xl"]} fontWeight="700" textAlign="center" >Africa</Text>
              <Text color="gray.300" fontSize={["xs", "sm", "lg"]} fontWeight="700" textAlign="center" >O continente mais antigo</Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url("/images/europe.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            <Box>
              <Text color="gray.50" fontSize={["2xl", "5xl"]} fontWeight="700" textAlign="center" >Europa</Text>
              <Text color="gray.300" fontSize={["xs", "sm", "lg"]} fontWeight="700" textAlign="center" >O continente mais antigo</Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url("/images/oceania.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            <Box>
              <Text color="gray.50" fontSize={["2xl", "5xl"]} fontWeight="700" textAlign="center" >Oceania</Text>
              <Text color="gray.300" fontSize={["xs", "sm", "lg"]} fontWeight="700" textAlign="center" >O continente mais antigo</Text>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </>
  )
}
