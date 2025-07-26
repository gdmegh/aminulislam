
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, BotMessageSquare } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import ContactModal from "./contact-modal";

const menuItems: { label: string, href: string }[] = [];


export default function Header() {
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setShowStickyButton(true);
      } else {
        setShowStickyButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between relative">
        <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center gap-2">
                <Image src="/images/profile2.png" alt="Aminul Islam" width={32} height={32} className="h-8 w-8 rounded-full" />
                <span className={`font-headline text-xl font-bold transition-opacity duration-300 ${showStickyButton ? 'opacity-100' : 'opacity-0'}`}>Aminul Islam</span>
            </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {menuItems.map((item) =>
            <Button key={item.label} variant="ghost" asChild className="text-base">
                <Link href={item.href}>{item.label}</Link>
            </Button>
          )}
        </nav>

        <div className="flex-1 flex justify-end">
            <div className="hidden md:block">
            {showStickyButton && (
                <ContactModal>
                    <Button>
                        Let's Talk
                        <BotMessageSquare className="ml-2 h-5 w-5" />
                    </Button>
                </ContactModal>
            )}
            </div>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <nav className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                 {showStickyButton && (
                     <ContactModal>
                        <Button className="mt-4">
                            Let's Talk
                            <BotMessageSquare className="ml-2 h-5 w-5" />
                        </Button>
                    </ContactModal>
                 )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
