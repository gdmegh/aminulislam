
"use client";

import { useState, useEffect } from 'react';
import About from '@/components/about';
import Blog from '@/components/blog';
import DesignedProducts from '@/components/designed-products';
import FeaturedProjects from '@/components/featured-projects';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';

export default function Home() {
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Assuming hero section is about 90vh
      if (window.scrollY > window.innerHeight * 0.9) {
        setShowStickyButton(true);
      } else {
        setShowStickyButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header showStickyButton={showStickyButton} />
      <main className="flex-grow">
        <Hero />
        <FeaturedProjects />
        <DesignedProducts />
        <About />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
