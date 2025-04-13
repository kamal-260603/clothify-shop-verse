
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct } from '../services/productService';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent,
  SelectItem,
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Heart, ShoppingBag, Check, ChevronLeft } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);

  // Get the product data
  const product = id ? getProduct(id) : undefined;

  if (!product) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">Sorry, the product you are looking for does not exist.</p>
        <Button onClick={() => navigate('/products')} className="bg-lavender hover:bg-lavender/90">
          Back to Products
        </Button>
      </div>
    );
  }

  // Update quantity
  const handleQuantityChange = (value: string) => {
    const newQuantity = parseInt(value);
    if (!isNaN(newQuantity) && newQuantity > 0 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  // Add product to cart
  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive"
      });
      return;
    }

    if (product.colors && !selectedColor) {
      toast({
        title: "Please select a color",
        variant: "destructive"
      });
      return;
    }

    addToCart(product, quantity, selectedSize, selectedColor);
    
    toast({
      title: `${product.name} added to cart`,
      description: `${quantity} ${quantity === 1 ? 'item' : 'items'} added to your cart`,
      action: (
        <Button variant="outline" onClick={() => navigate('/cart')} className="bg-white">
          View Cart
        </Button>
      ),
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Button 
        variant="ghost" 
        className="mb-6 flex items-center text-sm text-gray-600" 
        onClick={() => navigate(-1)}
      >
        <ChevronLeft size={16} className="mr-1" />
        Back
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <div className="mt-2">
            <span className="text-2xl font-semibold text-gray-900">${product.price.toFixed(2)}</span>
          </div>

          <div className="mt-6">
            <h2 className="text-sm font-medium text-gray-900">Description</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-8">
              <h2 className="text-sm font-medium text-gray-900 mb-3">Size</h2>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <div key={size} className="flex items-center">
                    <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                    <Label
                      htmlFor={`size-${size}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-medium peer-data-[state=checked]:border-lavender peer-data-[state=checked]:text-lavender cursor-pointer"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-6">
              <h2 className="text-sm font-medium text-gray-900 mb-3">Color</h2>
              <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <div key={color} className="flex items-center">
                    <RadioGroupItem value={color} id={`color-${color}`} className="peer sr-only" />
                    <Label
                      htmlFor={`color-${color}`}
                      className="relative flex h-10 px-3 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium peer-data-[state=checked]:border-lavender peer-data-[state=checked]:text-lavender cursor-pointer"
                    >
                      {color}
                      {selectedColor === color && (
                        <Check className="ml-1 h-4 w-4" />
                      )}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Quantity Selection */}
          <div className="mt-6">
            <h2 className="text-sm font-medium text-gray-900 mb-3">Quantity</h2>
            <Select 
              value={quantity.toString()} 
              onValueChange={handleQuantityChange}
            >
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Quantity" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleAddToCart}
              className="flex-1 bg-lavender hover:bg-lavender/90 text-white px-8 py-6 button-hover-effect"
            >
              <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Button variant="outline" className="flex items-center justify-center">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {/* Additional Product Details */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Category:</span>
              <span className="font-medium text-gray-900 capitalize">{product.category}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Product ID:</span>
              <span className="font-medium text-gray-900">{product.id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
