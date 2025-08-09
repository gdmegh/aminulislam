
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import MazeBackground from "./maze-background";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 sm:py-24">
      <div className="absolute inset-0 z-0">
        <MazeBackground />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="lg:col-span-1">
            <div className="max-w-4xl mb-12">
              <h2 className="font-headline text-4xl font-bold text-primary sm:text-5xl">A Journey Through Design and Continuous Learning</h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                With a decade of experience, I am a passionate designer dedicated to crafting digital experiences that are intuitive, beautiful, and impactful. My journey is one of constant growth, blending creative design with a commitment to lifelong learning.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                    <Link href="/about">
                        More About Me
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="group">
                    <a href="/images/Aminul Islam-Resume.pdf" download>
                        <Download className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                        Download Resume
                    </a>
                </Button>
            </div>
          </div>
          <div className="lg:col-span-1">
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
