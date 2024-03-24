import { Box, Flex } from "@chakra-ui/react";
import ProductCard from "./components/ProductCard/index.jsx";
import products from "./data/index.js";
import Navbar from "./components/Navbar/index.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Box maxW="container.xl" mx="auto" mt="8rem">
        <Flex justify="center" align="center" gap="2rem" flexWrap="wrap">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default App;
