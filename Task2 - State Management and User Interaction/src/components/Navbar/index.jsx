import { Box, Flex, Image, Link } from "@chakra-ui/react";
import Logo from "../../assets/images/logo.svg";
import ResetButton from "../ResetButton/Index";

const Navbar = () => {
  return (
    <Box bg="secondary" px={5} py={4} w="100vw">
      <Flex justify="space-between">
        <Link>
          <Image src={Logo} alt="Texagon Logo" />
        </Link>
        <ResetButton />
      </Flex>
    </Box>
  );
};
export default Navbar;
