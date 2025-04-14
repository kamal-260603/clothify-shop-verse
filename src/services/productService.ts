
// Define the Product interface
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  sizes: string[];
  colors: string[];
}

// Mock data for products
export const products: Product[] = [
  {
    id: "1",
    name: "Classic T-Shirt",
    price: 24.99,
    description: "A comfortable cotton t-shirt perfect for everyday wear.",
    category: "men",
    image: "/placeholder.svg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray", "Blue"]
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 59.99,
    description: "Modern slim fit jeans with stretch comfort.",
    category: "men",
    image: "/placeholder.svg",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black", "Gray"]
  },
  {
    id: "3",
    name: "Floral Summer Dress",
    price: 49.99,
    description: "Light and breezy floral dress for summer days.",
    category: "women",
    image: "/placeholder.svg",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blue", "Yellow", "Pink"]
  },
  {
    id: "4",
    name: "Kids Graphic Tee",
    price: 19.99,
    description: "Fun graphic t-shirt for kids with playful designs.",
    category: "kids",
    image: "/placeholder.svg",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    colors: ["Red", "Blue", "Green"]
  },
  {
    id: "5",
    name: "Women's Cardigan",
    price: 39.99,
    description: "Soft knit cardigan perfect for layering.",
    category: "women",
    image: "/placeholder.svg",
    sizes: ["S", "M", "L"],
    colors: ["Cream", "Navy", "Burgundy"]
  },
  {
    id: "6",
    name: "Men's Blazer",
    price: 99.99,
    description: "Classic blazer for a sharp look.",
    category: "men",
    image: "/placeholder.svg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Gray"]
  }
];

// Function to get all products
export const getProducts = () => {
  return products;
};

// Function to get products by category
export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

// Function to get a product by ID
export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
