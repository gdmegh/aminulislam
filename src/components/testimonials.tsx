import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, Innovate Co.",
    image: "https://placehold.co/100x100.png",
    hint: "woman portrait",
    quote: "Working with them was a game-changer. Their design intuition and user-centric approach transformed our product and delighted our customers. An absolute pleasure to collaborate with.",
  },
  {
    name: "Michael Chen",
    title: "VP of Product, TechGiant Inc.",
    image: "https://placehold.co/100x100.png",
    hint: "man portrait",
    quote: "Their leadership on our design system was pivotal. They brought clarity, consistency, and a vision that elevated our entire product suite. A true master of their craft.",
  },
  {
    name: "Emily Rodriguez",
    title: "Startup Founder, Creative Solutions",
    image: "https://placehold.co/100x100.png",
    hint: "woman face",
    quote: "As a startup, we needed a designer who could think big picture while executing flawlessly. They delivered on all fronts, providing us with a world-class user experience.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold">What Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Kind words from colleagues and clients I've had the pleasure to work with.
          </p>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto"
         opts={{
            align: "start",
            loop: true,
          }}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <Card className="bg-background border-border/50">
                    <CardContent className="p-8 text-center flex flex-col items-center">
                       <div className="flex gap-1 text-primary mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current"/>)}
                       </div>
                      <p className="text-xl italic text-foreground/90 text-balance">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <Avatar className="w-16 h-16 mt-8 mb-2 border-2 border-primary/50">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint}/>
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <h4 className="font-headline text-lg font-semibold">{testimonial.name}</h4>
                      <p className="text-muted-foreground">{testimonial.title}</p>
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
