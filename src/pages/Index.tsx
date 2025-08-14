import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Main content */}
      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
          <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Alex Developer
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-delay max-w-2xl mx-auto">
          Frontend Developer passionate about creating beautiful, 
          <span className="text-primary font-semibold"> responsive web experiences</span> with 
          modern technologies and clean code.
        </p>
        
        <div className="fade-in-delay-2">
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-8 py-6 rounded-xl font-semibold"
          >
            View My Projects
          </Button>
        </div>
        
        {/* Skills badges */}
        <div className="mt-12 fade-in-delay-2">
          <p className="text-muted-foreground mb-4">Specialized in</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js"].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-card/50 border border-border rounded-full text-sm font-medium backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;