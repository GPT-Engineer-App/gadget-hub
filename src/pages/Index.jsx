import { Box, Container, VStack, Text, Image, Flex, Heading, Link, SimpleGrid, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" py={4}>
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">ElectroShop</Heading>
          <Flex as="ul" listStyleType="none" m={0} p={0} gap={6}>
            <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Home</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Products</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>About Us</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Contact Us</Link>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20}>
        <Container maxW="container.xl" textAlign="center">
          <Heading as="h2" size="2xl" mb={4}>Welcome to ElectroShop</Heading>
          <Text fontSize="xl" mb={6}>Your one-stop shop for all the latest electronics</Text>
          <Button colorScheme="blue" size="lg">Shop Now</Button>
        </Container>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" mb={10} textAlign="center">Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 1" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 1</Heading>
                <Text mb={4}>Description of product 1</Text>
                <Button colorScheme="blue">Buy Now</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 2" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 2</Heading>
                <Text mb={4}>Description of product 2</Text>
                <Button colorScheme="blue">Buy Now</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 3" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 3</Heading>
                <Text mb={4}>Description of product 3</Text>
                <Button colorScheme="blue">Buy Now</Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl" textAlign="center">
          <Flex justifyContent="center" mb={4}>
            <Link href="#" mx={2}><FaFacebook size="24px" /></Link>
            <Link href="#" mx={2}><FaTwitter size="24px" /></Link>
            <Link href="#" mx={2}><FaInstagram size="24px" /></Link>
          </Flex>
          <Text mb={2}>© 2023 ElectroShop. All rights reserved.</Text>
          <Flex justifyContent="center" gap={4}>
            <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Privacy Policy</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Terms of Service</Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;