import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const products = [
    {
      title: "SaaS Platform",
      description: "A comprehensive SaaS solution for project management.",
      image: "https://placehold.co/600x400.png",
      hint: "saas dashboard",
      link: "#",
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking for a new generation.",
      image: "https://placehold.co/600x400.png",
      hint: "mobile banking",
      link: "#",
    },
    {
      title: "AI-Powered CRM",
      description: "Customer relationship management enhanced with AI.",
      image: "https://placehold.co/600x400.png",
      hint: "crm analytics",
      link: "#",
    },
    {
      title: "Healthcare Portal",
      description: "A patient-centric portal for managing health records.",
      image: "https://placehold.co/600x400.png",
      hint: "healthcare dashboard",
      link: "#",
    },
    {
      title: "E-Learning Platform",
      description: "Interactive and engaging online learning for all ages.",
      image: "https://placehold.co/600x400.png",
      hint: "elearning website",
      link: "#",
    },
    {
      title: "Travel Booking Site",
      description: "Seamlessly book your next adventure with our travel platform.",
      image: "https://placehold.co/600x400.png",
      hint: "travel booking",
      link: "#",
    },
  ];

export default function DesignedProducts() {
  return (
    <section id="products" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold">Products I've Designed</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into some of the products I had the privilege to design from concept to launch.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card className="h-full flex flex-col overflow-hidden group border-primary/20 hover:border-primary/50 transition-all duration-300">
                    <div className="overflow-hidden">
                        <Image
                        src={product.image}
                        alt={product.title}
                        width={600}
                        height={400}
                        data-ai-hint={product.hint}
                        className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                        <CardTitle className="font-headline text-2xl mb-2">{product.title}</CardTitle>
                        <CardDescription className="flex-grow">{product.description}</CardDescription>
                        <Button variant="link" className="p-0 h-auto mt-4 self-start">
                            Learn More &rarr;
                        </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex"/>
          <CarouselNext className="hidden md:flex"/>
        </Carousel>
      </div>
    </section>
  );
}
