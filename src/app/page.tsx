import About from '@/components/about';
import CaseStudies from '@/components/case-studies';
import Contact from '@/components/contact';
import FeaturedProjects from '@/components/featured-projects';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProjects />
        <About />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
