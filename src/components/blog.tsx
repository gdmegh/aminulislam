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
    id: '1',
    title: "The Art of Simplicity in UX Design",
    description: "Discover how minimalism and clean design can lead to more intuitive and effective user experiences.",
    image: "https://placehold.co/600x400.png",
    hint: "design simplicity",
    category: "UX Design",
    date: "2024-07-22",
  },
  {
    id: '2',
    title: "Building Scalable Design Systems",
    description: "A deep dive into the principles and practices of creating a design system that grows with your products.",
    image: "https://placehold.co/600x400.png",
    hint: "design system",
    category: "Design Systems",
    date: "2024-07-15",
  },
  {
    id: '3',
    title: "User Research That Drives Results",
    description: "Learn how to conduct effective user research that uncovers actionable insights and informs your design decisions.",
    image: "https://placehold.co/600x400.png",
    hint: "user research",
    category: "User Research",
    date: "2024-07-08",
  },
   {
    id: '4',
    title: "The Future of AI in Product Design",
    description: "Exploring how artificial intelligence is shaping the future of product design and creating new possibilities.",
    image: "https://placehold.co/600x400.png",
    hint: "ai design",
    category: "Technology",
    date: "2024-07-01",
  },
];


export default function Blog() {
  return (
    <section id="blog" className="py-12 sm:py-16">
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
                        src={post.image || "https://placehold.co/600x400.png"}
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
                        <Button variant="link" className="w-full justify-start p-0 h-auto mt-4 self-start">
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
