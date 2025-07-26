import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const caseStudies = [
  {
    title: "Project Phoenix: Redefining E-Commerce",
    description: "A complete overhaul of a major e-commerce platform's user experience, resulting in a 40% increase in conversion rates.",
    image: "https://placehold.co/800x600.png",
    hint: "ecommerce website",
    tags: ["UX Research", "UI Design", "Design System"],
    link: "#",
  },
  {
    title: "Innovate OS: A New Mobile Frontier",
    description: "Led the design of a next-generation mobile operating system focused on productivity and seamless cross-device integration.",
    image: "https://placehold.co/800x600.png",
    hint: "mobile interface",
    tags: ["Product Design", "Prototyping", "User Testing"],
    link: "#",
  },
  {
    title: "DataViz Pro: Empowering Analysts",
    description: "Designed a powerful data visualization tool that simplifies complex datasets and empowers analysts to uncover insights faster.",
    image: "https://placehold.co/800x600.png",
    hint: "dashboard analytics",
    tags: ["Data Visualization", "SaaS", "UX Design"],
    link: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold">Case Studies</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my approach to problem-solving and my commitment to creating user-centric designs.
          </p>
        </div>
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`}
            >
              <div
                className={`overflow-hidden rounded-lg shadow-xl ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <Image
                  src={study.image}
                  alt={study.title}
                  width={800}
                  height={600}
                  data-ai-hint={study.hint}
                  className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <h3 className="font-headline text-3xl font-bold">{study.title}</h3>
                <div className="flex flex-wrap gap-2 mt-4 mb-4">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground text-lg mb-6">{study.description}</p>
                <div className="flex">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    View Case Study
                    </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
