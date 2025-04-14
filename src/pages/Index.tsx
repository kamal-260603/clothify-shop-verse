
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getProducts } from '../services/productService';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  const allProducts = getProducts();
  const featuredMens = allProducts.filter(p => p.category === 'men').slice(0, 2);
  const featuredWomens = allProducts.filter(p => p.category === 'women').slice(0, 2);
  const featuredKids = allProducts.filter(p => p.category === 'kids').slice(0, 2);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 space-y-6 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Elevate Your Style with Premium Fashion
            </h1>
            <p className="text-lg md:text-xl opacity-80 max-w-md">
              Discover the latest trends in men's, women's, and kids' clothing at exceptional prices.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-lavender hover:bg-lavender/90 text-white px-8 py-6 button-hover-effect">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 button-hover-effect">
                <Link to="/products">New Arrivals</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" 
              alt="Fashion model" 
              className="rounded-lg shadow-2xl w-full max-w-lg h-auto object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Men's Category */}
            <div className="relative rounded-lg overflow-hidden group h-96 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww" 
                alt="Men's Collection" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Men's Collection</h3>
                <Link to="/products/men" className="text-white flex items-center text-lg">
                  Shop Now <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Women's Category */}
            <div className="relative rounded-lg overflow-hidden group h-96 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW5zJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Women's Collection" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Women's Collection</h3>
                <Link to="/products/women" className="text-white flex items-center text-lg">
                  Shop Now <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Kids' Category */}
            <div className="relative rounded-lg overflow-hidden group h-96 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpZHMlMjBmYXNoaW9ufGVufDB8fDB8fHww" 
                alt="Kids' Collection" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Kids' Collection</h3>
                <Link to="/products/kids" className="text-white flex items-center text-lg">
                  Shop Now <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Button asChild variant="ghost" className="flex items-center text-navy hover:text-lavender">
              <Link to="/products">
                View All <ArrowRight size={18} className="ml-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Featured Products from Men's Collection */}
            {featuredMens.map(product => (
              <Link 
                to={`/product/${product.id}`} 
                key={product.id} 
                className="group product-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 group-hover:text-lavender transition-colors">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-700 font-medium">₹{product.price.toFixed(2)}</p>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{product.category}</span>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Featured Products from Women's Collection */}
            {featuredWomens.map(product => (
              <Link 
                to={`/product/${product.id}`} 
                key={product.id} 
                className="group product-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 group-hover:text-lavender transition-colors">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-700 font-medium">₹{product.price.toFixed(2)}</p>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{product.category}</span>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Featured Products from Kids' Collection */}
            {featuredKids.map(product => (
              <Link 
                to={`/product/${product.id}`} 
                key={product.id} 
                className="group product-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 group-hover:text-lavender transition-colors">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-700 font-medium">₹{product.price.toFixed(2)}</p>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{product.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-lavender/10 py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-1/2 md:pr-8">
              <h2 className="text-3xl font-bold mb-4 text-navy">Summer Sale!</h2>
              <p className="text-lg text-gray-700 mb-6">Enjoy up to 50% off on selected items. Limited time offer.</p>
              <Button asChild className="bg-lavender hover:bg-lavender/90 text-white px-8 py-6 button-hover-effect">
                <Link to="/products">Shop Sale</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" 
                alt="Summer Sale" 
                className="rounded-lg shadow-md w-full max-w-md mx-auto" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
