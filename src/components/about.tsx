import { Award, Briefcase, Download, GraduationCap, Lightbulb } from "lucide-react";
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

const educationData = [
    {
        icon: GraduationCap,
        degree: "Masters in Political Science",
        institution: "National University, Bangladesh",
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
    },
     {
        icon: Award,
        title: "Fast Track Future Leaders (FTFL) in Blockchain",
        issuer: "LICT, ICT Division, Bangladesh",
    }
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 sm:py-24">
      <div className="absolute inset-0 z-0">
        <MazeBackground />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="max-w-4xl mb-12">
              <h2 className="font-headline text-4xl font-bold text-primary sm:text-5xl">A Journey Through Design and Continuous Learning</h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                With a decade of experience, I am a passionate designer dedicated to crafting digital experiences that are intuitive, beautiful, and impactful. My journey is one of constant growth, blending creative design with a commitment to lifelong learning.
              </p>
            </div>

            <div className="relative pl-4">
                <div className="absolute left-8 top-12 h-[calc(100%-3rem)] w-0.5 bg-border -z-10" aria-hidden="true"></div>
                {timelineData.map((item, index) => (
                <div key={index} className="relative pl-12 pb-12 group">
                    <div className="absolute left-0 top-0 transform-none transition-transform duration-300 group-hover:scale-110">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-card border-2 border-primary/10 shadow-md">
                            <item.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-6" />
                        </div>
                    </div>
                    <div className="pl-6">
                        <p className="text-sm font-semibold text-primary">{item.year}</p>
                        <h3 className="font-headline mt-1 text-xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
            
            <div className="mt-12">
                <h3 className="font-headline mb-8 text-3xl font-bold">Education & Certifications</h3>
                 <div className="space-y-8">
                    {educationData.map((edu, index) => (
                        <div key={index} className="group flex items-center gap-4 rounded-lg border border-transparent bg-card p-6 shadow-md transition-all hover:border-primary/20 hover:shadow-xl">
                            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-105">
                                <edu.icon className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-headline text-xl font-semibold">{edu.degree}</h4>
                                <p className="text-muted-foreground">{edu.institution}</p>
                            </div>
                        </div>
                    ))}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {certificationData.map((cert, index) => (
                            <div key={index} className="group flex items-center gap-4 rounded-lg border border-transparent bg-card p-6 shadow-md transition-all hover:border-primary/20 hover:shadow-xl">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-105">
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
            </div>


            <div className="mt-16">
                 <Button asChild size="lg" className="group">
                    <a href="/images/Aminul Islam-Resume.pdf" download>
                        <Download className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                        Download Resume
                    </a>
                </Button>
            </div>
          </div>
          <div className="lg:sticky lg:top-24 lg:col-span-2">
            <div className="mx-auto max-w-md overflow-hidden rounded-lg shadow-2xl transition-all duration-300 hover:shadow-primary/20">
                <Image 
                    src="/images/gd.JPEG"
                    alt="Aminul Islam, Product Designer"
                    width={600}
                    height={750}
                    role="img"
                    data-ai-hint="designer working"
                    className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
