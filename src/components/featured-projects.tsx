import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const caseStudies = [
  {
    title: "Redesigning a Government Licensing Portal for Seamless Public Access",
    description: "Led the complete UX/UI redesign of a complex licensing and NOC management platform for a government department. Transformed a paper-based, confusing system into a user-friendly digital service, improving public accessibility and reducing processing time by 40%.",
    image: "/images/placeholder-800x600.png",
    hint: "government portal",
    tags: ["UX Research", "UI Design", "Prototyping", "Design System"],
    link: "#",
  },
  {
    title: "Building a Scalable Design System for a Growing Software Company",
    description: "Created a flexible and reusable design system from scratch to unify product interfaces across multiple platforms. Standardized UI components and interaction patterns, reducing design time by 60% and improving developer handoff efficiency.",
    image: "/images/placeholder-800x600.png",
    hint: "design system",
    tags: ["Design System", "UI Components", "Documentation", "Scalability"],
    link: "#",
  },
  {
    title: "Optimizing the Onboarding Experience for a B2B SaaS Platform",
    description: "Improved the onboarding flow of a complex B2B SaaS platform to reduce user drop-off and increase activation. By simplifying the UX, guiding users contextually, and introducing a progress-driven dashboard, conversion rates increased by 35%.",
    image: "/images/placeholder-800x600.png",
    hint: "saas onboarding",
    tags: ["UX Analysis", "A/B Testing", "Prototyping", "Collaboration"],
    link: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="portfolio" className="py-12 sm:py-16 bg-card">
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
