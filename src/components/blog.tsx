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
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

async function getBlogPosts() {
    const querySnapshot = await getDocs(collection(db, "blogPosts"));
    const posts: any[] = [];
    querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() });
    });
    return posts;
}

export default async function Blog() {
  const blogPosts = await getBlogPosts();

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
                        src={post.image || "/images/placeholder-600x400.png"}
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
