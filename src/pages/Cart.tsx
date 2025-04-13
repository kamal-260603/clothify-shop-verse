
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus, Trash2, ShoppingBag, ChevronLeft, AlertCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const CartPage = () => {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart,
    subtotal,
    tax,
    shipping,
    total
  } = useCart();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [isApplying, setIsApplying] = useState(false);

  // Handle coupon code submission
  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      return;
    }
    
    setIsApplying(true);
    setTimeout(() => {
      setIsApplying(false);
      toast({
        title: "Invalid Coupon",
        description: "The coupon code you entered is not valid or has expired.",
        variant: "destructive"
      });
      setCouponCode('');
    }, 1000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
          <h1 className="text-2xl font-bold mb-2">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Button 
            onClick={() => navigate('/products')}
            className="bg-lavender hover:bg-lavender/90 px-8 py-6 button-hover-effect"
          >
            Start Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Your Shopping Cart</h1>
        <Button 
          variant="ghost" 
          className="flex items-center text-sm text-gray-600" 
          onClick={() => navigate(-1)}
        >
          <ChevronLeft size={16} className="mr-1" />
          Continue Shopping
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 bg-gray-50 hidden sm:grid">
              <div className="col-span-6">
                <span className="font-medium text-gray-700">Product</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium text-gray-700">Price</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium text-gray-700">Quantity</span>
              </div>
              <div className="col-span-2 text-right">
                <span className="font-medium text-gray-700">Total</span>
              </div>
            </div>

            {/* Cart Items */}
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="py-4 px-4">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    {/* Product Info */}
                    <div className="col-span-1 sm:col-span-6 flex items-center space-x-4">
                      <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                      </Link>
                      <div>
                        <Link to={`/product/${item.product.id}`} className="font-medium text-gray-800 hover:text-lavender">
                          {item.product.name}
                        </Link>
                        <div className="text-sm text-gray-500 mt-1">
                          {item.size && <span className="mr-2">Size: {item.size}</span>}
                          {item.color && <span>Color: {item.color}</span>}
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                          className="mt-2 text-sm text-red-600 hover:text-red-800 flex items-center sm:hidden"
                        >
                          <Trash2 size={14} className="mr-1" /> Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-1 sm:col-span-2 sm:text-center flex justify-between sm:block">
                      <span className="text-sm font-medium sm:hidden">Price:</span>
                      <span className="text-gray-700">${item.product.price.toFixed(2)}</span>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-1 sm:col-span-2 sm:text-center flex justify-between sm:justify-center items-center">
                      <span className="text-sm font-medium sm:hidden">Quantity:</span>
                      <div className="flex items-center border border-gray-300 rounded">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size, item.color)}
                          className="px-2 py-1 text-gray-600 hover:text-lavender"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 py-1 text-center min-w-[30px]">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size, item.color)}
                          className="px-2 py-1 text-gray-600 hover:text-lavender"
                          disabled={item.quantity >= 10}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="col-span-1 sm:col-span-2 sm:text-right flex justify-between sm:block">
                      <span className="text-sm font-medium sm:hidden">Total:</span>
                      <span className="font-medium text-gray-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    {/* Remove - Desktop Only */}
                    <div className="hidden sm:flex sm:col-span-12 sm:justify-end">
                      <button 
                        onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                        className="text-sm text-red-600 hover:text-red-800 flex items-center"
                      >
                        <Trash2 size={14} className="mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-20">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3 text-sm border-b border-gray-200 pb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
            </div>
            
            <div className="flex justify-between py-4 border-b border-gray-200 mb-6">
              <span className="font-medium">Total</span>
              <span className="font-bold text-lg">${total.toFixed(2)}</span>
            </div>

            {/* Coupon Code */}
            <div className="mb-6">
              <div className="flex space-x-2">
                <Input
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={handleApplyCoupon}
                  variant="outline"
                  disabled={isApplying || !couponCode.trim()}
                >
                  Apply
                </Button>
              </div>
              {shipping === 0 && (
                <div className="flex items-start mt-3 text-xs text-green-600">
                  <AlertCircle size={12} className="mr-1 flex-shrink-0 mt-0.5" />
                  <span>Free shipping applied for orders over $100!</span>
                </div>
              )}
            </div>

            <Button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-lavender hover:bg-lavender/90 button-hover-effect py-6"
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
