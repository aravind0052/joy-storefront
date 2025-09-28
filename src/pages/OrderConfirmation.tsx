import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  Package, 
  Truck, 
  Home, 
  Download,
  Calendar,
  MapPin,
  CreditCard
} from "lucide-react";

const OrderConfirmation = () => {
  // Mock order data
  const orderData = {
    orderId: "ORD-2024-001234",
    orderDate: "28 Sep 2024",
    estimatedDelivery: "1-3 Oct 2024",
    total: 7997,
    items: [
      {
        id: "1",
        name: "Premium Wireless Headphones",
        price: 2999,
        quantity: 2,
        image: "/api/placeholder/100/100",
      },
      {
        id: "2",
        name: "Smart Fitness Watch",
        price: 1999,
        quantity: 1,
        image: "/api/placeholder/100/100",
      },
    ],
    deliveryAddress: {
      name: "John Doe",
      address: "123 Tech Street, Cyber City, Hyderabad, Telangana - 500032",
      phone: "+91 98765 43210",
    },
    paymentMethod: "Cash on Delivery"
  };

  return (
    <div className="min-h-screen bg-background-soft">
      <div className="container mx-auto px-4 py-8">
        {/* Success Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-r from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Order Confirmed! 🎉
          </h1>
          
          <p className="text-xl text-muted mb-2">
            Thank you for your purchase
          </p>
          
          <div className="text-lg">
            Order ID: <span className="font-bold text-primary">{orderData.orderId}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Summary */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orderData.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 bg-background-soft rounded-lg">
                    <div className="w-16 h-16 bg-background rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-primary/20 flex items-center justify-center">
                        <Package className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Paid</span>
                  <span className="text-primary">₹{orderData.total.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Information */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Delivery Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-background-soft rounded-lg">
                  <p className="font-medium">{orderData.deliveryAddress.name}</p>
                  <p className="text-muted">{orderData.deliveryAddress.address}</p>
                  <p className="text-muted">Phone: {orderData.deliveryAddress.phone}</p>
                </div>
                
                <div className="flex items-center gap-2 text-success">
                  <Truck className="w-5 h-5" />
                  <span className="font-medium">Estimated delivery: {orderData.estimatedDelivery}</span>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-background-soft rounded-lg">
                  <p className="font-medium">{orderData.paymentMethod}</p>
                  <p className="text-sm text-muted">Payment will be collected upon delivery</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Cards */}
          <div className="space-y-6">
            {/* Order Status */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Order Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Order Confirmed</p>
                      <p className="text-xs text-muted">{orderData.orderDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-border rounded-full flex items-center justify-center">
                      <Package className="w-5 h-5 text-muted" />
                    </div>
                    <div>
                      <p className="text-muted">Preparing for shipment</p>
                      <p className="text-xs text-muted">1-2 business days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-border rounded-full flex items-center justify-center">
                      <Truck className="w-5 h-5 text-muted" />
                    </div>
                    <div>
                      <p className="text-muted">Out for delivery</p>
                      <p className="text-xs text-muted">Estimated: {orderData.estimatedDelivery}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/profile">
                    <Package className="w-4 h-4 mr-2" />
                    Track Your Order
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Invoice
                </Button>
                
                <Button variant="secondary" size="lg" className="w-full" asChild>
                  <Link to="/products">
                    <Package className="w-4 h-4 mr-2" />
                    Continue Shopping
                  </Link>
                </Button>
                
                <Button variant="ghost" size="lg" className="w-full" asChild>
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Help Section */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-muted">
                  If you have any questions about your order, feel free to contact our customer support.
                </p>
                
                <div className="space-y-2">
                  <p><strong>Email:</strong> support@shopzone.com</p>
                  <p><strong>Phone:</strong> 1800-123-4567</p>
                  <p><strong>Hours:</strong> 9 AM - 9 PM (Mon-Sun)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="shadow-soft border-0 mt-12 bg-gradient-primary">
          <CardContent className="p-8 text-center text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Stay Updated!</h3>
            <p className="mb-6 text-primary-foreground/90">
              Get notified about exclusive deals, new arrivals, and order updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderConfirmation;