import PropTypes from "prop-types";
import {
  Box,
  ButtonGroup,
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
import DeleteProductButton from "../DeleteProductButton";

const ProductCard = ({ product }) => {
  const { id, title, desc, price, image } = product;
  return (
    <Box>
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
          <ButtonGroup spacing="2">
            <AddToCart />
            <DeleteProductButton id={id} />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
