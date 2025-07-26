
import Image from "next/image";
import DynamicText from "./dynamic-text";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -bottom-[95%] left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] max-w-[1200px] bg-primary/80 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2">I'm</p>
          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-balance">
            Aminul Islam<br /><DynamicText />
          </h1>
          <Button size="lg" className="mt-8">Let's Talk Your Idea</Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-6 h-6 animate-bounce text-primary" />
      </div>
    </section>
  );
}
