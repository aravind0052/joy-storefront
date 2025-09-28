import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ArrowLeft, 
  MapPin, 
  CreditCard, 
  Truck, 
  Shield,
  Check
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import featuredProductsImage from "@/assets/featured-products.jpg";

const Checkout = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [deliveryAddress, setDeliveryAddress] = useState({
    fullName: "",
    phone: "",
    pincode: "",
    state: "",
    city: "",
    building: "",
    area: "",
    landmark: "",
  });

  // Mock order items
  const orderItems = [
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 2999,
      quantity: 2,
      image: featuredProductsImage,
    },
    {
      id: "2",
      name: "Smart Fitness Watch",
      price: 1999,
      quantity: 1,
      image: featuredProductsImage,
    },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    toast({
      title: "Order Placed Successfully!",
      description: "Your order has been confirmed. You will receive a confirmation email shortly.",
    });
    
    // Redirect to order confirmation page
    setTimeout(() => {
      window.location.href = '/order-confirmation';
    }, 2000);
  };

  const steps = [
    { number: 1, title: "Delivery Address", icon: MapPin },
    { number: 2, title: "Payment Method", icon: CreditCard },
    { number: 3, title: "Review Order", icon: Check },
  ];

  return (
    <div className="min-h-screen bg-background-soft">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" asChild>
            <Link to="/cart">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cart
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gradient">
              Checkout
            </h1>
            <p className="text-muted">Complete your purchase</p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                  currentStep >= step.number 
                    ? 'bg-primary border-primary text-primary-foreground' 
                    : 'border-border text-muted'
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 md:w-24 h-0.5 mx-2 transition-colors ${
                    currentStep > step.number ? 'bg-primary' : 'bg-border'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between max-w-2xl mt-2">
            {steps.map((step) => (
              <span key={step.number} className={`text-sm ${
                currentStep >= step.number ? 'text-foreground font-medium' : 'text-muted'
              }`}>
                {step.title}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Delivery Address */}
            {currentStep === 1 && (
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Delivery Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input 
                        id="fullName"
                        placeholder="Enter full name"
                        value={deliveryAddress.fullName}
                        onChange={(e) => setDeliveryAddress(prev => ({ ...prev, fullName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone"
                        placeholder="Enter phone number"
                        value={deliveryAddress.phone}
                        onChange={(e) => setDeliveryAddress(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input 
                        id="pincode"
                        placeholder="Enter pincode"
                        value={deliveryAddress.pincode}
                        onChange={(e) => setDeliveryAddress(prev => ({ ...prev, pincode: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input 
                        id="state"
                        placeholder="Enter state"
                        value={deliveryAddress.state}
                        onChange={(e) => setDeliveryAddress(prev => ({ ...prev, state: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city"
                        placeholder="Enter city"
                        value={deliveryAddress.city}
                        onChange={(e) => setDeliveryAddress(prev => ({ ...prev, city: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="building">House/Building/Apartment</Label>
                    <Input 
                      id="building"
                      placeholder="Enter building details"
                      value={deliveryAddress.building}
                      onChange={(e) => setDeliveryAddress(prev => ({ ...prev, building: e.target.value }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="area">Road name, Area, Colony</Label>
                    <Input 
                      id="area"
                      placeholder="Enter area details"
                      value={deliveryAddress.area}
                      onChange={(e) => setDeliveryAddress(prev => ({ ...prev, area: e.target.value }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="landmark">Landmark (Optional)</Label>
                    <Input 
                      id="landmark"
                      placeholder="Enter nearby landmark"
                      value={deliveryAddress.landmark}
                      onChange={(e) => setDeliveryAddress(prev => ({ ...prev, landmark: e.target.value }))}
                    />
                  </div>

                  <Button 
                    variant="hero" 
                    size="lg" 
                    onClick={() => setCurrentStep(2)}
                    disabled={!deliveryAddress.fullName || !deliveryAddress.phone || !deliveryAddress.pincode}
                  >
                    Continue to Payment
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Payment Method */}
            {currentStep === 2 && (
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    {/* Cash on Delivery */}
                    <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Cash on Delivery</p>
                            <p className="text-sm text-muted">Pay when you receive your order</p>
                          </div>
                          <div className="text-2xl">💵</div>
                        </div>
                      </Label>
                    </div>

                    {/* UPI Payment */}
                    <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">UPI Payment</p>
                            <p className="text-sm text-muted">Pay instantly using UPI apps</p>
                          </div>
                          <div className="text-2xl">📱</div>
                        </div>
                      </Label>
                    </div>

                    {/* Credit/Debit Card */}
                    <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Credit/Debit Card</p>
                            <p className="text-sm text-muted">Visa, Mastercard, Rupay accepted</p>
                          </div>
                          <div className="text-2xl">💳</div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {/* Card Details Form (shown when card is selected) */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4 p-4 bg-background-soft rounded-lg">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input id="expiryDate" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" placeholder="Enter name as on card" />
                      </div>
                    </div>
                  )}

                  {/* UPI Details Form (shown when UPI is selected) */}
                  {paymentMethod === 'upi' && (
                    <div className="space-y-4 p-4 bg-background-soft rounded-lg">
                      <div>
                        <Label htmlFor="upiId">UPI ID</Label>
                        <Input id="upiId" placeholder="yourname@upi" />
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setCurrentStep(1)}>
                      Back to Address
                    </Button>
                    <Button variant="hero" size="lg" onClick={() => setCurrentStep(3)}>
                      Review Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Review Order */}
            {currentStep === 3 && (
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    Review Your Order
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Delivery Address Summary */}
                  <div>
                    <h4 className="font-medium mb-2">Delivery Address</h4>
                    <div className="p-4 bg-background-soft rounded-lg">
                      <p className="font-medium">{deliveryAddress.fullName}</p>
                      <p>{deliveryAddress.building}, {deliveryAddress.area}</p>
                      <p>{deliveryAddress.city}, {deliveryAddress.state} - {deliveryAddress.pincode}</p>
                      <p>Phone: {deliveryAddress.phone}</p>
                    </div>
                  </div>

                  {/* Payment Method Summary */}
                  <div>
                    <h4 className="font-medium mb-2">Payment Method</h4>
                    <div className="p-4 bg-background-soft rounded-lg">
                      <p className="capitalize">
                        {paymentMethod === 'cod' && 'Cash on Delivery'}
                        {paymentMethod === 'upi' && 'UPI Payment'}
                        {paymentMethod === 'card' && 'Credit/Debit Card'}
                      </p>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div>
                    <h4 className="font-medium mb-2">Order Items</h4>
                    <div className="space-y-3">
                      {orderItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-4 bg-background-soft rounded-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted">Quantity: {item.quantity}</p>
                          </div>
                          <p className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms and Conditions
                      </Link>
                    </Label>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setCurrentStep(2)}>
                      Back to Payment
                    </Button>
                    <Button variant="hero" size="lg" onClick={handlePlaceOrder}>
                      Place Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div>
            <Card className="shadow-soft border-0 sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Items */}
                <div className="space-y-3">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium line-clamp-2">{item.name}</p>
                        <p className="text-xs text-muted">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-success">
                    <span>Shipping</span>
                    <span>FREE</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">₹{total.toLocaleString()}</span>
                </div>

                {/* Delivery Info */}
                <div className="pt-4 space-y-2 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>Estimated delivery: 3-5 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>Secure checkout guaranteed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;