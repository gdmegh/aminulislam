
import { Button } from "./ui/button";
import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies';
import ProjectImpactChart from './project-impact-chart';
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function PortfolioHighlight() {
  if (!caseStudies || caseStudies.length === 0) {
    return null;
  }

  return (
    <section id="portfolio" className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold">My Portfolio</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some projects that showcase my design process and impact.
          </p>
        </div>
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`}
            >
              <div
                className={`overflow-hidden rounded-lg ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                {study.image.startsWith('/') ? (
                   <Image 
                    src={study.image}
                    alt={study.title}
                    width={800}
                    height={600}
                    role="img"
                    data-ai-hint={study.hint}
                    className="rounded-lg shadow-xl"
                  />
                ) : study.metrics ? (
                  <ProjectImpactChart data={study.metrics} chartType={study.chartType} />
                ) : <Image 
                    src={study.image}
                    alt={study.title}
                    width={800}
                    height={600}
                    role="img"
                    data-ai-hint={study.hint}
                    className="rounded-lg shadow-xl"
                  />}
              </div>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <h3 className="font-headline text-3xl font-bold">{study.title}</h3>
                <p className="text-muted-foreground text-lg my-6">{study.description}</p>
                
                <div className="flex flex-wrap gap-4">
                    <Button asChild>
                       <Link href={`/portfolio/${study.slug}`}>View Case Study</Link>
                    </Button>
                    {study.prototypeLink && (
                      <Button variant="outline" asChild>
                        <Link href={study.prototypeLink} target="_blank">
                          View Prototype
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
