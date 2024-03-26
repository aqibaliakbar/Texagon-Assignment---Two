import {  Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { resetProducts } from "../../store/productSlice";

const ResetButton = () => {
	const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetProducts());
  };
  return (
    <Button colorScheme="red" onClick={handleReset}>
      Reset Products
    </Button>
  );
};
export default ResetButton;
