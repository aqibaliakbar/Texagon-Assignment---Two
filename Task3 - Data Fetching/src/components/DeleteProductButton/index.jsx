import { useDispatch } from "react-redux";

import { Button } from "@chakra-ui/react";
import { deleteProduct } from "../../store/productSlice";

const DeleteProductButton = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };
  return (
    <Button colorScheme="red" onClick={() => handleDelete(id)}>
      Delete
    </Button>
  );
};
export default DeleteProductButton;
