import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "Code Wizard",
    "AI Enthusiast", 
    "Android Developer",
    "Data Scientist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-terminal relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="code-scroll h-full w-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="fade-in-up">
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-matrix matrix-flicker">Anuj</span>
          </h1>

          {/* Animated title */}
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 h-8 sm:h-10 md:h-12 flex items-center justify-center">
            <span className="text-muted-foreground terminal-prompt">
              {titles[currentTitle]}
            </span>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed px-4">
            Hacking together epic Android apps and AI-powered solutions since 2020.
            Armed with a passion for clean code and innovative solutions.
          </p>

          {/* Terminal Welcome - Moved below description */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <div className="bg-terminal-surface border border-matrix/30 rounded-lg p-4 sm:p-6 text-left font-mono text-xs sm:text-sm max-w-sm sm:max-w-md lg:max-w-lg mx-auto shadow-lg">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-matrix"></div>
              </div>
              <div className="text-matrix-light space-y-1">
                <div className="break-all">
                  <span className="text-matrix">anuj@portfolio:~$</span> whoami
                </div>
                <div className="text-foreground">Anuj Omer</div>
                <div className="break-all">
                  <span className="text-matrix">anuj@portfolio:~$</span> cat skills.txt
                </div>
                <div className="text-muted-foreground break-words">[Kotlin, Python, AI, Android, Data Science]</div>
                <div className="break-all">
                  <span className="text-matrix">anuj@portfolio:~$</span> echo $STATUS
                </div>
                <div className="text-accent">Ready to code the future!</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 lg:mb-12 px-4">
            <Button 
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-matrix hover:bg-matrix-dark text-terminal font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg glow-border hover:shadow-glow transition-all duration-300 focus:ring-2 focus:ring-matrix focus:ring-offset-2"
            >
              <span className="terminal-prompt">Let's Connect</span>
            </Button>
            
            <Button 
              variant="outline"
              onClick={scrollToAbout}
              className="w-full sm:w-auto border-matrix text-matrix hover:bg-matrix hover:text-terminal px-6 sm:px-8 py-3 text-base sm:text-lg transition-all duration-300 focus:ring-2 focus:ring-matrix focus:ring-offset-2"
            >
              <span className="terminal-prompt">Explore</span>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
            <a 
              href="https://github.com/ANUJOMER21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-matrix transition-colors duration-300 hover:scale-110 transform focus:outline-none focus:ring-2 focus:ring-matrix"
            >
              <Github size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a 
              href="https://www.linkedin.com/in/anuj_omer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-matrix transition-colors duration-300 hover:scale-110 transform focus:outline-none focus:ring-2 focus:ring-matrix"
            >
              <Linkedin size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a 
              href="mailto:anujomer111@gmail.com"
              className="text-muted-foreground hover:text-matrix transition-colors duration-300 hover:scale-110 transform focus:outline-none focus:ring-2 focus:ring-matrix"
            >
              <Mail size={24} className="sm:w-7 sm:h-7" />
            </a>
          </div>
        </div>

        {/* Scroll indicator - Better positioned for mobile */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-matrix w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;