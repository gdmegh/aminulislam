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
import { Badge } from "./ui/badge";

const blogPosts = [
    {
      title: "The Art of Simplicity in Design",
      description: "Exploring how minimalism and focus can lead to more intuitive and powerful user experiences.",
      image: "https://placehold.co/600x400.png",
      hint: "minimalist design",
      link: "#",
      category: "UX Principles",
      date: "May 15, 2024"
    },
    {
      title: "Building Scalable Design Systems",
      description: "A deep dive into the architecture and strategy behind creating design systems that grow with your products.",
      image: "https://placehold.co/600x400.png",
      hint: "design system",
      link: "#",
      category: "Design Systems",
      date: "April 22, 2024"
    },
    {
      title: "AI's Role in the Future of UX",
      description: "How artificial intelligence is shaping the next generation of user interfaces and interactions.",
      image: "https://placehold.co/600x400.png",
      hint: "ai interface",
      link: "#",
      category: "Future Tech",
      date: "March 10, 2024"
    },
    {
      title: "User Research That Drives Results",
      description: "Methods and techniques for conducting user research that provides actionable insights for your team.",
      image: "https://placehold.co/600x400.png",
      hint: "user research",
      link: "#",
      category: "Methodology",
      date: "February 28, 2024"
    },
    {
      title: "The Psychology of Color in UI",
      description: "Understanding how color impacts user emotion, perception, and decision-making in digital products.",
      image: "https://placehold.co/600x400.png",
      hint: "color psychology",
      link: "#",
      category: "UI Design",
      date: "January 19, 2024"
    },
  ];

export default function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold">My Thoughts</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            I enjoy writing about design, technology, and the intersection of the two. Here are some of my latest articles.
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
            {blogPosts.map((post, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card className="h-full flex flex-col overflow-hidden group border-primary/20 hover:border-primary/50 transition-all duration-300">
                    <div className="overflow-hidden">
                        <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        data-ai-hint={post.hint}
                        className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                        <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                           <Badge variant="secondary" className="font-normal">{post.category}</Badge>
                           <time dateTime={post.date}>{post.date}</time>
                        </div>
                        <CardTitle className="font-headline text-2xl mb-2 flex-grow">{post.title}</CardTitle>
                        <CardDescription>{post.description}</CardDescription>
                        <Button variant="link" className="p-0 h-auto mt-4 self-start">
                            Read More &rarr;
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
