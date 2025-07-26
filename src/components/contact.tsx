import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-primary/20 shadow-xl shadow-primary/10">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary">Get in Touch</CardTitle>
            <CardDescription className="text-lg mt-2">
              Have a project in mind or just want to say hello? Drop me a line.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input id="name" placeholder="Your Name" className="bg-background"/>
                </div>
                <div className="space-y-2">
                  <Input id="email" type="email" placeholder="Your Email" className="bg-background"/>
                </div>
              </div>
              <div className="space-y-2">
                <Input id="subject" placeholder="Subject" className="bg-background"/>
              </div>
              <div className="space-y-2">
                <Textarea id="message" placeholder="Your Message" rows={5} className="bg-background"/>
              </div>
              <Button type="submit" className="w-full text-lg py-6" size="lg">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
