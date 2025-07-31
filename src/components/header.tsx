
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, BotMessageSquare, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import ContactModal from "./contact-modal";
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import { caseStudies } from "@/lib/case-studies";
import React from "react";


const menuItems = [
  { label: 'About', href: '/#about' },
];

export default function Header() {
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Sticky "Let's Talk" button logic
      if (window.scrollY > window.innerHeight * 0.9) {
        setShowStickyButton(true);
      } else {
        setShowStickyButton(false);
      }

      // Active section highlighting logic
      if (pathname === '/') {
        const sections = ['about', 'portfolio'];
        let currentSection = '';
        
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);
          if (section) {
             const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
              currentSection = sectionId;
              break;
            }
          }
        }
        setActiveSection(currentSection);

      } else {
         setActiveSection(pathname.includes('/portfolio') ? 'portfolio' : '');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between relative">
        <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center gap-2 whitespace-nowrap">
                <Image src="/images/profile2.png" alt="Aminul Islam" width={32} height={32} className="h-8 w-8 rounded-full" role="img" />
                <span className={`font-headline text-xl font-bold transition-opacity duration-300`}>Aminul Islam</span>
            </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {menuItems.map((item) =>
            <Button key={item.label} variant="ghost" asChild className={`text-base ${activeSection === item.href.substring(2) ? 'text-primary' : ''}`}>
                <Link href={item.href}>{item.label}</Link>
            </Button>
          )}

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`text-base bg-transparent ${activeSection === 'portfolio' ? 'text-primary' : ''}`}>
                  <Link href="/#portfolio">Portfolio</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {caseStudies.map((study) => (
                      <ListItem
                        key={study.title}
                        title={study.title}
                        href={`/portfolio/${study.slug}`}
                      >
                        {study.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-lg font-medium hover:text-primary transition-colors ${activeSection === item.href.substring(2) ? 'text-primary' : ''}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/#portfolio"
                  className={`text-lg font-medium hover:text-primary transition-colors ${activeSection === 'portfolio' ? 'text-primary' : ''}`}
                >
                  Portfolio
                </Link>
                 <div className="mt-4">
                  <ContactModal>
                      <Button className="w-full">
                          Let's Talk
                          <BotMessageSquare className="ml-2 h-5 w-5" />
                      </Button>
                  </ContactModal>
                 </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
