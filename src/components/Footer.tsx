import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-terminal border-t border-matrix/30 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          {/* Terminal-style footer */}
          <div className="bg-terminal-surface border border-matrix/30 rounded-lg p-6 max-w-2xl mx-auto font-mono text-sm">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-matrix"></div>
            </div>
            <div className="text-matrix-light space-y-1">
              <div>
                <span className="text-matrix">anuj@portfolio:~$</span> echo "Thanks for visiting!"
              </div>
              <div className="text-accent">Thanks for visiting!</div>
              <div>
                <span className="text-matrix">anuj@portfolio:~$</span> date
              </div>
              <div className="text-muted-foreground">© {currentYear} Anuj Omer. All rights reserved.</div>
            </div>
          </div>

          {/* Made with love */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Made </span>
            <span>by Anuj Omer</span>
          </div>

          {/* Terminal quote */}
          <div className="text-matrix font-mono text-sm">
            <span className="terminal-prompt">Code runs the world.</span>
          </div>

          {/* Quick links */}
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <button 
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-matrix transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-matrix transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-matrix transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;