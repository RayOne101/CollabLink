import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 px-6 md:px-12 bg-background border-t border-border">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">Contact Us</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions or want to get in touch? Fill out the form below.
        </p>
        <form className="space-y-6 text-left">
          <div className="flex flex-col md:flex-row gap-4">
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
          </div>
          <Textarea placeholder="Your Message" rows={5} required />
          <Button type="submit" className="w-full md:w-auto">Send Message</Button>
        </form>
        <div className="flex justify-center gap-6 pt-6">
          <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary"><Mail size={24} /></a>
          <a href="#" className="text-muted-foreground hover:text-primary"><Twitter size={24} /></a>
          <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={24} /></a>
          <a href="#" className="text-muted-foreground hover:text-primary"><Instagram size={24} /></a>
        </div>
      </div>
    </section>
  );
} 