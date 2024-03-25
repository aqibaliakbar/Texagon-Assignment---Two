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

import DeleteButton from "./CardButtons";
import CardButtons from "./CardButtons";

const ProductCard = ({ product }) => {
  const { id, title, desc, price, image } = product;
  return (
    <Box>
      <Card maxW="sm" mb="4" h="500px" w="600px" bg="secondary">
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
          <CardButtons id={id} />
        </CardFooter>
      </Card>
    </Box>
  );
};

export default ProductCard;
