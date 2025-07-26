
import About from '@/components/about';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}
