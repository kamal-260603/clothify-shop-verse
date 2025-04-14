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
  // Men's Collection
  {
    id: "1",
    name: "Classic Cotton T-Shirt",
    price: 499,
    description: "A comfortable cotton t-shirt perfect for everyday wear.",
    category: "men",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray", "Blue"]
  },
  {
    id: "2",
    name: "Slim Fit Denim Jeans",
    price: 899,
    description: "Modern slim fit jeans with stretch comfort.",
    category: "men",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black", "Gray"]
  },
  {
    id: "3",
    name: "Formal Business Shirt",
    price: 799,
    description: "Crisp formal shirt for professional occasions.",
    category: "men",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Pink"]
  },
  {
    id: "4",
    name: "Classic Blazer",
    price: 2499,
    description: "Sophisticated blazer for formal events.",
    category: "men",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Gray"]
  },
  {
    id: "5",
    name: "Casual Polo Shirt",
    price: 599,
    description: "Comfortable polo shirt for casual outings.",
    category: "men",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Black", "White"]
  },

  // Women's Collection
  {
    id: "6",
    name: "Floral Summer Dress",
    price: 899,
    description: "Light and breezy floral dress for summer days.",
    category: "women",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blue", "Yellow", "Pink"]
  },
  {
    id: "7",
    name: "Designer Kurti",
    price: 699,
    description: "Elegant ethnic kurti with traditional prints.",
    category: "women",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green", "Yellow"]
  },
  {
    id: "8",
    name: "Casual Denim Jacket",
    price: 1299,
    description: "Stylish denim jacket for a chic look.",
    category: "women",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blue", "Black", "Light Blue"]
  },
  {
    id: "9",
    name: "Palazzo Pants",
    price: 799,
    description: "Comfortable and stylish palazzo pants.",
    category: "women",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Navy", "Beige"]
  },
  {
    id: "10",
    name: "Formal Blazer",
    price: 1999,
    description: "Professional blazer for work and formal occasions.",
    category: "women",
    image: "https://images.unsplash.com/photo-1632149877166-f75d49000351?w=800",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Navy", "Gray"]
  },

  // Kids Collection
  {
    id: "11",
    name: "Cartoon Print T-Shirt",
    price: 299,
    description: "Fun graphic t-shirt with playful designs.",
    category: "kids",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    colors: ["Red", "Blue", "Yellow"]
  },
  {
    id: "12",
    name: "Kids Party Dress",
    price: 799,
    description: "Adorable party dress for special occasions.",
    category: "kids",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800",
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["Pink", "Purple", "Blue"]
  },
  {
    id: "13",
    name: "Denim Dungarees",
    price: 699,
    description: "Comfortable denim dungarees for active kids.",
    category: "kids",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800",
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    colors: ["Blue", "Light Blue"]
  },
  {
    id: "14",
    name: "School Uniform Set",
    price: 899,
    description: "Complete school uniform set with shirt and pants/skirt.",
    category: "kids",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800",
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["White", "Navy"]
  },
  {
    id: "15",
    name: "Sports Track Suit",
    price: 799,
    description: "Comfortable track suit for sports and casual wear.",
    category: "kids",
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800",
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Red", "Blue", "Black"]
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
