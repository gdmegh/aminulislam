
import Link from "next/link";
import { Button } from "./ui/button";
import { Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Image src="/images/profile2.png" alt="AI Megh" width={32} height={32} className="h-8 w-8 rounded-full" role="img" />
            <span className="font-headline text-xl font-bold">AI Megh</span>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/gdmegh/" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Megh. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
