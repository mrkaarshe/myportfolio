import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              Let's Connect
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:kaarshe@example.com"
                  className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border hover:border-primary/50 transition-all group hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-medium text-foreground">odaykaarshe@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="tel:+0000000000"
                  className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border hover:border-primary/50 transition-all group hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="font-medium text-foreground">+252 611 011973</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="font-medium text-foreground">mogadishu somalia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <p className="text-muted-foreground mb-6 text-sm">Follow me on social media for updates and insights</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/mrkaarshe?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-14 bg-background/80 rounded-xl border border-border hover:border-primary/50 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/10 transition-all group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/eng-kaarshe-51611b387/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-14 bg-background/80 rounded-xl border border-border hover:border-primary/50 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/10 transition-all group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg space-y-6 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                Your Name
              </label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/80 border-border focus:border-primary/50 h-12"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                Your Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/80 border-border focus:border-primary/50 h-12"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                Your Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-background/80 border-border focus:border-primary/50 resize-none"
              />
            </div>
            
            <Button type="submit" className="w-full group" size="lg" variant="hero">
              Send Message
              <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
