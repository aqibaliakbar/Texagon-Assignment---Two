import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import AddToCart from "../AddToCart";

const ProductCard = ({ title, desc, price, image }) => {
  return (
    <Card maxW="sm" h="500px" w="600px" bg="secondary">
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
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
