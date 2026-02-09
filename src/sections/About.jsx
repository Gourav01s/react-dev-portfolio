import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the tests."
  },
  {
    icon: Rocket,
    title: "Performance",
    description:"Optimizing for speed and delivering lightning-fast user experiences."
  },
  {
    icon: Users,
    title: "Collaboration",
    description:"Working closely with teams to bring ideas to life." ,
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:"Staying ahead with the latest technologies and best practices." ,
  },
]

const About = () => {
  return (
    <section id="about" className="py-32 realtive overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the feature,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a computer science student and aspiring software developer
                with hands-on experience building web applications using modern
                JavaScript technologies. My journey into development started
                with curiosity about how web interfaces work, and it has grown
                into a focused effort to build responsive, real-world projects
                using the MERN stack.
              </p>
              <p>
                I primarily work with React, JavaScript, and Tailwind CSS to
                create clean, responsive user interfaces, and I have basic
                experience with Node.js and MongoDB for backend functionality.
                My projects range from real-time applications to structured
                UI-focused websites, helping me understand both frontend
                architecture and user experience.
              </p>
              <p>
                I focus on writing clean, maintainable code and continuously
                improving through project building, peer code reviews, and
                coding practice. I’m currently working on strengthening my
                full-stack skills and problem-solving abilities.
              </p>
              <p>
                When I'm not coding, I spend time exploring new tools in the
                JavaScript ecosystem, refining my projects, and learning better
                development practices through real-world experimentation.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border aniamte-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “My goal is to grow into a well-rounded software engineer by
                building practical, user-focused applications and continuously
                improving my technical depth.”
              </p>
            </div>
          </div>

          {/* Right column - hilights */}
          <div className="grid sm:grid-cols-2 gap-2">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in "
                style={{ naimationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title} </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About
