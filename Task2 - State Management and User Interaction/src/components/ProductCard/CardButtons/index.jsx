import { Button, ButtonGroup } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../Redux/productSlice";

const CardButtons = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };
  return (
    <ButtonGroup spacing="2">
      <Button variant="solid" colorScheme="gray">
        Add To Cart
      </Button>
      <Button colorScheme="red" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </ButtonGroup>
  );
};
export default CardButtons;
