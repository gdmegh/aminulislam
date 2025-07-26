import Image from "next/image";
import DynamicText from "./dynamic-text";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] -translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg mb-6">
            <Image
              src="https://placehold.co/200x200.png"
              alt="Portrait of the designer"
              width={200}
              height={200}
              data-ai-hint="portrait designer"
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-balance">
            Designing Experiences, <br/>
            <span className="text-primary">Engineering Emotions.</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground h-8">
            I am a <DynamicText />
          </p>
          <div className="mt-10 flex gap-4">
            <Button size="lg" asChild>
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-6 h-6 animate-bounce text-primary" />
      </div>
    </section>
  );
}
