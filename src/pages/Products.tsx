import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  SlidersHorizontal,
  X
} from "lucide-react";
import featuredProductsImage from "@/assets/featured-products.jpg";

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  // Mock data for products
  const allProducts = [
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 2999,
      originalPrice: 3999,
      image: featuredProductsImage,
      rating: 4.5,
      reviews: 128,
      category: "Electronics",
      brand: "AudioTech",
      isOnSale: true,
      isFeatured: true,
    },
    {
      id: "2",
      name: "Smart Fitness Watch",
      price: 1999,
      originalPrice: 2499,
      image: featuredProductsImage,
      rating: 4.3,
      reviews: 89,
      category: "Wearables",
      brand: "FitPro",
      isOnSale: true,
    },
    {
      id: "3",
      name: "Professional Camera Lens",
      price: 15999,
      image: featuredProductsImage,
      rating: 4.8,
      reviews: 45,
      category: "Photography",
      brand: "LensMaster",
      isFeatured: true,
    },
    {
      id: "4",
      name: "Gaming Mechanical Keyboard",
      price: 4999,
      originalPrice: 5999,
      image: featuredProductsImage,
      rating: 4.6,
      reviews: 203,
      category: "Gaming",
      brand: "GameGear",
      isOnSale: true,
    },
    {
      id: "5",
      name: "Wireless Gaming Mouse",
      price: 1599,
      image: featuredProductsImage,
      rating: 4.4,
      reviews: 156,
      category: "Gaming",
      brand: "GameGear",
    },
    {
      id: "6",
      name: "Professional Laptop Stand",
      price: 2499,
      originalPrice: 2999,
      image: featuredProductsImage,
      rating: 4.2,
      reviews: 78,
      category: "Accessories",
      brand: "DeskPro",
      isOnSale: true,
    },
  ];

  const categories = [
    { name: "Electronics", count: 45 },
    { name: "Wearables", count: 23 },
    { name: "Photography", count: 18 },
    { name: "Gaming", count: 34 },
    { name: "Accessories", count: 67 },
    { name: "Mobile", count: 89 },
  ];

  const brands = [
    { name: "AudioTech", count: 12 },
    { name: "FitPro", count: 8 },
    { name: "LensMaster", count: 15 },
    { name: "GameGear", count: 23 },
    { name: "DeskPro", count: 9 },
    { name: "TechCorp", count: 18 },
  ];

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    }
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 50000]);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background-soft">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            All Products
          </h1>
          <p className="text-xl text-muted">
            Discover our complete collection
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card className="sticky top-24 shadow-soft border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={clearFilters}
                    >
                      Clear All
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="lg:hidden"
                      onClick={() => setShowFilters(false)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium mb-4">Price Range</h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={50000}
                    step={100}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-muted">
                    <span>₹{priceRange[0].toLocaleString()}</span>
                    <span>₹{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium mb-4">Categories</h4>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div key={category.name} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category.name}`}
                          checked={selectedCategories.includes(category.name)}
                          onCheckedChange={(checked) => 
                            handleCategoryChange(category.name, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={`category-${category.name}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
                        >
                          {category.name}
                        </label>
                        <span className="text-xs text-muted">({category.count})</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Brands */}
                <div className="mb-6">
                  <h4 className="font-medium mb-4">Brands</h4>
                  <div className="space-y-3">
                    {brands.map((brand) => (
                      <div key={brand.name} className="flex items-center space-x-2">
                        <Checkbox
                          id={`brand-${brand.name}`}
                          checked={selectedBrands.includes(brand.name)}
                          onCheckedChange={(checked) => 
                            handleBrandChange(brand.name, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={`brand-${brand.name}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
                        >
                          {brand.name}
                        </label>
                        <span className="text-xs text-muted">({brand.count})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Mobile Filter Toggle */}
              <Button 
                variant="outline" 
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rating</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex border border-border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none border-r"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategories.map((category) => (
                  <Badge key={category} variant="secondary" className="px-3 py-1">
                    {category}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 ml-2 hover:bg-transparent"
                      onClick={() => handleCategoryChange(category, false)}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </Badge>
                ))}
                {selectedBrands.map((brand) => (
                  <Badge key={brand} variant="secondary" className="px-3 py-1">
                    {brand}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 ml-2 hover:bg-transparent"
                      onClick={() => handleBrandChange(brand, false)}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            )}

            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted">
                Showing {allProducts.length} of {allProducts.length} products
              </p>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {allProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;