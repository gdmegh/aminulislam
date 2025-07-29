
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies';
import ProjectImpactChart from '@/components/project-impact-chart';
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow" id="main-content">
        <section id="portfolio" className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="font-headline text-5xl sm:text-6xl font-bold">My Portfolio</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore a collection of projects that showcase my design process and impact.
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
                     {study.slug === 'citizen-portal' ? (
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
                      ) : null}
                  </div>
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <h2 className="font-headline text-3xl font-bold">{study.title}</h2>
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
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
