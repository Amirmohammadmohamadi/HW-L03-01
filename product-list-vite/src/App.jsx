import ProductCard from "./components/ProductCard";

const laptops = [
  {
    id: 1,
    name: "MacBook Pro 14-inch (M3 Chip)",
    price: 1999.99,
    description:
      "A powerhouse laptop featuring the M3 chip, 16GB Unified Memory, and a stunning Liquid Retina XDR display for professionals.",
  },
  {
    id: 2,
    name: "Dell XPS 15",
    price: 1549.0,
    description:
      "High-performance laptop with an InfinityEdge display, Intel Core i7 processor, and sleek aluminum chassis design.",
  },
  {
    id: 3,
    name: "ASUS ROG Zephyrus G14",
    price: 1399.5,
    description:
      "A compact yet powerful gaming laptop equipped with NVIDIA RTX graphics and a high refresh rate screen.",
  },
  {
    id: 4,
    name: "HP Spectre x360",
    price: 1250.0,
    description:
      "A versatile 2-in-1 convertible laptop with a touchscreen, premium build quality, and excellent battery life.",
  },
  {
    id: 5,
    name: "Lenovo ThinkPad X1 Carbon",
    price: 1750.0,
    description:
      "The ultimate business laptop known for its legendary keyboard, lightweight carbon fiber construction, and durability.",
  },
];

function App() {
  return (
    <>
      <ProductCard list={laptops} />
    </>
  );
}

export default App;
