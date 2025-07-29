
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies';
import { notFound } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Clock, Users, Target } from 'lucide-react';


// Re-using the citizen portal page for all case studies for now.
// We can create specific layouts later if needed.
import CitizenPortalPage from '../citizen-portal/page';
import ComplaintManagementPage from '../complaint-management-system/page';

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find(cs => cs.slug === params.slug);

  if (!study) {
    notFound();
  }

  // For now, we'll conditionally render the existing detailed page
  // if the slug matches, otherwise we show a generic layout.
  if (study.slug === 'citizen-portal') {
    return <CitizenPortalPage />;
  }

  if (study.slug === 'complaint-management-system') {
    return <ComplaintManagementPage />;
  }

  // Generic Case Study Page Layout
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
      <section className="bg-card text-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-primary">
                UX Design
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight font-headline">
                {study.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {study.description}
              </p>
               <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Timeline Placeholder</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Participants Placeholder</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span>Role Placeholder</span>
                </div>
              </div>
            </div>
            <div className="relative">
                <Image 
                    src={study.image}
                    alt={study.title}
                    width={800}
                    height={600}
                    data-ai-hint={study.hint}
                    className="rounded-lg shadow-xl"
                />
            </div>
          </div>
        </div>
      </section>

       <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 font-headline">Case Study Details</h2>
            <p className="text-lg text-muted-foreground text-center">
                Detailed content for this case study has not been added yet. Please check back later.
            </p>
        </div>
      </div>

      </main>
      <Footer />
    </div>
  );
}
