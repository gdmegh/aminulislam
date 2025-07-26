import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Enterprise Design System",
    description: "A scalable design system for a suite of enterprise applications.",
    image: "https://placehold.co/800x600.png",
    hint: "design system"
  },
  {
    title: "Fintech Mobile App",
    description: "Crafting an intuitive mobile banking experience for millennials.",
    image: "https://placehold.co/800x600.png",
    hint: "mobile banking"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Visualizing complex data to provide actionable insights.",
    image: "https://placehold.co/800x600.png",
    hint: "analytics dashboard"
  },
  {
    title: "Healthcare Platform Redesign",
    description: "Improving patient-doctor communication through better UX.",
    image: "https://placehold.co/800x600.png",
    hint: "healthcare platform"
  },
];

export default function FeaturedProjects() {
  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold">Featured Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">A glimpse into my recent work and design explorations.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden group">
                    <CardHeader className="p-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={600}
                        data-ai-hint={project.hint}
                        className="aspect-[4/3] object-cover w-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                      <p className="mt-2 text-muted-foreground">{project.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex"/>
        </Carousel>
      </div>
    </section>
  );
}
