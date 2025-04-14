
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
    price: 899,
    description: "A comfortable cotton t-shirt perfect for everyday wear.",
    category: "men",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray", "Blue"]
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 1499,
    description: "Modern slim fit jeans with stretch comfort.",
    category: "men",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black", "Gray"]
  },
  {
    id: "3",
    name: "Floral Summer Dress",
    price: 1299,
    description: "Light and breezy floral dress for summer days.",
    category: "women",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blue", "Yellow", "Pink"]
  },
  {
    id: "4",
    name: "Kids Graphic Tee",
    price: 499,
    description: "Fun graphic t-shirt for kids with playful designs.",
    category: "kids",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    colors: ["Red", "Blue", "Green"]
  },
  {
    id: "5",
    name: "Women's Cardigan",
    price: 999,
    description: "Soft knit cardigan perfect for layering.",
    category: "women",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
    sizes: ["S", "M", "L"],
    colors: ["Cream", "Navy", "Burgundy"]
  },
  {
    id: "6",
    name: "Men's Blazer",
    price: 2499,
    description: "Classic blazer for a sharp look.",
    category: "men",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Gray"]
  },
  {
    id: "7",
    name: "Ethnic Kurti",
    price: 799,
    description: "Beautiful ethnic kurti with traditional prints.",
    category: "women",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green", "Yellow"]
  },
  {
    id: "8",
    name: "Sports Shoes",
    price: 1999,
    description: "Comfortable sports shoes for active lifestyle.",
    category: "men",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black", "White", "Blue", "Red"]
  },
  {
    id: "9",
    name: "Kids Party Dress",
    price: 899,
    description: "Adorable party dress for special occasions.",
    category: "kids",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800",
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["Pink", "Purple", "Blue"]
  },
  {
    id: "10",
    name: "Women's Handbag",
    price: 1299,
    description: "Stylish handbag for everyday use.",
    category: "women",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
    sizes: ["One Size"],
    colors: ["Brown", "Black", "Tan"]
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

// Function to get featured products - limiting to the number specified or returning all if no limit is provided
export const getFeaturedProducts = (limit?: number) => {
  // For now, we'll just return products up to the limit
  // In a real app, you might have a "featured" flag or use other criteria
  if (limit && limit > 0) {
    return products.slice(0, limit);
  }
  return products;
};
