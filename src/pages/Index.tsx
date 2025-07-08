import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroFloral from "@/assets/hero-floral.jpg";
import productCollageBox from "@/assets/product-collage-box.jpg";
import productLetter from "@/assets/product-letter.jpg";
import productFrame from "@/assets/product-frame.jpg";
import productPressed from "@/assets/product-pressed.jpg";

const products = [
  {
    id: 1,
    name: "Memory Boxes",
    price: 1250,
    image: productCollageBox,
    description: "Handcrafted wooden boxes filled with preserved flowers, photos, and cherished mementos"
  },
  {
    id: 2,
    name: "Custom Letters",
    price: 750,
    image: productLetter,
    description: "Personalized pressed flower letters with your special message beautifully preserved"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <span className="text-white font-bold">F&F</span>
            </div>
            <span className="text-white font-medium">Fern & Fern</span>
          </div>
          <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground backdrop-blur-sm">
            Contact
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroFloral})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-wide">
            Fern &
            <br />
            <span className="font-medium">Fern</span>
          </h1>
          <p className="text-xl text-white/60 mb-12 font-light">
            Handcrafted floral keepsakes
          </p>
          <Button 
            size="lg" 
            className="bg-white text-foreground hover:bg-white/90 px-12 py-4 text-lg font-medium rounded-full"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Create Yours
          </Button>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="group border-0 shadow-none bg-transparent overflow-hidden cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white text-xl font-medium mb-2">
                      {product.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-3">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/90 text-lg">
                        R{product.price}
                      </span>
                      <Button size="sm" className="bg-white text-foreground hover:bg-white/90 rounded-full px-6">
                        Customize
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-24 bg-gradient-floral">
        <div className="text-center px-6">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Start Creating
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Design your personalized keepsake today
          </p>
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-12 py-4 text-lg rounded-full">
            Begin Journey
          </Button>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="py-16 px-6 border-t border-border/30 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-floral rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-foreground">F&F</span>
              </div>
              <span className="text-foreground font-medium">Fern & Fern Creations</span>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-3">Contact</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>info@fernandfern.co.za</p>
                <p>+27 82 123 4567</p>
                <p>Cape Town, South Africa</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-3">Follow</h4>
              <div className="flex space-x-4 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
                <a href="#" className="hover:text-foreground transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;