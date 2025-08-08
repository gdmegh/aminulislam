import { Award, Briefcase, Download, Lightbulb } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import MazeBackground from "./maze-background";

const timelineData = [
  {
    icon: Briefcase,
    year: "2019 - Present",
    title: "UI/UX Specialist, Product Designer @ Dream71 Bangladesh Ltd.",
    description: "Leading design for flagship products, mentoring a team of designers, and spearheading the development of our cross-platform design system.",
  },
  {
    icon: Briefcase,
    year: "2015 - 2019",
    title: "Web/Graphic Designer @ nazdaqTechnologies Inc.",
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
    <section id="about" className="relative overflow-hidden bg-background py-12">
      <div className="absolute inset-0 z-0">
        <MazeBackground />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div className="lg:col-span-1">
            <div className="max-w-4xl mb-12">
              <h2 className="font-headline text-4xl font-bold text-primary sm:text-5xl">My Career Journey</h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                A passionate designer with a decade of experience crafting intuitive, beautiful, and impactful digital experiences. Here is a brief overview of my journey.
              </p>
            </div>

            <div className="relative">
                <div className="absolute left-4 top-12 h-[calc(100%-3rem)] w-0.5 bg-border -z-10" aria-hidden="true"></div>
                {timelineData.map((item, index) => (
                <div key={index} className="relative pl-12 pb-8">
                    <div className="absolute left-0 top-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                        <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    </div>
                    <div className="pl-4">
                    <p className="text-sm font-semibold text-primary">{item.year}</p>
                    <h3 className="font-headline mt-1 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>

            <div className="mt-8">
                <h3 className="font-headline mb-8 text-3xl font-bold">Certificates & Specializations</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {certificationData.map((cert, index) => (
                        <div key={index} className="flex items-center gap-4 rounded-lg border border-primary/10 bg-card p-6 shadow-md">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                <cert.icon className="h-6 w-6 text-primary" />
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
                 <Button asChild>
                    <a href="/images/Aminul Islam-Resume.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                    </a>
                </Button>
            </div>
          </div>
          <div className="lg:sticky lg:top-24 lg:col-span-1">
            <div className="mx-auto max-w-md overflow-hidden rounded-lg shadow-xl">
                <Image 
                    src="/images/gd.JPEG"
                    alt="Designer at work"
                    width={600}
                    height={750}
                    role="img"
                    data-ai-hint="designer working"
                    className="h-auto w-full object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
