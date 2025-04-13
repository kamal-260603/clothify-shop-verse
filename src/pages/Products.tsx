
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getProducts, Product as ProductType } from '../services/productService';
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FilterX, SlidersHorizontal } from 'lucide-react';

// Available product sizes
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

// Available colors
const colors = ["White", "Black", "Gray", "Blue", "Red", "Green"];

const ProductsPage = () => {
  const { category } = useParams<{ category?: string }>();
  
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Fetch products on component mount or when category changes
  useEffect(() => {
    const fetchedProducts = getProducts(category);
    setProducts(fetchedProducts);
    setFilteredProducts(fetchedProducts);
    
    // Reset filters when category changes
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange([0, 100]);
  }, [category]);

  // Apply filters
  useEffect(() => {
    let result = [...products];
    
    // Filter by price
    result = result.filter(product => 
      product.price >= priceRange[0] && 
      product.price <= priceRange[1]
    );
    
    // Filter by sizes if any are selected
    if (selectedSizes.length > 0) {
      result = result.filter(product => 
        product.sizes?.some(size => selectedSizes.includes(size))
      );
    }
    
    // Filter by colors if any are selected
    if (selectedColors.length > 0) {
      result = result.filter(product => 
        product.colors?.some(color => selectedColors.includes(color))
      );
    }
    
    setFilteredProducts(result);
  }, [products, priceRange, selectedSizes, selectedColors]);
  
  // Toggle size selection
  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };
  
  // Toggle color selection
  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };
  
  // Reset all filters
  const resetFilters = () => {
    setPriceRange([0, 100]);
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  // Toggle mobile filter sidebar
  const toggleFilterSidebar = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Format the category title
  const getCategoryTitle = () => {
    if (!category) return "All Products";
    return `${category.charAt(0).toUpperCase() + category.slice(1)}'s Collection`;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy">{getCategoryTitle()}</h1>
        <p className="text-gray-600 mt-2">
          {filteredProducts.length} products found
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4 flex justify-between items-center">
          <Button onClick={toggleFilterSidebar} variant="outline" className="flex items-center">
            <SlidersHorizontal className="mr-2" size={16} />
            Filter Products
          </Button>
          <Button onClick={resetFilters} variant="ghost" className="text-sm text-gray-600 flex items-center">
            <FilterX size={16} className="mr-1" />
            Reset
          </Button>
        </div>
        
        {/* Filters Sidebar - Desktop always visible, mobile conditional */}
        <div className={`
          md:block md:w-64 flex-shrink-0 bg-white p-4 rounded-lg border border-gray-200
          ${isFilterOpen ? 'block' : 'hidden'}
          fixed md:static top-0 left-0 h-full md:h-auto z-40 w-3/4 overflow-y-auto
          md:translate-x-0 transition-transform duration-300 ease-in-out
        `}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Filters</h2>
            <Button onClick={resetFilters} variant="ghost" className="text-sm text-gray-600">
              Reset
            </Button>
          </div>
          
          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="text-md font-medium mb-3">Price Range</h3>
            <Slider
              defaultValue={[0, 100]}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              min={0}
              max={100}
              step={5}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          
          {/* Size Filter */}
          <div className="mb-6">
            <h3 className="text-md font-medium mb-3">Size</h3>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map(size => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`size-${size}`} 
                    checked={selectedSizes.includes(size)}
                    onCheckedChange={() => toggleSize(size)}
                  />
                  <Label htmlFor={`size-${size}`} className="text-sm cursor-pointer">
                    {size}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Color Filter */}
          <div>
            <h3 className="text-md font-medium mb-3">Color</h3>
            <div className="grid grid-cols-2 gap-2">
              {colors.map(color => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`color-${color}`} 
                    checked={selectedColors.includes(color)}
                    onCheckedChange={() => toggleColor(color)}
                  />
                  <Label htmlFor={`color-${color}`} className="text-sm cursor-pointer">
                    {color}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile close button */}
          <div className="md:hidden mt-8">
            <Button onClick={toggleFilterSidebar} className="w-full bg-lavender hover:bg-lavender/90">
              Apply Filters
            </Button>
          </div>
        </div>
        
        {/* Overlay for mobile */}
        {isFilterOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={toggleFilterSidebar}
          ></div>
        )}
        
        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg">
              <p className="text-xl text-gray-600">No products match your filters.</p>
              <Button onClick={resetFilters} variant="link" className="mt-2 text-lavender">
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
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
                      <p className="text-gray-700 font-medium">${product.price.toFixed(2)}</p>
                      {product.sizes && (
                        <div className="text-sm text-gray-500">
                          {product.sizes.slice(0, 3).join(', ')}
                          {product.sizes.length > 3 && '...'}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
