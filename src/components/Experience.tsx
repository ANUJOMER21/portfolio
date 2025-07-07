import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Associate Software Developer",
      company: "Constems-AI",
      duration: "July 2024 - Present",
      type: "Full-time",
      tasks: [
        "Squashed critical mobile app bugs, boosting auditing system performance and reliability.",
        "Dug through logs, built a custom logging system, and refactored SDK to MVVM for epic maintainability.", 
        "Crafted a TensorFlow-based SKU detection model for Android.",
        "Pushed AI-driven apps with Kotlin, Java, Python, and shell scripting wizardry."
      ],
      technologies: ["Kotlin", "TensorFlow", "Android", "Python", "MVVM"]
    },
    {
      title: "Application Developer Internship",
      company: "Constems-AI", 
      duration: "June 2023 - June 2024",
      type: "Internship",
      tasks: [
        "Fixed image upload glitches, ported Java to Kotlin, and leveled up UI with ViewBinding.",
        "Streamlined audit process with image capture and preview overlay features.",
        "Built a Python Flask app for custom APK generation with client-specific API endpoints.",
        "Hooked up Firebase Crashlytics for ninja-level crash reporting."
      ],
      technologies: ["Kotlin", "Java", "Python", "Flask", "Firebase", "ViewBinding"]
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-terminal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="terminal-prompt text-matrix">history</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-matrix mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative mb-12 last:mb-0 fade-in-up"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-matrix/30 hidden md:block"></div>
              )}
              
               <Card className="bg-terminal-surface border-matrix/30 glow-border hover:shadow-glow transition-all duration-300 ml-0 md:ml-16">
                <CardContent className="p-4 sm:p-6">
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-8 w-4 h-4 bg-matrix rounded-full border-2 border-terminal hidden md:block"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-matrix mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground text-sm sm:text-base">
                        <div className="flex items-center gap-2">
                          <Briefcase size={14} className="text-matrix" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-matrix" />
                          <span className="text-xs sm:text-sm">{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="border-matrix text-matrix w-fit text-xs sm:text-sm"
                    >
                      {exp.type}
                    </Badge>
                  </div>

                  {/* Tasks */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 terminal-prompt">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                          <span className="text-matrix mt-1 text-xs sm:text-sm flex-shrink-0">{'>'}</span>
                          <span className="leading-relaxed">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-matrix mb-2 terminal-prompt">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          className="text-xs bg-terminal-elevated border-matrix/50 text-matrix-light hover:bg-matrix hover:text-terminal transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;