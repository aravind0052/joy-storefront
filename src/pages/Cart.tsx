import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Minus, 
  Trash2, 
  ShoppingBag, 
  ArrowLeft, 
  Tag,
  Truck,
  Shield
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import featuredProductsImage from "@/assets/featured-products.jpg";

const Cart = () => {
  const { toast } = useToast();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  // Mock cart items
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 2999,
      originalPrice: 3999,
      image: featuredProductsImage,
      quantity: 2,
      category: "Electronics",
      inStock: true,
    },
    {
      id: "2",
      name: "Smart Fitness Watch",
      price: 1999,
      originalPrice: 2499,
      image: featuredProductsImage,
      quantity: 1,
      category: "Wearables",
      inStock: true,
    },
    {
      id: "3",
      name: "Gaming Mechanical Keyboard",
      price: 4999,
      originalPrice: 5999,
      image: featuredProductsImage,
      quantity: 1,
      category: "Gaming",
      inStock: false,
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item Removed",
      description: "Item has been removed from your cart",
    });
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "save10") {
      setAppliedCoupon(couponCode);
      toast({
        title: "Coupon Applied!",
        description: "You saved ₹500 with coupon SAVE10",
      });
    } else {
      toast({
        title: "Invalid Coupon",
        description: "Please check your coupon code and try again",
        variant: "destructive",
      });
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => 
    sum + ((item.originalPrice - item.price) * item.quantity), 0
  );
  const couponDiscount = appliedCoupon ? 500 : 0;
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal - couponDiscount + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background-soft flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted mb-6">Add some products to get started!</p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/products">
              Start Shopping
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-soft">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" asChild>
            <Link to="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gradient">
              Shopping Cart
            </h1>
            <p className="text-muted">{cartItems.length} items in your cart</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="shadow-soft border-0">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="w-full sm:w-24 h-48 sm:h-24 rounded-lg overflow-hidden bg-background-soft">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {item.category}
                            </Badge>
                            {!item.inStock && (
                              <Badge variant="destructive" className="text-xs">
                                Out of Stock
                              </Badge>
                            )}
                          </div>
                          
                          <Link 
                            to={`/product/${item.id}`}
                            className="text-lg font-semibold hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                          
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xl font-bold text-primary">
                              ₹{item.price.toLocaleString()}
                            </span>
                            {item.originalPrice > item.price && (
                              <span className="text-sm text-muted line-through">
                                ₹{item.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={!item.inStock}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            
                            <span className="w-12 text-center font-medium">
                              {item.quantity}
                            </span>
                            
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              disabled={!item.inStock}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Coupon Code */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Coupon Code
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <span className="text-success font-medium">
                      {appliedCoupon.toUpperCase()} Applied
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setAppliedCoupon(null);
                        setCouponCode("");
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button variant="outline" onClick={applyCoupon}>
                      Apply
                    </Button>
                  </div>
                )}
                <p className="text-xs text-muted">
                  Try code "SAVE10" for ₹500 off
                </p>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                
                {savings > 0 && (
                  <div className="flex justify-between text-success">
                    <span>Savings</span>
                    <span>-₹{savings.toLocaleString()}</span>
                  </div>
                )}
                
                {couponDiscount > 0 && (
                  <div className="flex justify-between text-success">
                    <span>Coupon Discount</span>
                    <span>-₹{couponDiscount.toLocaleString()}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-success" : ""}>
                    {shipping === 0 ? "FREE" : `₹${shipping}`}
                  </span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">₹{total.toLocaleString()}</span>
                </div>

                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/checkout">
                    Proceed to Checkout
                  </Link>
                </Button>

                {/* Delivery Info */}
                <div className="pt-4 space-y-2 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>Free delivery on orders above ₹999</span>
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

export default Cart;