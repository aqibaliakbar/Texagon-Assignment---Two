import { Box, Flex } from "@chakra-ui/react";
import ProductCard from "./components/ProductCard/index.jsx";
import Laptop from "./assets/images/p1.webp";
import AirPods from "./assets/images/p3.webp";
import Mobile from "./assets/images/p2.webp";
import Logo from "./components/Logo/index.jsx";

function App() {
  return (
    <Box h="96vh" w="100%" p="2rem">
      <Logo />
      <Flex
        justify="center"
        align="center"
        gap="2rem"
        flexWrap="wrap"
        height="100%"
      >
        <ProductCard
          title={"MacBook Pro"}
          desc={"The most advanced chips ever built for a personal computer."}
          price={1599}
          image={Laptop}
        />
        <ProductCard
          title={"AirPods Pro"}
          desc={"A magical connection to your devices. It’s magic, remastered."}
          price={29.99}
          image={AirPods}
        />
        <ProductCard
          title={"iPhone 15 Pro"}
          desc={"A camera that captures your wildest imagination."}
          price={999}
          image={Mobile}
        />
      </Flex>
    </Box>
  );
}

export default App;
