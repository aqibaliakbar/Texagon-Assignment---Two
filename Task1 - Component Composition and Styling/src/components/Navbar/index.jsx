import { Box, Image, Link } from "@chakra-ui/react";
import Logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <Box bg="secondary" px={5} py={4} w="100vw">
      <Link>
        <Image src={Logo} alt="Texagon Logo" />
      </Link>
    </Box>
  );
};
export default Navbar;
