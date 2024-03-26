import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import ProductCard from "./components/ProductCard/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/productSlice.jsx";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.product);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchProducts());
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Box maxW="container.xl" mx="auto" mt="8rem">
        <Flex justify="center" align="center" gap="2rem" flexWrap="wrap">
          {status === "loading" && (
            <Spinner
              alignSelf="center"
              justifySelf="center"
              h="20%"
              w="20%"
              mt="10rem"
            />
          )}
          {status === "failed" && <Text>Error: {error}</Text>}
          {status === "succeeded" &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Flex>
      </Box>
    </>
  );
}

export default App;
