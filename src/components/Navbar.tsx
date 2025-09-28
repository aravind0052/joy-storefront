import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Heart, 
  Menu, 
  X,
  Home,
  Package,
  Grid3X3
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const cartItemCount = 3; // This would come from your cart state

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-gradient">ShopZone</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 transition-colors ${
                isActive('/') ? 'text-primary font-semibold' : 'text-muted hover:text-foreground'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/products" 
              className={`flex items-center space-x-1 transition-colors ${
                isActive('/products') ? 'text-primary font-semibold' : 'text-muted hover:text-foreground'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Products</span>
            </Link>
            <Link 
              to="/categories" 
              className={`flex items-center space-x-1 transition-colors ${
                isActive('/categories') ? 'text-primary font-semibold' : 'text-muted hover:text-foreground'
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
              <span>Categories</span>
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 h-10 bg-card border-border focus:border-primary"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="w-5 h-5" />
            </Button>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User Menu */}
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 h-10"
                />
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-2">
                <Link 
                  to="/" 
                  className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                    isActive('/') ? 'bg-primary text-primary-foreground' : 'hover:bg-card-hover'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
                <Link 
                  to="/products" 
                  className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                    isActive('/products') ? 'bg-primary text-primary-foreground' : 'hover:bg-card-hover'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Package className="w-4 h-4" />
                  <span>Products</span>
                </Link>
                <Link 
                  to="/categories" 
                  className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                    isActive('/categories') ? 'bg-primary text-primary-foreground' : 'hover:bg-card-hover'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Grid3X3 className="w-4 h-4" />
                  <span>Categories</span>
                </Link>
                <Link 
                  to="/wishlist" 
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-card-hover transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Heart className="w-4 h-4" />
                  <span>Wishlist</span>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;