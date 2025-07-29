
import Image from "next/image";
import DynamicText from "./dynamic-text";
import { Button } from "./ui/button";
import { ArrowDown, BotMessageSquare } from "lucide-react";
import ContactModal from "./contact-modal";
import StarsBackground from "./stars-background";

export default function Hero() {
  return (
    <section 
      className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-center overflow-hidden"
    >
      <StarsBackground />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2">I'm</p>
          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-balance">
            Aminul Islam<br /><DynamicText />
          </h1>
          <ContactModal>
            <Button size="lg" className="mt-8 px-10 py-6 text-lg">
              Let's Talk
              <BotMessageSquare className="ml-2 h-5 w-5" />
            </Button>
          </ContactModal>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ArrowDown className="w-6 h-6 animate-bounce text-primary" />
      </div>
    </section>
  );
}
