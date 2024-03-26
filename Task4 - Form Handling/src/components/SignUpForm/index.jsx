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
  FormErrorMessage,
} from "@chakra-ui/react";
import Logo from "../../assets/images/logo.svg";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [passwordError, setPasswordError] = useState("");
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

    if (formData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
      toast({
        title: "Signup Successful",
        description: "Thank you for signing up!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box
      bg="secondary"
      p="2rem"
      borderRadius="1rem"
      border="1px"
      borderColor="#334155"
      h="500px"
      w="500px"
    >
      <Flex justify="center" mb="1rem">
        <Image h="3rem" src={Logo} alt="Texagon Logo" />
      </Flex>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" isRequired mb={4}>
          <FormLabel htmlFor="name" aria-label="Name" aria-required="true">
            Name
          </FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            aria-describedby="your unique name"
          />
        </FormControl>
        <FormControl id="email" isRequired mb={4}>
          <FormLabel htmlFor="email" aria-label="Email" aria-required="true">
            Email
          </FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            aria-describedby="email"
          />
        </FormControl>
        <FormControl id="password" isRequired mb={4} isInvalid={passwordError}>
          <FormLabel
            htmlFor="password"
            aria-label="Password"
            aria-required="true"
          >
            Password
          </FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            aria-describedby="password-description"
            autoComplete="password"
          />
          {passwordError && (
            <FormErrorMessage>{passwordError}</FormErrorMessage>
          )}
        </FormControl>
        <Button type="submit" colorScheme="gray">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default SignupForm;
