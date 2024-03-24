import ProductCard from "./components/ProductCard/index.jsx";

const products = [
  {
    id: 1,
    title: "Product 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 19.99,
    image: "https://via.placeholder.com/150",
    addBtn: "Add to Cart",
  },
  {
    id: 2,
    title: "Product 2",
    des: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 29.99,
    image: "https://via.placeholder.com/150",
    addBtn: "Add to Cart",
  },
  {
    id: 3,
    name: "Product 3",
    des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 39.99,
    image: "https://via.placeholder.com/150",
    addBtn: "Add to Cart",
  },
];

function App() {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default App;
