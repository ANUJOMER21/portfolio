import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Wealth Secret App",
      duration: "September 2023 - May 2024", 
      description: "Coded an Android app for real-time stock data, custom charts, mutual fund tracking, financial calculators, and learning resources. Backend powered by Python on PythonAnywhere with pandas, Flask, and market data APIs.",
      tech: ["Kotlin", "Android", "Python", "Flask", "Pandas", "Seaborn", "Matplotlib", "NSEIndia API", "Yahoo Finance API"],
      type: "Mobile App",
      highlights: ["Real-time data", "Custom charts", "Financial tools"]
    },
    {
      title: "Household Service Booking",
      duration: "November 2024 - December 2024",
      description: "Built a multi-user app with admin, user, and service provider roles. Added JWT auth, backend jobs for reminders, and a slick service provider dashboard with CSV exports.",
      tech: ["Vue.js", "Bootstrap", "Flask", "Flask Security/JWT", "Celery", "Redis", "SQLite"],
      type: "Web App",
      highlights: ["Multi-role system", "JWT Authentication", "Background jobs"]
    },
    {
      title: "Instagram Reel Clone", 
      duration: "December 2024 - January 2024",
      description: "Whipped up an Android Reels app with Jetpack Compose, Koin, Ktor, and MVVM architecture. Smooth UI and navigation FTW.",
      tech: ["Jetpack Compose", "Koin", "Ktor", "Jetpack Navigation", "MVVM"],
      type: "Mobile App",
      highlights: ["Modern UI", "Clean Architecture", "Smooth navigation"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Mobile App":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Web App":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-matrix/20 text-matrix border-matrix/30";
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-terminal-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="terminal-prompt text-matrix">projects</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-matrix mx-auto rounded"></div>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto px-4">
            Here are some of the exciting projects I've built, showcasing my skills across mobile and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-terminal-elevated border-matrix/30 glow-border hover:shadow-glow transition-all duration-300 group hover:-translate-y-2 fade-in-up h-full flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge className={`${getTypeColor(project.type)} text-xs font-medium`}>
                    {project.type}
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar size={14} />
                    <span className="text-xs">{project.duration}</span>
                  </div>
                </div>
                <CardTitle className="text-xl text-matrix group-hover:text-matrix-light transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-matrix mb-2 terminal-prompt">Key Features</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <Badge 
                        key={hIndex}
                        variant="outline"
                        className="text-xs border-matrix/50 text-matrix-light bg-terminal/50"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-matrix mb-2 terminal-prompt">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        className="text-xs bg-matrix/10 border-matrix/30 text-matrix-light hover:bg-matrix/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-matrix/50 text-matrix hover:bg-matrix hover:text-terminal transition-all duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm" 
                    className="flex-1 border-matrix/50 text-matrix hover:bg-matrix hover:text-terminal transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-terminal-elevated border border-matrix/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-matrix mb-4">
              <span className="terminal-prompt">Want to see more?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects and contributions to open source.
            </p>
            <Button 
              className="bg-matrix hover:bg-matrix-dark text-terminal font-semibold px-8 py-3"
              onClick={() => window.open("https://github.com/ANUJOMER21", "_blank")}
            >
              <Github className="mr-2" size={20} />
              <span className="terminal-prompt">View GitHub</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;