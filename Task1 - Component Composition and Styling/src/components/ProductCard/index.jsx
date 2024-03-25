import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import AddToCart from "./AddToCart";

const ProductCard = ({ product }) => {
  const { title, desc, price, image } = product;
  return (
    <Box>
      <Card maxW="sm" mb="4" bg="secondary">
        <CardBody>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading color="heading" size="md">
              {title}
            </Heading>
            <Text color="text">{desc}</Text>
            <Text color="price" fontSize="2xl">
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <AddToCart />
        </CardFooter>
      </Card>
    </Box>
  );
};

export default ProductCard;
