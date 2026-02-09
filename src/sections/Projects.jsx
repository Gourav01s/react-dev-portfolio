import { ArrowUpRight } from "lucide-react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import AnimatedBodrderButton from "../components/AnimatedBodrderButton";
import { useState } from "react";
import toast from "react-hot-toast";

const projects = [
  {
    title: "Developer Portfolio",
    description:
      "A modern developer portfolio built with React to showcase projects, skills, and technical growth with clean layouts, smooth navigation, and responsive design.",
    image: "/projects/dev-portfolio.jpg",
    tags: ["React", "JavaScript", "TailwindCSS"],
    link: "#",
    github: "https://github.com/Gourav01s/react-dev-portfolio",
  },
  {
    title: "WebSocket Chat Application",
    description:
      "A real-time group chat application using React and WebSockets, featuring instant message delivery, clean UI, and structured component-based architecture.",
    image: "/projects/chat-app.jpg",
    tags: ["React", "WebSocket", "Node.js", "TailwindCSS"],
    link: "#",
    github: "https://github.com/Gourav01s/websocket-ChatApp",
  },
  {
    title: "GSAP React Animations",
    description:
      "An experimental project demonstrating smooth UI animations and scroll-based effects using GSAP integrated with React components.",
    image: "/projects/gsap-react.jpg",
    tags: ["React", "GSAP", "JavaScript"],
    link: "https://gsap-react-site.netlify.app/",
    github: "https://github.com/Gourav01s/GSAP-React",
  },
  {
    title: "Modern UI/UX Website",
    description:
      "A responsive modern landing page built with React, focusing on layout composition, reusable UI sections, and contemporary design patterns.",
    image: "/projects/modern-ui.png",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://modern-ui-ux-reactapp.netlify.app/",
    github: "https://github.com/Gourav01s/react-modern-ui-ux-website",
  },
  {
    title: "Countries Explorer",
    description:
      "A React application that displays country data using a public API, featuring dynamic routing, detailed country views, and responsive layouts.",
    image: "/projects/countries-app.jpg",
    tags: ["React", "React Router", "REST API", "JavaScript"],
    link: "#",
    github: "https://github.com/Gourav01s/react-router-countries-app",
  },
  {
    title: "Selenium Automation Suite",
    description:
      "An automated test suite built with Selenium to validate core user flows, demonstrating element interaction, form testing, and structured test execution.",
    image: "/projects/selenium test_testScript1_output.jpg",
    tags: ["Selenium", "JavaScript", "Automation Testing"],
    link: "#",
    github: "https://github.com/Gourav01s/selenium-tests",
  },
];

const otherProjects = [
  {
    title: "Notes Management App",
    description:
      "A TypeScript-based notes management application with structured components and CRUD-style interactions for creating and organizing notes.",
    image: "/projects/notes-app.png",
    tags: ["React", "TypeScript", "JavaScript"],
    link: "#",
    github: "https://github.com/Gourav01s/NotesApp",
  },
  {
    title: "Restaurant Landing App",
    description:
      "A responsive restaurant-themed web application built with React and TypeScript, focusing on structured layout, component reuse, and modern UI styling.",
    image: "/projects/restaurant.png",
    tags: ["React", "TypeScript", "CSS"],
    link: "#",
    github: "https://github.com/Gourav01s/Silver-Spoon-app",
  },
  {
    title: "Backend Learning Playground",
    description:
      "Practice repository for learning Node.js backend concepts and basic server-side logic.",
    image: "/projects/backend.png",
    tags: ["Node.js", "JavaScript"],
    link: "#",
    github: "https://github.com/Gourav01s/Backend",
  },
  {
    title: "Static Page Experiments",
    description:
      "Collection of small static web pages built while learning HTML, CSS, and layout techniques.",
    image: "/projects/static-pages.png",
    tags: ["HTML", "CSS"],
    link: "#",
    github: "https://github.com/Gourav01s/demo-static-pages",
  },
];

const Projects = () => {
  const [projectsList, setProjectsList] = useState(projects);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleAllProject = () => {
    setShowAllProjects((prev) => !prev);
    
    setProjectsList(() =>
      showAllProjects
        ? projects
        : [...projects,...otherProjects]
    );
  }
  // const handleClick = (e) => {
  //   if (!projects.link) {
  //     e.preventDefault();
  //     toast.info("Live link is not available. You can look at the Git repo.");
  //   }
  // };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg-glow */}
      {/* <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" /> */}

      <div className="container mx-auto px-6 relative z-10 ">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Project that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* projects grid part */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* {projects.map((project, idx) => ( */}
          {projectsList.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <BsGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={project.link || "#"}
                    onClick={(e) => {
                      if (!projects.link) {
                        e.preventDefault();
                        toast.success(
                          "Live link is not available. You can look at the Git repo.",
                        );
                      }}}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <BsArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* content */}
              <div className="p-6 space-y-4 z-10">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight 
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary
                      group-hover:translate-x-1 group-hover:translate-y-1 transition-all "
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className=" px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border hover:border-primary/50 hover:text-primary transition-all delay-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* view all CTA */}
        <div
          className="text-center mt-12 animate-fade-in animation-delay-500"
          onClick={handleAllProject}
        >
          <AnimatedBodrderButton>
            {showAllProjects ? "show Less" : "View All Projects"}
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBodrderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
