import { Box, Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"

const ProductCard = ( {product} ) => {
	const {title, desc, price, image, addBtn} = product
	return (
    <Box>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>
              {desc}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
         
            <Button variant="solid" colorScheme="blue">
              {addBtn}
            </Button>
         
        </CardFooter>
      </Card>
    </Box>
  );
}
export default ProductCard