import { Image, Flex } from "@chakra-ui/react";
import Logo1 from "../../assets/images/logo.svg"

const Logo = () => {
  return (
    <Flex justify="center" mb="1rem">
      <Image h="3rem" src={Logo1} alt="Texagon Logo" />
    </Flex>
  );
};
export default Logo;
