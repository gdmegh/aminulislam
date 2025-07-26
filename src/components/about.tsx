
import { Award, Briefcase, Download, Lightbulb } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const timelineData = [
  {
    icon: Briefcase,
    year: "2019 - Present",
    title: "Lead Product Designer @ Dream71 Bangladesh Ltd.",
    description: "Leading design for flagship products, mentoring a team of designers, and spearheading the development of our cross-platform design system.",
  },
  {
    icon: Briefcase,
    year: "2015 - 2019",
    title: "UX Designer @ nazdaqTechnologies Inc.",
    description: "Designed and launched several high-impact features for a suite of B2B SaaS applications, focusing on data visualization and user workflow optimization.",
  },
];

const certificationData = [
    {
        icon: Award,
        title: "Google UX Design Professional Certificate",
        issuer: "Google",
    },
    {
        icon: Award,
        title: "Product Ideation, Design and Management",
        issuer: "University of Maryland",
    }
]

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="rounded-lg shadow-xl overflow-hidden">
                <Image 
                    src="/images/aminulislamprofile.jpeg"
                    alt="Designer at work"
                    width={600}
                    height={750}
                    data-ai-hint="designer working"
                    className="w-full h-auto object-cover"
                />
            </div>
          </div>
          
          <div>
            <div className="max-w-4xl mb-16">
              <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">Career Journey</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                A passionate designer with a decade of experience crafting intuitive, beautiful, and impactful digital experiences. Here is a brief overview of my journey.
              </p>
            </div>

            <div className="relative">
                <div className="absolute left-4 top-12 h-[calc(100%-3rem)] w-0.5 bg-border -z-10" aria-hidden="true"></div>
                {timelineData.map((item, index) => (
                <div key={index} className="relative pl-12 pb-12">
                    <div className="absolute left-0 top-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20">
                        <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    </div>
                    <div className="pl-4">
                    <p className="text-sm text-primary font-semibold">{item.year}</p>
                    <h3 className="font-headline text-xl font-semibold mt-1">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>

            <div className="mt-8">
                <h3 className="font-headline text-3xl font-bold mb-8">Certificates & Specializations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certificationData.map((cert, index) => (
                        <div key={index} className="bg-card p-6 rounded-lg shadow-md flex items-center gap-4 border border-primary/10">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                                <cert.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-headline text-lg font-semibold">{cert.title}</h4>
                                <p className="text-muted-foreground">{cert.issuer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12">
                 <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
