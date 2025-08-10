import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            Full-Stack Developer | Tech Enthusiast | Creative Problem-Solver
            </h3>

            <p className="text-muted-foreground">
       Hi, I’m Khushi Goyal — part software engineer, part problem-solver, part “let’s see what happens if I press this button.” 
      I recently wrapped up my Master’s in Computer Science at USC, where I dove deep into algorithms, machine learning, and building systems that don’t just work, but work really well.

            </p>

            <p className="text-muted-foreground">

When I’m not turning coffee into code, you’ll find me experimenting with side projects (sometimes they work… sometimes they break spectacularly), hunting for the perfect user interface, or trying to optimise everyday life like it’s a hackathon. 
I’ve built everything from fantasy baseball websites to real-time stock trading platforms, and 
I love collaborating to make technology more intuitive, accessible, and impactful.
Outside of tech, I’m equally passionate about exploring new places, binge-watching romcoms, dabbling in photography, and perfecting my pasta recipes.
I believe good software should feel like a good story — engaging, seamless, and worth coming back to.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/KhushiGoyal_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                  Designing and building robust web applications using React, Node.js, JavaScript, and 
                  cloud services like AWS and Azure.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Development</h4>
                  <p className="text-muted-foreground">
                  Building reliable and efficient web and backend systems using modern frameworks and best coding practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Technical Program Management</h4>
                  <p className="text-muted-foreground">
                  Driving cross-functional teams, timelines, and deliverables to deliver high-impact technical solutions on time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
