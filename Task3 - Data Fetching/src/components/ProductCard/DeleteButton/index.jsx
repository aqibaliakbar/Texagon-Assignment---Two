import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../Redux/productSlice";

const DeleteButton = ({ id }) => {
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
export default DeleteButton;
