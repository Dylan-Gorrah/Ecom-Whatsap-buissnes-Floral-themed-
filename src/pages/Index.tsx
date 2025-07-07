import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroFloral from "@/assets/hero-floral.jpg";
import productCollageBox from "@/assets/product-collage-box.jpg";
import productLetter from "@/assets/product-letter.jpg";
import productFrame from "@/assets/product-frame.jpg";
import productPressed from "@/assets/product-pressed.jpg";

// Mock product data
const products = [
  {
    id: 1,
    name: "Memory Collage Box",
    description: "A beautiful keepsake box filled with your precious memories, adorned with dried florals",
    price: 89,
    category: "Collage Boxes",
    image: productCollageBox,
    isPopular: true
  },
  {
    id: 2,
    name: "Floral Love Letter",
    description: "Handwritten letter with custom watercolor floral borders and calligraphy",
    price: 45,
    category: "Letters",
    image: productLetter,
    isPopular: false
  },
  {
    id: 3,
    name: "Botanical Photo Frame",
    description: "Custom photo frame decorated with preserved peonies and eucalyptus",
    price: 65,
    category: "Frames",
    image: productFrame,
    isPopular: true
  },
  {
    id: 4,
    name: "Pressed Flower Art",
    description: "Elegant pressed flower arrangement preserved between glass panels",
    price: 75,
    category: "Wall Art",
    image: productPressed,
    isPopular: false
  }
];

const categories = ["All", "Collage Boxes", "Letters", "Frames", "Wall Art"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-floral rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-foreground">F&F</span>
              </div>
              <h1 className="text-xl font-bold text-foreground">Fern & Fern Creations</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Gallery</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Custom Orders</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <Button variant="outline" size="sm">Contact</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroFloral})` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Preserve Your Precious Memories
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow">
              Handcrafted floral keepsakes that tell your unique story
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90 shadow-floral">
                Explore Gallery
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
                Custom Order
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Floral Keepsakes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each piece is lovingly handcrafted with dried florals and personalized touches to create lasting memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-border hover:shadow-floral transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isPopular && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                      Popular
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">
                      ${product.price}
                    </span>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Customize
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Fern & Fern?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-floral rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌸</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Handcrafted with Love</h3>
              <p className="text-muted-foreground">Each piece is carefully crafted by hand using premium dried florals and materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-floral rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Fully Customizable</h3>
              <p className="text-muted-foreground">Upload your photos, choose your colors, and add personal messages</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-floral rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Lasting Memories</h3>
              <p className="text-muted-foreground">Preserve your special moments in beautiful keepsakes that last forever</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-floral">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Create Your Keepsake?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start designing your personalized floral memory piece today
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              Start Customizing
            </Button>
            <Button size="lg" variant="outline">
              View Examples
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-floral rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground">F&F</span>
                </div>
                <span className="font-bold text-foreground">Fern & Fern Creations</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Handcrafted floral keepsakes that preserve your most precious memories with beauty and elegance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Collage Boxes</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Floral Letters</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Photo Frames</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Wall Art</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Custom Orders</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Order Tracking</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Fern & Fern Creations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;