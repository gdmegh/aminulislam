import Footer from '@/components/footer';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies } from '@/lib/case-studies';


export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find(cs => cs.slug === params.slug);

  if (!study) {
    notFound();
  }

  if (study.slug === 'citizen-portal') {
    // This slug is now handled by its own dedicated page.
    // We redirect or can handle it differently if needed.
    // For now, let's just say it's not found here to avoid conflict.
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <article>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center py-12 sm:py-16">
               <p className="text-primary font-semibold mb-2">Case Study</p>
              <h1 className="font-headline text-4xl sm:text-5xl font-bold">{study.title}</h1>
            </div>
          </div>

          {study.slug === 'scalable-design-system' && study.sections ? (
             <div>
                {study.sections.map((section, index) => (
                    <section key={index} className="min-h-screen flex items-center py-16">
                        <div className="container mx-auto px-4">
                            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                                    <h2 className="font-headline text-3xl font-bold mb-4">{section.title}</h2>
                                    <p className="text-lg text-muted-foreground">{section.content}</p>
                                </div>
                                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                                    <div className="rounded-lg shadow-xl overflow-hidden">
                                        <Image 
                                            src={section.image as string} 
                                            alt={section.title} 
                                            width={800} 
                                            height={600} 
                                            data-ai-hint={section.hint}
                                            className="w-full h-auto object-cover" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
             </div>
          ) : (
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {study.image && (
                         <div className="rounded-lg shadow-xl overflow-hidden mb-12">
                            <Image
                                src={study.image}
                                alt={study.title}
                                width={1200}
                                height={800}
                                data-ai-hint={study.hint}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    )}
                    {study.content && (
                        <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: study.content }}>
                        </div>
                    )}
                </div>
            </div>
          )}
          
          <div className="text-center my-16">
            <Button asChild>
                <Link href="/case-studies">← Back to Case Studies</Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

    