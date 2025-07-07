import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Smartphone, Brain, Award, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-matrix" size={24} />,
      skills: ["Python", "Kotlin", "Java", "JavaScript", "SQL", "HTML/CSS"],
      color: "blue"
    },
    {
      title: "Mobile Development", 
      icon: <Smartphone className="text-matrix" size={24} />,
      skills: ["Android", "Jetpack Compose", "Kotlin Multiplatform", "Compose Multiplatform", "MVVM", "Firebase"],
      color: "green"
    },
    {
      title: "AI & Data Science",
      icon: <Brain className="text-matrix" size={24} />,
      skills: ["Machine Learning", "Deep Learning", "TensorFlow", "Data Analysis", "Pandas", "Seaborn", "Matplotlib"],
      color: "purple"
    },
    {
      title: "Web Development",
      icon: <Terminal className="text-matrix" size={24} />,
      skills: ["Vue.js", "Flask", "REST APIs", "Bootstrap", "Celery", "Redis"],
      color: "orange"
    },
    {
      title: "Tools & Technologies",
      icon: <Database className="text-matrix" size={24} />,
      skills: ["Git", "Linux", "SQLite", "Firebase", "JWT", "Koin", "Ktor"],
      color: "cyan"
    }
  ];

  const certifications = [
    "Diploma in Programming, IIT Madras",
    "Diploma in Data Science, IIT Madras"
  ];

  const getSkillColor = (color: string) => {
    const colors = {
      blue: "bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20",
      green: "bg-green-500/10 border-green-500/30 text-green-400 hover:bg-green-500/20", 
      purple: "bg-purple-500/10 border-purple-500/30 text-purple-400 hover:bg-purple-500/20",
      orange: "bg-orange-500/10 border-orange-500/30 text-orange-400 hover:bg-orange-500/20",
      cyan: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20"
    };
    return colors[color as keyof typeof colors] || "bg-matrix/10 border-matrix/30 text-matrix hover:bg-matrix/20";
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-terminal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="terminal-prompt text-matrix">skills && certs</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-matrix mx-auto rounded"></div>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto px-4">
            My technical arsenal - the tools and technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-terminal-surface border-matrix/30 glow-border hover:shadow-glow transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      className={`${getSkillColor(category.color)} transition-all duration-300 cursor-pointer transform hover:scale-105`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-terminal-surface border-matrix/30 glow-border">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Award className="text-matrix" size={32} />
                  <h3 className="text-2xl font-bold text-matrix">
                    <span className="terminal-prompt">Certifications</span>
                  </h3>
                </div>
                <div className="w-16 h-1 bg-matrix mx-auto rounded"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-terminal-elevated border border-matrix/30 rounded-lg p-6 text-center hover:shadow-glow transition-all duration-300 slide-in-right"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-matrix text-2xl mb-2">🏆</div>
                    <p className="text-foreground font-medium leading-relaxed">
                      {cert}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-terminal-elevated border border-matrix/30 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="text-matrix font-mono text-sm md:text-base">
              <div className="mb-4">
                <span className="text-matrix">const</span> <span className="text-accent">skillsSummary</span> = {"{"}
              </div>
              <div className="ml-4 md:ml-8 space-y-2">
                <div><span className="text-matrix-light">totalSkills:</span> <span className="text-yellow-400">25+</span>,</div>
                <div><span className="text-matrix-light">yearsOfExperience:</span> <span className="text-yellow-400">2+</span>,</div>
                <div><span className="text-matrix-light">specialties:</span> <span className="text-yellow-400">["Android Development", "AI/ML", "Full Stack"]</span>,</div>
                <div><span className="text-matrix-light">currentlyLearning:</span> <span className="text-yellow-400">["Advanced AI", "Cloud Technologies", "DevOps"]</span>,</div>
                <div><span className="text-matrix-light">motto:</span> <span className="text-green-400">"Never stop learning, never stop coding"</span></div>
              </div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;