import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: <Mail className="text-matrix" size={24} />,
      label: "Email",
      value: "anujomer111@gmail.com",
      href: "mailto:anujomer111@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: <Phone className="text-matrix" size={24} />,
      label: "Phone", 
      value: "+91 8127902535",
      href: "tel:+918127902535",
      description: "Let's have a quick chat"
    },
    {
      icon: <MapPin className="text-matrix" size={24} />,
      label: "Location",
      value: "India",
      href: "#",
      description: "Available for remote work"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com/ANUJOMER21",
      description: "Check out my code"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/anuj_omer",
      description: "Let's connect professionally"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    const mailtoLink = `mailto:anujomer111@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-terminal-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="terminal-prompt text-matrix">connect</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-matrix mx-auto rounded"></div>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto px-4">
            Ready to collaborate? Let's build something awesome together. 
            I'm always excited to discuss new opportunities and innovative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="fade-in-up">
              <h3 className="text-2xl font-bold text-matrix mb-6">
                <span className="terminal-prompt">Get in Touch</span>
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="bg-terminal-elevated border-matrix/30 glow-border hover:shadow-glow transition-all duration-300 cursor-pointer"
                    onClick={() => info.href !== "#" && window.open(info.href, "_blank")}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-terminal-surface rounded-lg border border-matrix/30">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground">
                            {info.label}
                          </h4>
                          <p className="text-matrix font-mono">{info.value}</p>
                          <p className="text-muted-foreground text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="slide-in-right">
              <h3 className="text-xl font-bold text-matrix mb-4">
                <span className="terminal-prompt">Follow Me</span>
              </h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className="border-matrix/50 text-matrix hover:bg-matrix hover:text-terminal transition-all duration-300 hover:scale-110 transform"
                    onClick={() => window.open(social.href, "_blank")}
                  >
                    {social.icon}
                    <span className="ml-2 hidden sm:inline">{social.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Terminal Quote */}
            <div className="bg-terminal border border-matrix/30 rounded-lg p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-matrix"></div>
              </div>
              <div className="text-matrix-light space-y-1">
                <div><span className="text-matrix">anuj@portfolio:~$</span> echo $AVAILABILITY</div>
                <div className="text-accent">Available for exciting opportunities!</div>
                <div><span className="text-matrix">anuj@portfolio:~$</span> cat motto.txt</div>
                <div className="text-muted-foreground">"Let's code the future together!"</div>
                <div><span className="text-matrix">anuj@portfolio:~$</span> <span className="animate-pulse">_</span></div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-up">
            <Card className="bg-terminal border-matrix/30 glow-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-matrix mb-6">
                  <span className="terminal-prompt">Send Message</span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-matrix mb-2">
                      <span className="terminal-prompt">Name</span>
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your awesome name"
                      className="bg-terminal-surface border-matrix/30 text-foreground placeholder:text-muted-foreground focus:border-matrix"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-matrix mb-2">
                      <span className="terminal-prompt">Email</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@domain.com"
                      className="bg-terminal-surface border-matrix/30 text-foreground placeholder:text-muted-foreground focus:border-matrix"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-matrix mb-2">
                      <span className="terminal-prompt">Message</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your awesome project idea..."
                      rows={6}
                      className="bg-terminal-surface border-matrix/30 text-foreground placeholder:text-muted-foreground focus:border-matrix resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-matrix hover:bg-matrix-dark text-terminal font-semibold py-3 transition-all duration-300 hover:shadow-glow"
                  >
                    <Send className="mr-2" size={20} />
                    <span className="terminal-prompt">Send Message</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;