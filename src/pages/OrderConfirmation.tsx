
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Package } from 'lucide-react';

const OrderConfirmationPage = () => {
  const navigate = useNavigate();
  const orderNumber = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit order number

  // Redirect if the user refreshes this page (since we don't have real order data persisted)
  useEffect(() => {
    const fromCheckout = sessionStorage.getItem('fromCheckout');
    
    if (!fromCheckout) {
      sessionStorage.setItem('fromCheckout', 'true');
    }

    return () => {
      sessionStorage.removeItem('fromCheckout');
    };
  }, [navigate]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="rounded-full h-24 w-24 bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your purchase. Your order has been confirmed and will be shipped shortly.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <p className="text-gray-500 font-medium">Order Number</p>
              <p className="text-xl font-bold">#ORD-{orderNumber}</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 font-medium">Order Date</p>
              <p className="font-medium">{new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 font-medium">Estimated Delivery</p>
              <p className="font-medium">
                {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()} - 
                {new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8 flex items-start">
          <Package className="text-blue-600 mr-4 flex-shrink-0 mt-1" />
          <div className="text-left">
            <h3 className="font-semibold text-blue-800 mb-1">What's Next?</h3>
            <p className="text-blue-700">
              You'll receive an email confirmation shortly at your registered email address. 
              We'll also send you shipping updates when your order is on its way.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Button 
            onClick={() => navigate('/products')} 
            className="bg-lavender hover:bg-lavender/90 button-hover-effect"
          >
            Continue Shopping
          </Button>
          <Button asChild variant="outline">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
