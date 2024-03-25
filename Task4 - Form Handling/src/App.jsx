import { Box, Flex } from "@chakra-ui/react";
import SignupForm from "./components/SignUpForm";

function App() {
  return (
    <Box h="100vh" w="100%" p="2rem">
      <Flex
        justify="center"
        align="center"
        gap="2rem"
        flexWrap="wrap"
        height="100%"
      >
        <SignupForm />
      </Flex>
    </Box>
  );
}

export default App;
