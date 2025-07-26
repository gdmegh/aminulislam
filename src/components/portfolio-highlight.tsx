import Image from "next/image";
import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies';

export default function PortfolioHighlight() {
  const study = caseStudies[0];

  if (!study) {
    return null;
  }

  return (
    <section id="portfolio" className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold">My Portfolio</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here is a project that showcases my design process and impact.
          </p>
        </div>
        <div
          className={`group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`}
        >
          <div
            className={`overflow-hidden rounded-lg shadow-xl md:order-1`}
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
            className={`flex flex-col md:order-2`}
          >
            <h3 className="font-headline text-3xl font-bold">{study.title}</h3>
            <p className="text-muted-foreground text-lg my-6">{study.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-6">
              {study.highlights && study.highlights.map((highlight, hIndex) => (
                <div key={hIndex} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="flex">
                <Button asChild className="w-full" variant="outline">
                   <Link href={`/portfolio/${study.slug}`}>View Case Study</Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
