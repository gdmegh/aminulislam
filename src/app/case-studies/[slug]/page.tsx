import Footer from '@/components/footer';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
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
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="font-headline text-3xl font-bold mb-4">Executive Summary</h2>
          <p>Modernizing government licensing portals is crucial for improving public service. State and local governments face challenges like funding shortfalls, legacy systems, and fragmented data, leading to inefficiencies and user frustration. This case study explores the redesign of such a portal, emphasizing user-centric design, robust technology, regulatory compliance, and strategic project management. Successful initiatives, like Kansas City's CompassKC, demonstrate that effective redesign involves re-engineering processes, ensuring universal accessibility, and continuous improvement. The goal is to achieve faster processing, cost savings, increased revenue, and enhanced citizen satisfaction.</p>
        </div>
        <div>
          <h3 class="font-headline text-2xl font-bold mt-8 mb-4">1. Introduction: The Imperative for Modernization</h3>
          <p>Citizens expect government services to be as efficient as commercial platforms. However, public sector digital services often struggle with inadequate funding (a top challenge for 93% of states), agency-centric organization of services (73% of states), and outdated, siloed IT infrastructure. Digital accessibility is also a significant hurdle due to the vast and diverse content, reliance on third-party applications, and the complexity of achieving full WCAG 2.1 A/AA compliance. "Seamless public access" means an intuitive, user-friendly experience that builds trust, caters to diverse users, and offers a "one-stop shop" for services.</p>
        </div>
        <div>
          <h3 class="font-headline text-2xl font-bold mt-8 mb-4">2. Case Study Spotlight: Kansas City's CompassKC</h3>
          <p>Kansas City, Missouri's CompassKC platform serves as a prime example of successful licensing portal transformation.</p>
          <h4 class="font-headline text-xl font-bold mt-6 mb-3">2.1 Addressing Pre-Existing Barriers</h4>
          <p>Before CompassKC, obtaining licenses and permits was cumbersome, requiring manual document gathering from various city offices, leading to delays and frustration for businesses. Some small businesses faced years of delays and significant fees.</p>
          <h4 class="font-headline text-xl font-bold mt-6 mb-3">2.2 Key Features and Implementation</h4>
          <p>CompassKC was launched as a centralized "one-stop shop" for business licensing and permitting, unifying city departments to reduce duplication and accelerate approvals. Key features include:</p>
          <ul class="list-disc list-inside space-y-2 mt-4 pl-4">
            <li>Comprehensive services for various permits (e.g., streetcar track access, block party, excavation) and contractor/professional licenses.</li>
            <li>Direct online submissions and real-time application status tracking.</li>
            <li>Written guides, video tutorials, and robust search functionality.</li>
            <li>Digital flagging of missing information and automated updates to applicants.</li>
            <li>Centralization and automation of repetitive workflows.</li>
          </ul>
          <h4 class="font-headline text-xl font-bold mt-6 mb-3">2.3 Quantifiable Impacts</h4>
          <p>CompassKC yielded substantial benefits:</p>
          <ul class="list-disc list-inside space-y-2 mt-4 pl-4">
            <li><strong>Reduced Walk-ins:</strong> Within a year, the planning department processed over 21,000 permits and reduced walk-in visitors by over 2,400 compared to previous years.</li>
            <li><strong>Increased Efficiency:</strong> Staff managed workloads more efficiently, and a shared payment system minimized processing delays.</li>
            <li><strong>Faster Permitting:</strong> Digitalization can reduce processing time by 30%, with average permit issuance time potentially dropping from 168 days to under 114 days.</li>
            <li><strong>Increased Revenue:</strong> Centralized digital processes can increase government revenues from licensing by 25-30% and property tax collection by 16.5%.</li>
            <li><strong>Reduced Corruption:</strong> Digital systems have shown significant reductions in bribe requests (74% by municipal agents, 85% by third parties in one case).</li>
            <li><strong>Pennsylvania's PA.gov:</strong> Modernization efforts in Pennsylvania reduced corporate filing times from 8 weeks to 2 days and small business certification times by 33%.</li>
          </ul>
        </div>
        <div>
            <h3 class="font-headline text-2xl font-bold mt-8 mb-4">3. User-Centric Design</h3>
            <p class="mb-4">Successful government portals prioritize user needs, accessibility, and trust.</p>
            <ul class="list-disc list-inside space-y-2 mt-4 pl-4">
              <li><strong>Real User Needs:</strong> Involve users from the start, testing assumptions and features iteratively to ensure usefulness. Cater to diverse audiences, including those with disabilities, multilingual users, and varying literacy levels.</li>
              <li><strong>Accessibility and Trust:</strong> Go beyond legal compliance (e.g., Revised 508 Standards, WCAG 2.1) to ensure usability for all. Build trust through reliability, consistency, and honesty, using official domains (.gov, HTTPS) and transparent data management.</li>
              <li><strong>Mobile Responsiveness and Continuity:</strong> Design for seamless functionality on mobile devices. Ensure consistent experiences across services, platforms, and devices, allowing users to track progress and save data for multi-session tasks. Continuously collect and analyze user feedback to drive improvements.</li>
            </ul>
        </div>
        <div>
            <h3 class="font-headline text-2xl font-bold mt-8 mb-4">4. Technological Foundations</h3>
            <p class="mb-4">A robust and integrated technological architecture is essential.</p>
            <ul class="list-disc list-inside space-y-2 mt-4 pl-4">
              <li><strong>Overcoming Legacy Systems:</strong> Implement a strong integration architecture to manage data flows between diverse systems, breaking down silos and enabling real-time information exchange and automation.</li>
              <li><strong>Cloud and AI/ML:</strong> Adopt a cloud-first approach for scalable and resilient infrastructure. Leverage AI/ML for intelligent automation, such as automatic verification and eligibility checks, by treating data as a strategic product.</li>
              <li><strong>Secure Submissions and Payments:</strong> Utilize official.gov domains and HTTPS for secure document submission. For payments, prioritize electronic methods like ACH, adhere to PCI DSS compliance, and conduct thorough comparative analysis of payment gateways. Avoid volatile options like cryptocurrency.</li>
            </ul>
        </div>
        <div>
            <h3 class="font-headline text-2xl font-bold mt-8 mb-4">5. Navigating the Regulatory Landscape</h3>
            <p class="mb-4">Strict adherence to data security, privacy, and compliance is paramount.</p>
            <ul class="list-disc list-inside space-y-2 mt-4 pl-4">
                <li><strong>US Data Protection Laws:</strong> Navigate the complex patchwork of federal (e.g., Privacy Act of 1974, HIPAA, COPPA) and state privacy laws (e.g., CCPA). Design with privacy-by-design principles, allowing users to exercise rights like access, rectification, and deletion.</li>
                <li><strong>Federal Cybersecurity Frameworks:</strong> Implement and continuously monitor frameworks like NIST Cybersecurity Framework 2.0, FISMA, and FedRAMP. This includes categorizing systems by risk, developing security plans, implementing controls, and continuous monitoring. A "zero-trust" architecture is recommended.</li>
            </ul>
        </div>
        <div>
            <h3 class="font-headline text-2xl font-bold mt-8 mb-4">6. Strategic Implementation: Project Governance and Change Management</h3>
            <p class="mb-4">Successful redesign requires strong project governance and proactive change management.</p>
            <ul class="list-disc list-inside space-y-2 mt-4 pl-4">
                <li><strong>Accountability and Stakeholder Engagement:</strong> Establish clear accountability with a single project leader and engage all stakeholders (citizens, businesses, internal departments) through consistent communication.</li>
                <li><strong>Organizational Change:</strong> Manage change by establishing clarity, communicating frequently, involving employees early, providing adequate training, highlighting benefits, and maintaining flexibility.</li>
                <li><strong>Defining Success (KPIs):</strong> Establish clear Key Performance Indicators (KPIs) from the outset, focusing on efficiency (e.g., completed processes, cost per interaction), engagement (e.g., active users, adoption rate, retention), and user experience (e.g., satisfaction ratings, page load speed, feedback). Continuously monitor these metrics to drive iterative improvements.</li>
            </ul>
        </div>
        <div>
            <h3 class="font-headline text-2xl font-bold mt-8 mb-4">Conclusion</h3>
            <p>Redesigning a government licensing portal is a transformative endeavor. By prioritizing user needs, leveraging modern technology, ensuring robust security and privacy, and implementing strategic project governance and change management, governments can achieve significant improvements. The success of initiatives like CompassKC demonstrates the potential for reduced burdens, cost savings, increased revenue, and enhanced public trust. This strategic approach sets a new standard for efficient and citizen-focused governance in the digital age.</p>
        </div>
        <div class="text-center bg-card p-8 rounded-lg">
            <h3 class="font-headline text-2xl font-bold">Download the Full Case Study</h3>
            <p class="text-muted-foreground mt-2 mb-6">For a comprehensive deep dive into this project, including detailed research, methodologies, and expanded analysis, please download the full PDF version of the case study.</p>
            <Button>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
            </Button>
        </div>
      </div>
    `
  },
  {
    title: "Building a Scalable Design System for a Growing Software Company",
    slug: "scalable-design-system",
    description: "Created a flexible and reusable design system from scratch to unify product interfaces across multiple platforms. Standardized UI components and interaction patterns, reducing design time by 60% and improving developer handoff efficiency.",
    image: "/images/placeholder-1200x800.png",
    hint: "design system components",
    content: `
      <div class="space-y-16">
        <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div class="order-2 md:order-1">
            <h3 class="font-headline text-2xl font-bold mb-4">The Challenge: Fragmentation</h3>
            <p>As the company grew, its product suite became fragmented, with inconsistent user interfaces and duplicated design efforts. The goal was to create a single source of truth for design that would bring consistency to the user experience and accelerate the product development lifecycle.</p>
          </div>
          <div class="order-1 md:order-2 rounded-lg shadow-xl overflow-hidden">
            <Image src="https://placehold.co/800x600.png" alt="Fragmented UI examples" width={800} height={600} data-ai-hint="fragmented ui" class="w-full h-auto object-cover" />
          </div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div class="order-1">
             <h3 class="font-headline text-2xl font-bold mb-4">The Process: Audit & Unify</h3>
            <p>The project started with a comprehensive audit of all existing interfaces to identify common patterns and inconsistencies. From there, we established a set of core design principles and developed a robust library of reusable components, complete with accessibility guidelines. We created detailed documentation and conducted workshops to train designers and developers on how to effectively use the new system.</p>
          </div>
          <div class="order-2 rounded-lg shadow-xl overflow-hidden">
            <Image src="https://placehold.co/800x600.png" alt="Unified design components" width={800} height={600} data-ai-hint="design components" class="w-full h-auto object-cover" />
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
           <div class="order-2 md:order-1">
            <h3 class="font-headline text-2xl font-bold mb-4">The Outcome: Efficiency & Cohesion</h3>
            <p>The new design system successfully unified the look and feel of all products, creating a cohesive brand experience. It dramatically improved efficiency, reducing design and development time on new features by over 60%. The system is now the foundation for all new product development and continues to evolve with the company's needs.</p>
          </div>
          <div class="order-1 md:order-2 rounded-lg shadow-xl overflow-hidden">
            <Image src="https://placehold.co/800x600.png" alt="Cohesive brand experience" width={800} height={600} data-ai-hint="cohesive dashboard" class="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Optimizing the Onboarding Experience for a B2B SaaS Platform",
    slug: "saas-onboarding-experience",
    description: "Improved the onboarding flow of a complex B2B SaaS platform to reduce user drop-off and increase activation. By simplifying the UX, guiding users contextually, and introducing a progress-driven dashboard, conversion rates increased by 35%.",
    image: "/images/placeholder-1200x800.png",
    hint: "saas dashboard onboarding",
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
                 <p className="text-primary font-semibold mb-2">Case Study</p>
                <h1 className="font-headline text-4xl sm:text-5xl font-bold">{study.title}</h1>
              </div>

              {study.slug !== 'scalable-design-system' && (
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

              <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: study.content }}>
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
