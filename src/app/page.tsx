
import About from '@/components/about';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import PortfolioHighlight from '@/components/portfolio-highlight';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <PortfolioHighlight />
      </main>
      <Footer />
    </div>
  );
}
