import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../Redux/productSlice";

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteProduct(id));
  };
  return (
    <Button colorScheme="red" onClick={handleDelete}>
      Delete
    </Button>
  );
};
export default DeleteButton;
