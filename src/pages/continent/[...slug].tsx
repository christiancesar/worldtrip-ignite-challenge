/**
 * - Montar uma seção de post no prismic incluindo as informações
 *  * Banner
 *  * Title
 *  * Descript
 *  * Countries
 *  * Linguages
 *  * Cities
 *  A lista de cidades eu busco em
 */

import { Box, Flex, Icon, Image, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiInformationLine } from 'react-icons/ri';
export default function Continent() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });
  
  return (
    <>
      <Flex
        w="100%"
        maxWidth={1440}
        mx="auto"
        direction="column"
      >
        <Flex
          backgroundImage={`url("/images/europe.jpg")`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgrou
          h="300"
          alignItems="flex-end"
        >
          <Box>
            <Text ml="10" mb="10" alignItems="flex-end" color="gray.50" fontSize="48" fontWeight="700" >Europa</Text>
          </Box>
        </Flex >

        <Flex
          width="100%"
          maxWidth="1120px"
          mx="auto"
          p={["6", "8"]}
          direction="column"
        >
          <Flex
            direction="column"
            justify="space-between"
          >
            <Box
              flex="1"
            >
              <Text
                fontSize={["sm", "lg", "3xl"]}
                color="gray.600"
                textAlign="justify"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ex voluptatibus explicabo cum error debitis est et ducimus atque rerum at asperiores suscipit commodi molestiae. Eligendi aliquid tempora error repellat!
              </Text>
            </Box>

            <Flex
              flex="1"
              justify="space-between"
              align="center"
            >
              <Box
                mx="auto"
                align="center"
              >
                <Text
                  fontSize={["3xl", "5xl"]}
                  fontWeight="600"
                  color="yellow.300"
                >
                  50</Text>
                <Text
                  fontSize={["xs", "sm", "lg"]}
                  fontWeight="semibold"
                  color="gray.600"
                >
                  países
                </Text>
              </Box>
              <Box
                mx="auto"
                align="center"
              >
                <Text
                  fontSize={["3xl", "5xl"]}
                  fontWeight="600"
                  color="yellow.300"
                >
                  60
                </Text>
                <Text
                  fontSize={["xs", "sm", "lg"]}
                  fontWeight="semibold"
                  color="gray.600"
                >
                  línguas
                </Text>
              </Box>
              <Box
                mx="auto"
                align="center"
              >
                <Text
                  fontSize={["3xl", "5xl"]}
                  fontWeight="600"
                  color="yellow.300"
                >
                  27
                </Text>
                <Flex
                  align="center"
                >
                  <Text
                    fontSize={["xs", "sm", "lg"]}
                    fontWeight="semibold"
                    color="gray.600"
                  >
                    cidades +100</Text>
                  <Icon as={RiInformationLine} fontSize="12" />
                </Flex>
              </Box>
            </Flex>
          </Flex>
          <Text
            fontSize={["3xl", "5xl"]}
            fontWeight="500"
            color="gray.600"
            my={["6", "8"]}
          >
            Cidades +100
          </Text>

          <SimpleGrid
            minChildWidth="256px"
            columns={4}
            spacing={5}
          >
            <Box
              border="1px"
              borderColor="yellow.100"
              borderRadius={4}
            >
              <Box>
                <Image borderTopRadius="4" src="/images/europe.jpg" alt="pais" />
              </Box>
              <Flex
                p={["4", "6"]}
              >
                <Box
                  flex="1"
                >
                  <Text
                    fontSize="20"
                    fontWeight="bold"
                    color="gray.600"
                  >
                    Londres
                  </Text>
                  <Text>
                    Reino Unido</Text>
                </Box>
                <Flex
                  align="center"
                  mx="auto"
                >
                  <Image
                    src="http://sites1.christophlutz.co.uk/gbmag/wp-content/uploads/2017/01/UK-flag-union-jack-1024x683.jpg"
                    alt="Flag"
                    w={30}
                    h={30}
                    borderRadius="50%"
                  />
                </Flex>
              </Flex>
            </Box>
            <Box
              border="1px"
              borderColor="yellow.100"
              borderRadius={4}
            >
              <Box>
                <Image borderTopRadius="4" src="/images/europe.jpg" alt="pais" />
              </Box>
              <Flex
                p={["4", "6"]}
              >
                <Box
                  flex="1"
                >
                  <Text
                    fontSize="20"
                    fontWeight="bold"
                    color="gray.600"
                  >
                    Londres
                  </Text>
                  <Text>
                    Reino Unido</Text>
                </Box>
                <Flex
                  align="center"
                  mx="auto"
                >
                  <Image
                    src="http://sites1.christophlutz.co.uk/gbmag/wp-content/uploads/2017/01/UK-flag-union-jack-1024x683.jpg"
                    alt="Flag"
                    w={30}
                    h={30}
                    borderRadius="50%"
                  />
                </Flex>
              </Flex>
            </Box>
            <Box
              border="1px"
              borderColor="yellow.100"
              borderRadius={4}
            >
              <Box>
                <Image borderTopRadius="4" src="/images/europe.jpg" alt="pais" />
              </Box>
              <Flex
                p={["4", "6"]}
              >
                <Box
                  flex="1"
                >
                  <Text
                    fontSize="20"
                    fontWeight="bold"
                    color="gray.600"
                  >
                    Londres
                  </Text>
                  <Text>
                    Reino Unido</Text>
                </Box>
                <Flex
                  align="center"
                  mx="auto"
                >
                  <Image
                    src="http://sites1.christophlutz.co.uk/gbmag/wp-content/uploads/2017/01/UK-flag-union-jack-1024x683.jpg"
                    alt="Flag"
                    w={30}
                    h={30}
                    borderRadius="50%"
                  />
                </Flex>
              </Flex>
            </Box>
            <Box
              border="1px"
              borderColor="yellow.100"
              borderRadius={4}
            >
              <Box>
                <Image borderTopRadius="4" src="/images/europe.jpg" alt="pais" />
              </Box>
              <Flex
                p={["4", "6"]}
              >
                <Box
                  flex="1"
                >
                  <Text
                    fontSize="20"
                    fontWeight="bold"
                    color="gray.600"
                  >
                    Londres
                  </Text>
                  <Text>
                    Reino Unido</Text>
                </Box>
                <Flex
                  align="center"
                  mx="auto"
                >
                  <Image
                    src="http://sites1.christophlutz.co.uk/gbmag/wp-content/uploads/2017/01/UK-flag-union-jack-1024x683.jpg"
                    alt="Flag"
                    w={30}
                    h={30}
                    borderRadius="50%"
                  />
                </Flex>
              </Flex>
            </Box>

          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  )
}