"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Briefcase } from "lucide-react";
import Image from "next/image";

const menuItems = [
  {
    label: "Portfolio",
    href: "#portfolio",
    isMega: true,
    megaContent: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <div>
          <h3 className="font-headline text-lg text-primary mb-2">Case Studies</h3>
          <MegaMenuItem href="#" title="Project Phoenix" description="Redefining e-commerce." image="/images/placeholder-100x75.png" hint="ecommerce" />
          <MegaMenuItem href="#" title="Innovate OS" description="A new mobile frontier." image="/images/placeholder-100x75.png" hint="mobile" />
          <MegaMenuItem href="#" title="DataViz Pro" description="Empowering data analysts." image="/images/placeholder-100x75.png" hint="dashboard" />
        </div>
        <div>
          <h3 className="font-headline text-lg text-primary mb-2">Featured Work</h3>
          <ul>
            <li><Link href="#" className="block p-2 rounded-md hover:bg-accent/50">Enterprise Design System</Link></li>
            <li><Link href="#" className="block p-2 rounded-md hover:bg-accent/50">Fintech Mobile App</Link></li>
            <li><Link href="#" className="block p-2 rounded-md hover:bg-accent/50">AI Analytics Dashboard</Link></li>
          </ul>
        </div>
        <div className="bg-accent/20 rounded-lg p-6 flex flex-col justify-center items-center text-center">
            <Briefcase className="w-10 h-10 text-primary mb-2"/>
            <h4 className="font-headline text-lg mb-2">My Full Portfolio</h4>
            <p className="text-sm text-muted-foreground mb-4">Explore a comprehensive collection of my work.</p>
            <Button variant="outline" size="sm">View All Projects</Button>
        </div>
      </div>
    ),
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "#about" },
];

function MegaMenuItem({href, title, description, image, hint}: {href:string, title: string, description: string, image: string, hint:string}) {
  return (
    <Link href={href} className="flex items-center gap-4 p-2 rounded-md hover:bg-accent/50">
      <Image src={image} alt={title} width={80} height={60} className="rounded-md" data-ai-hint={hint} />
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/profile2.png" alt="Aminul Islam" width={32} height={32} className="h-8 w-8 rounded-full" />
          <span className="font-headline text-xl font-bold"></span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {menuItems.map((item) =>
            item.isMega ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-base">{item.label}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[600px] bg-background border-primary/20">
                  {item.megaContent}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button key={item.label} variant="ghost" asChild className="text-base">
                <Link href={item.href}>{item.label}</Link>
              </Button>
            )
          )}
        </nav>
        <div className="hidden md:block">
          <Button>Hire Me</Button>
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
                <Button className="mt-4">Hire Me</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// NOTE: DropdownMenu and DropdownMenuContent seem to be missing from imports.
// This might be intentional if they are globally available.
// If not, they should be imported from "@/components/ui/dropdown-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
