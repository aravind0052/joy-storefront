import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isOnSale?: boolean;
  isFeatured?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  category,
  isOnSale = false,
  isFeatured = false,
}: ProductCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discountPercentage = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Card 
      className="group card-hover overflow-hidden border-0 shadow-soft bg-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-background-soft">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isFeatured && (
            <Badge variant="secondary" className="bg-gradient-accent text-accent-foreground">
              Featured
            </Badge>
          )}
          {isOnSale && discountPercentage > 0 && (
            <Badge variant="destructive" className="bg-gradient-primary text-primary-foreground">
              -{discountPercentage}%
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 bg-background/80 backdrop-blur-sm transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          onClick={(e) => {
            e.preventDefault();
            setIsFavorited(!isFavorited);
          }}
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${
              isFavorited ? 'fill-destructive text-destructive' : 'text-muted'
            }`} 
          />
        </Button>

        {/* Quick Actions */}
        <div className={`absolute bottom-3 left-3 right-3 flex gap-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Button 
            variant="secondary" 
            size="sm" 
            className="flex-1 bg-background/90 backdrop-blur-sm"
            asChild
          >
            <Link to={`/product/${id}`}>
              <Eye className="w-4 h-4 mr-1" />
              View
            </Link>
          </Button>
          <Button 
            variant="cart" 
            size="sm" 
            className="flex-1 bg-background/90 backdrop-blur-sm"
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic
            }}
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Category */}
        <div className="text-xs text-muted uppercase tracking-wide mb-2">
          {category}
        </div>

        {/* Product Name */}
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-sm mb-2 line-clamp-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(rating)
                    ? 'fill-warning text-warning'
                    : 'text-muted'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ₹{price.toLocaleString()}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-muted line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;