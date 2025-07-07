import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Brain } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.S. Data Science and Applications",
      institution: "IIT Madras",
      duration: "2021 - 2025",
      cgpa: "6.3/10",
      icon: <Brain className="text-matrix" size={24} />,
    },
    {
      degree: "B.Tech Computer Science",
      institution: "Axis Institute, Kanpur",
      duration: "2020 - 2024",
      cgpa: "7/10", 
      icon: <Code className="text-matrix" size={24} />,
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-terminal-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="terminal-prompt text-matrix">whoami</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-matrix mx-auto rounded"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* About Text */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="fade-in-up">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-matrix font-semibold">Anuj Omer</span>, a code-crazed developer obsessed with building 
                slick Android apps and diving deep into AI. Armed with a B.S. in Data Science from 
                <span className="text-matrix font-semibold"> IIT Madras</span> and a B.Tech in Computer Science, 
                I live for solving gnarly problems with Kotlin, Python, and TensorFlow.
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                When I'm not debugging or training models, I'm dreaming up the next big app. 
                My passion lies in creating seamless user experiences while leveraging cutting-edge 
                technologies to solve real-world problems.
              </p>

              <div className="bg-terminal-elevated border border-matrix/30 rounded-lg p-4 sm:p-6">
                <div className="text-matrix font-mono text-xs sm:text-sm">
                  <div className="mb-2">
                    <span className="text-matrix">const</span> <span className="text-accent">developer</span> = {"{"}
                  </div>
                  <div className="ml-2 sm:ml-4 space-y-1">
                    <div className="break-words"><span className="text-matrix-light">name:</span> <span className="text-yellow-400">"Anuj Omer"</span>,</div>
                    <div className="break-words"><span className="text-matrix-light">expertise:</span> <span className="text-yellow-400">["Android", "AI", "Python", "Kotlin"]</span>,</div>
                    <div className="break-words"><span className="text-matrix-light">passion:</span> <span className="text-yellow-400">"Building the future"</span>,</div>
                    <div className="break-words"><span className="text-matrix-light">status:</span> <span className="text-green-400">"Available for collaboration"</span></div>
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Cards */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-matrix mb-2">
                <GraduationCap className="inline mr-2" size={24} />
                Education
              </h3>
            </div>

            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="bg-terminal-elevated border-matrix/30 glow-border hover:shadow-glow transition-all duration-300 slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{edu.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-matrix-light font-medium mb-1">
                        {edu.institution}
                      </p>
                      <div className="flex justify-between items-center text-muted-foreground">
                        <span>{edu.duration}</span>
                        <span className="text-matrix font-mono">CGPA: {edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Certifications */}
            <Card className="bg-terminal-elevated border-matrix/30 glow-border">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-matrix mb-4">
                  <span className="terminal-prompt">Certifications</span>
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="text-matrix">{'>'}</span>
                    <span>Diploma in Programming, IIT Madras</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-matrix">{'>'}</span>
                    <span>Diploma in Data Science, IIT Madras</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;