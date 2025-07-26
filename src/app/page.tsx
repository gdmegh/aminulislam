
import About from '@/components/about';
import DesignedProducts from '@/components/designed-products';
import FeaturedProjects from '@/components/featured-projects';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProjects />
        <DesignedProducts />
        <About />
      </main>
      <Footer />
    </div>
  );
}
