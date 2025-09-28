import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/ProductCard";
import {
  Heart,
  ShoppingCart,
  Star,
  Plus,
  Minus,
  Truck,
  Shield,
  RotateCcw,
  Share2,
  ArrowLeft,
  Check
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import featuredProductsImage from "@/assets/featured-products.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  // Mock product data
  const product = {
    id: "1",
    name: "Premium Wireless Headphones with Active Noise Cancellation",
    price: 2999,
    originalPrice: 3999,
    images: [
      featuredProductsImage,
      featuredProductsImage,
      featuredProductsImage,
      featuredProductsImage,
    ],
    rating: 4.5,
    reviews: 128,
    category: "Electronics",
    brand: "AudioTech",
    stock: 15,
    isOnSale: true,
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Premium leather ear cups",
      "Built-in microphone",
      "Foldable design"
    ],
    description: "Experience premium audio quality with our flagship wireless headphones. Featuring advanced active noise cancellation technology and premium materials for ultimate comfort during extended listening sessions.",
    specifications: {
      "Brand": "AudioTech",
      "Model": "AT-PRO-2024",
      "Color": "Midnight Black",
      "Connectivity": "Wireless (Bluetooth 5.0)",
      "Battery Life": "30 hours",
      "Charging Time": "2 hours",
      "Weight": "320g",
      "Warranty": "2 years"
    }
  };

  // Mock related products
  const relatedProducts = [
    {
      id: "2",
      name: "Smart Fitness Watch",
      price: 1999,
      originalPrice: 2499,
      image: featuredProductsImage,
      rating: 4.3,
      reviews: 89,
      category: "Wearables",
      isOnSale: true,
    },
    {
      id: "3",
      name: "Wireless Gaming Mouse",
      price: 1599,
      image: featuredProductsImage,
      rating: 4.4,
      reviews: 156,
      category: "Gaming",
    },
    {
      id: "4",
      name: "Professional Camera Lens",
      price: 15999,
      image: featuredProductsImage,
      rating: 4.8,
      reviews: 45,
      category: "Photography",
      isFeatured: true,
    },
  ];

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${quantity} item(s) added to your cart`,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Redirecting to Checkout",
      description: "Taking you to secure checkout...",
    });
  };

  return (
    <div className="min-h-screen bg-background-soft">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.category}</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/products">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-background shadow-soft">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden bg-background transition-all ${
                    selectedImage === index 
                      ? 'ring-2 ring-primary shadow-medium' 
                      : 'hover:shadow-soft'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                {product.isOnSale && (
                  <Badge variant="destructive">-{discountPercentage}% OFF</Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-warning text-warning'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                  <span className="text-lg font-medium ml-2">{product.rating}</span>
                </div>
                <span className="text-muted">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-primary">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-success" />
              <span className="text-success font-medium">
                {product.stock > 0 ? `In Stock (${product.stock} left)` : 'Out of Stock'}
              </span>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted">
                    <Check className="w-4 h-4 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="flex-1"
                  onClick={handleBuyNow}
                  disabled={product.stock === 0}
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => setIsFavorited(!isFavorited)}
                  className="flex-1"
                >
                  <Heart 
                    className={`w-5 h-5 mr-2 ${
                      isFavorited ? 'fill-destructive text-destructive' : ''
                    }`} 
                  />
                  {isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </Button>
                <Button variant="ghost" size="lg">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Delivery Info */}
            <Card className="shadow-soft border-0">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Free Delivery</p>
                      <p className="text-sm text-muted">Orders above ₹999</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <RotateCcw className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">30-Day Returns</p>
                      <p className="text-sm text-muted">Hassle-free returns</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">2-Year Warranty</p>
                      <p className="text-sm text-muted">Manufacturer warranty</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="shadow-soft border-0 mb-16">
          <CardContent className="p-6">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <div className="prose prose-gray max-w-none">
                  <p className="text-muted leading-relaxed">{product.description}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium">{key}:</span>
                      <span className="text-muted">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-4">
                  <div className="text-center py-8">
                    <p className="text-muted">Reviews section coming soon...</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gradient">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;