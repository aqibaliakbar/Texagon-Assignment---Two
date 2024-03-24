import { Box, Flex } from "@chakra-ui/react";
import ProductCard from "./components/ProductCard/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import { useSelector } from "react-redux";

function App() {
  const products = useSelector((state) => state.product.products);

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
