import Footer from '@/components/footer';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const caseStudies = [
  {
    title: "Redesigning a Government Licensing Portal for Seamless Public Access",
    slug: "government-licensing-portal",
    description: "Led the complete UX/UI redesign of a complex licensing and NOC management platform for a government department. Transformed a paper-based, confusing system into a user-friendly digital service, improving public accessibility and reducing processing time by 40%.",
    image: "/images/placeholder-1200x800.png",
    hint: "government portal mockup",
    highlights: [
      "Conducted stakeholder interviews and user journey mapping",
      "Developed personas and information architecture",
      "Designed and tested high-fidelity prototypes",
      "Delivered a design system for long-term scalability",
    ],
    content: `
      <p>The initial challenge was to digitize a manual, paper-heavy process that was causing significant delays and frustration for both citizens and government employees. Our approach began with extensive user research, including interviews with key stakeholders and end-users to map out existing pain points and identify opportunities for improvement.</p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">The Process</h3>
      <p>We developed detailed user personas and mapped out ideal user journeys, which formed the foundation for our information architecture. This led to a complete redesign of the user interface, focusing on clarity, simplicity, and accessibility. We created high-fidelity, interactive prototypes that we rigorously tested with real users, gathering feedback to iteratively refine the design.</p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">The Outcome</h3>
      <p>The final product was a responsive, intuitive digital portal that streamlined the entire licensing and NOC process. The new system reduced average processing times by 40%, significantly increased user satisfaction, and established a scalable design system for future government digital services.</p>
    `
  },
  {
    title: "Building a Scalable Design System for a Growing Software Company",
    slug: "scalable-design-system",
    description: "Created a flexible and reusable design system from scratch to unify product interfaces across multiple platforms. Standardized UI components and interaction patterns, reducing design time by 60% and improving developer handoff efficiency.",
    image: "/images/placeholder-1200x800.png",
    hint: "design system components",
    highlights: [
        "Conducted interface audits across all products",
        "Defined design principles, components, and accessibility standards",
        "Created documentation and trained cross-functional teams",
        "Scaled the system across web and mobile apps"
    ],
    content: `
      <p>As the company grew, its product suite became fragmented, with inconsistent user interfaces and duplicated design efforts. The goal was to create a single source of truth for design that would bring consistency to the user experience and accelerate the product development lifecycle.</p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">The Process</h3>
      <p>The project started with a comprehensive audit of all existing interfaces to identify common patterns and inconsistencies. From there, we established a set of core design principles and developed a robust library of reusable components, complete with accessibility guidelines. We created detailed documentation and conducted workshops to train designers and developers on how to effectively use the new system.</p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">The Outcome</h3>
      <p>The new design system successfully unified the look and feel of all products, creating a cohesive brand experience. It dramatically improved efficiency, reducing design and development time on new features by over 60%. The system is now the foundation for all new product development and continues to evolve with the company's needs.</p>
    `
  },
  {
    title: "Optimizing the Onboarding Experience for a B2B SaaS Platform",
    slug: "saas-onboarding-experience",
    description: "Improved the onboarding flow of a complex B2B SaaS platform to reduce user drop-off and increase activation. By simplifying the UX, guiding users contextually, and introducing a progress-driven dashboard, conversion rates increased by 35%.",
    image: "/images/placeholder-1200x800.png",
    hint: "saas dashboard onboarding",
    highlights: [
        "Analyzed funnel drop-offs and user feedback",
        "Simplified form interactions and added micro-copy",
        "Prototyped and A/B tested onboarding variations",
        "Collaborated closely with product and dev teams for implementation"
    ],
    content: `
      <p>User analytics revealed a significant drop-off rate during the initial onboarding process. New users were overwhelmed by the platform's complexity and were failing to reach the "aha!" moment where they understood its value. The objective was to redesign the onboarding flow to be more engaging, intuitive, and effective at guiding users to activation.</p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">The Process</h3>
      <p>We began by analyzing the user funnel and collecting qualitative feedback to pinpoint the exact areas of friction. This led to a complete redesign of the signup and setup process, which we simplified with clearer micro-copy, contextual tooltips, and a step-by-step progress indicator. We developed multiple variations of the new flow and conducted A/B tests to determine the most effective design.</p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">The Outcome</h3>
      <p>The revamped onboarding experience resulted in a 35% increase in user activation rates within the first week. The simplified, guided approach significantly reduced user frustration and helped new customers realize the platform's value much more quickly, leading to higher long-term retention.</p>
    `
  },
];


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

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <article className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">{study.title}</h1>
                <p className="mt-4 text-lg text-muted-foreground">{study.description}</p>
              </div>

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

              <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                <aside className="md:col-span-2">
                    <div className="sticky top-24">
                        <h2 className="font-headline text-2xl font-bold mb-4">Key Highlights</h2>
                        <ul className="space-y-3">
                        {study.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <p className="text-muted-foreground">{highlight}</p>
                            </li>
                        ))}
                        </ul>
                    </div>
                </aside>
                <div className="md:col-span-3 prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: study.content }}>
                </div>
              </div>
              
              <div className="text-center mt-16">
                <Button asChild>
                    <Link href="/case-studies">← Back to Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
