import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";
import Logo from "../../assets/images/logo.svg";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      title: "Signup Successful",
      description: "Thank you for signing up!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box
      bg="secondary"
      p="2rem"
      borderRadius="1rem"
      border="1px"
      borderColor="#334155"
      h="50%"
      w="50%"
    >
      <Flex justify="center" mb="1rem">
        <Image h="3rem" src={Logo} alt="Texagon Logo" />
      </Flex>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" isRequired mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </FormControl>
        <FormControl id="email" isRequired mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl id="password" isRequired mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </FormControl>
        <Button type="submit" colorScheme="gray">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default SignupForm;
