import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";

const caseStudies = [
  {
    title: "Project Phoenix: Redefining E-Commerce",
    description: "A complete overhaul of a major e-commerce platform's user experience, resulting in a 40% increase in conversion rates.",
    image: "https://placehold.co/600x400.png",
    hint: "ecommerce website",
    tags: ["UX Research", "UI Design", "Design System"],
    link: "#",
  },
  {
    title: "Innovate OS: A New Mobile Frontier",
    description: "Led the design of a next-generation mobile operating system focused on productivity and seamless cross-device integration.",
    image: "https://placehold.co/600x400.png",
    hint: "mobile interface",
    tags: ["Product Design", "Prototyping", "User Testing"],
    link: "#",
  },
  {
    title: "DataViz Pro: Empowering Analysts",
    description: "Designed a powerful data visualization tool that simplifies complex datasets and empowers analysts to uncover insights faster.",
    image: "https://placehold.co/600x400.png",
    hint: "dashboard analytics",
    tags: ["Data Visualization", "SaaS", "UX Design"],
    link: "#",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">Visual Case Studies</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my approach to problem-solving and my commitment to creating user-centric designs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-xl hover:-translate-y-2">
              <div className="overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={600}
                  height={400}
                  data-ai-hint={study.hint}
                  className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="font-headline text-xl">{study.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{study.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Case Study
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
