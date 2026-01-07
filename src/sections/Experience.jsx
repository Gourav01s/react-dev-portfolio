const experiences = [
  {
    period: "2022 — Present",
    role: "role1",
    company: "CompanyC",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nihil?.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: true,
  },
  {
    period: "2020 — 2022",
    role: "role2",
    company: "CompanyB",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nihil?.",
    technologies: ["React", "Redux", "Jest", "Cypress"],
    current: false,
  },
  {
    period: "2019 — 2020",
    role: "role3",
    company: "CompanyA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nihil?.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    current: false,
  },
  {
    period: "2018 — 2019",
    role: "roleA",
    company: "Self-Employed",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nihil?.",
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 realtive overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 ">
        {/* section header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm 
            font-medium tracking-wider uppercase animate-fade-in"
          >
            Carrer Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks vloumes.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus optio neque, ipsa fugiat illum odio porro. Autem
            excepturi quidem quod.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full  -translate-x-1/2 ring-3 ring-background z-10">
                  {/* {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping"/>
                  )} */}
                </div>

                {/* content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company} </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}{" "}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
