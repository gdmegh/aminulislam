import { Award, Briefcase, Download, Lightbulb } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const timelineData = [
  {
    icon: Briefcase,
    year: "2020 - Present",
    title: "Lead Product Designer @ TechGiant Inc.",
    description: "Leading design for flagship products, mentoring a team of designers, and spearheading the development of our cross-platform design system.",
  },
  {
    icon: Briefcase,
    year: "2017 - 2020",
    title: "Senior UX Designer @ Innovate Co.",
    description: "Designed and launched several high-impact features for a suite of B2B SaaS applications, focusing on data visualization and user workflow optimization.",
  },
  {
    icon: Lightbulb,
    year: "2015 - 2017",
    title: "UX/UI Designer @ Creative Solutions",
    description: "Worked on a variety of client projects, from mobile apps to e-commerce websites, honing skills in user research, wireframing, and visual design.",
  },
  {
    icon: Award,
    year: "2014",
    title: "Master's in HCI @ University of Design",
    description: "Graduated with honors, focusing on human-computer interaction, user-centered design principles, and usability testing methodologies.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="rounded-lg shadow-xl overflow-hidden">
                <Image 
                    src="https://placehold.co/600x750.png"
                    alt="Designer at work"
                    width={600}
                    height={750}
                    data-ai-hint="designer working"
                    className="w-full h-auto object-cover"
                />
            </div>
          </div>
          
          <div className="relative">
            <div className="max-w-4xl mb-16">
              <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">About Me</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                A passionate designer with a decade of experience crafting intuitive, beautiful, and impactful digital experiences. Here is a brief overview of my journey.
              </p>
            </div>

            <div className="absolute left-4 top-36 h-full w-0.5 bg-border -z-10" aria-hidden="true"></div>
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
            <div className="pl-16">
                 <Button className="w-full mt-8">
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