
import { Product } from "../contexts/CartContext";

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww",
    category: "men",
    description: "A comfortable and versatile classic cotton t-shirt, perfect for everyday wear. Made with 100% premium cotton for breathability and durability.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray", "Navy"]
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8fDA%3D",
    category: "men",
    description: "Modern slim fit jeans with a slight stretch for comfort. These versatile jeans offer a contemporary silhouette that works for any occasion.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Blue", "Black", "Gray"]
  },
  {
    id: "3",
    name: "Casual Button-Down Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1598961942613-ba897716405b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fHww",
    category: "men",
    description: "A stylish button-down shirt perfect for casual or semi-formal occasions. Made from high-quality fabric with attention to detail.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Black"]
  },
  {
    id: "4",
    name: "Knit Sweater",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3dlYXRlcnxlbnwwfHwwfHx8MA%3D%3D",
    category: "men",
    description: "A cozy knit sweater that provides warmth without sacrificing style. Perfect for layering during colder months.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Navy", "Burgundy"]
  },
  {
    id: "5",
    name: "Floral Maxi Dress",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJlc3N8ZW58MHx8MHx8fDA%3D",
    category: "women",
    description: "A beautiful floral maxi dress with a flowing silhouette. Perfect for summer days or special occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Print", "Blue Floral", "Pink Floral"]
  },
  {
    id: "6",
    name: "High-Waisted Leggings",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnZ2luZ3N8ZW58MHx8MHx8fDA%3D",
    category: "women",
    description: "Comfortable high-waisted leggings that provide support and style. Perfect for workout or casual wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"]
  },
  {
    id: "7",
    name: "Blouse with Bow Tie",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1499892298425-299e251a518f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "women",
    description: "An elegant blouse featuring a bow tie collar. This versatile piece transitions seamlessly from work to evening occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Pink"]
  },
  {
    id: "8",
    name: "A-Line Midi Skirt",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1575883871435-9906096d6fda?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2tpcnR8ZW58MHx8MHx8fDA%3D",
    category: "women",
    description: "A stylish A-line midi skirt that flatters all body types. The classic silhouette pairs well with both casual and formal tops.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Beige", "Navy"]
  },
  {
    id: "9",
    name: "Dinosaur Print T-Shirt",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1519278409-1f56tdic93ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHxraWRzJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    category: "kids",
    description: "A fun dinosaur print t-shirt that kids will love. Made from soft, durable cotton that can withstand active play.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-10Y"],
    colors: ["Blue", "Green", "Red"]
  },
  {
    id: "10",
    name: "Denim Overalls",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1519973135617-bcecbfd9af43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHxraWRzJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    category: "kids",
    description: "Classic denim overalls for kids, featuring adjustable straps and multiple pockets. Durable and perfect for everyday adventures.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-10Y"],
    colors: ["Blue Denim", "Light Denim"]
  },
  {
    id: "11",
    name: "Hooded Sweatshirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9vZGllJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "kids",
    description: "A comfortable hooded sweatshirt for cooler days. Features a kangaroo pocket and soft inner lining for extra warmth.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-10Y"],
    colors: ["Gray", "Navy", "Purple"]
  },
  {
    id: "12",
    name: "Corduroy Pants",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1565084289306-2b51a678f049?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGtpZHMlMjBmYXNoaW9ufGVufDB8fDB8fHww",
    category: "kids",
    description: "Comfortable corduroy pants with an elastic waistband for easy wear. Durable fabric is perfect for active children.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-10Y"],
    colors: ["Brown", "Green", "Navy"]
  }
];

export const getProducts = (category?: string): Product[] => {
  if (!category) return products;
  return products.filter(product => product.category === category);
};

export const getProduct = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (count: number = 4): Product[] => {
  // Shuffle the array and return the requested number of products
  return [...products].sort(() => 0.5 - Math.random()).slice(0, count);
};
