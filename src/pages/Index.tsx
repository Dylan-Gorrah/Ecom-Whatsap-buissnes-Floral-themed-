import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Instagram } from "lucide-react";
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const playPingSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
      console.log('Audio not supported');
    }
  };

  const handleCreateYours = () => {
    playPingSound();
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Mouse Spotlight Effect */}
      <div 
        className="fixed top-0 left-0 w-96 h-96 bg-gradient-radial from-white/5 via-white/2 to-transparent rounded-full pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      {/* Simple Header */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
              <span className="text-white font-bold">F&F</span>
            </div>
            <span className="text-white font-medium transition-all duration-300 group-hover:text-white/80">Fern & Fern</span>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground backdrop-blur-sm transition-all duration-500 hover:scale-105"
            onClick={() => document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' })}
          >
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
            className="bg-white text-foreground hover:bg-white/90 px-12 py-4 text-lg font-medium rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl transform"
            onClick={handleCreateYours}
          >
            Create Yours
          </Button>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="group border-0 shadow-none bg-transparent overflow-hidden cursor-pointer animate-fade-in hover:shadow-floral transition-all duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white text-xl font-medium mb-2 transition-all duration-300">
                      {product.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-3 transition-all duration-300">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/90 text-lg transition-all duration-300">
                        R{product.price}
                      </span>
                      <Button size="sm" className="bg-white text-foreground hover:bg-white/90 rounded-full px-6 transition-all duration-300 hover:scale-105">
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
                <a 
                  href="https://www.instagram.com/fenandferncreations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-foreground transition-colors"
                >
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;