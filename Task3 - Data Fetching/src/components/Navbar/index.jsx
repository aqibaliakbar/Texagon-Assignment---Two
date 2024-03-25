import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import Logo from "../../assets/images/logo.svg";

const Navbar = ({ handleResetProducts }) => {
  return (
    <Box bg="secondary" px={5} py={4} w="100vw">
      <Flex justify="space-between">
        <Link>
          <Image src={Logo} alt="Texagon Logo" />
        </Link>
        <Button colorScheme="red" onClick={handleResetProducts}>
          Reset Products
        </Button>
      </Flex>
    </Box>
  );
};
export default Navbar;
