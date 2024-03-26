import {  Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { fetchProducts, resetProducts } from "../../store/productSlice";

const ResetButton = () => {
	const dispatch = useDispatch();

 const handleResetProducts = () => {
   dispatch(resetProducts());
   dispatch(fetchProducts());
 };
  return (
    <Button colorScheme="red" onClick={handleResetProducts}>
      Reset Products
    </Button>
  );
};
export default ResetButton;
