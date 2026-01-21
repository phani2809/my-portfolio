"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Folder, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import ElectricBorder from "@/components/ElectricBorder";

const projectsData = [
  {
    title: "QuakeConnect",
    description:
      "An application that connects different citizens, NGOs, and government entities. Features include historical earthquake data analysis, earthquake prediction based on historical patterns, and realtime alert systems. The platform facilitates communication and coordination during seismic events.",
    image: "/quakeconnect.png",
    techStack: ["React.js", "Tailwind CSS","TypeScript", "Node.js", "Express.js", "MangoDB"],
    githubUrl: "https://github.com/phani2809/QuakeConnect.git",
    liveUrl: "#",
    featured: true,
  },
  {
    title: "IPO Web Application",
    description:
      "Built a full-stack IPO information platform using the MERN stack. Developed a RESTful API to manage and serve IPO data including company details, price band, issue size, listing status, and real-time market updates. Integrated features like downloadable RHP/DRHP PDFs and dynamic UI for enhanced user experience.",
    image: "/ipo-web.png",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/phani2809/IPO_Web_Application.git",
    liveUrl: "#",
    featured: true,
  },
  {
    title: "AI Chat Application",
    description:
      "An AI-powered chat application that uses OpenAI's GPT API to provide intelligent responses and conversation history.",
    image: "/Chatbot.jpg",
    techStack: ["React.js", "OpenAI API", "Python", "Streamlit"],
    githubUrl: "https://github.com/phani2809/chatbot.git",
    liveUrl: "#",
    featured: true,
  },
  {
    title: "MediCloud",
    description:
      "A Full-stack Medicine Booking application that allows users to book medicines from their preferred pharmacy stores. The platform provides nearby pharmacy locations and lab test booking from home options, making healthcare more accessible and convenient.",
    image: "/medicloud.png",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/phani2809/MediCloud.git",
    liveUrl: "#",
    featured: false,
  },
  {
    title: "URL Shortener",
    description:
      "A simple and efficient URL shortening service with a clean and intuitive user interface.",
    image: "/url-short.png",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/phani2809/url-project.git",
    liveUrl: "https://urlproject123.netlify.app/",
    featured: false,
  },
  {
    title: "Cart and Cuisine",
    description:
      "A comprehensive e-commerce platform for food and grocery shopping, featuring user-friendly navigation, secure payment options, and real-time order tracking.",
    image: "/cnc.png",
    techStack: ["HTML", "CSS", "JavaScript", "Node","SQL"],
    githubUrl: "https://github.com/phani2809/cart-and-cuisine.git",
    liveUrl: "#",
    featured: false,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projectsData)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
      <div
        ref={cardRef}
        className={`group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
      {/* Project Image */}
      <div className="relative h-55 overflow-hidden bg-secondary">
        {!imgFailed ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgFailed(true)}
            priority={project.featured}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Folder className="h-16 w-16 text-muted-foreground/50" />
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 z-10 flex items-center justify-center gap-4 bg-background/90 opacity-0 transition-opacity group-hover:opacity-100">
          <Button size="sm" variant="outline" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub repository"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        </div>
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            Featured
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      </div>
  );
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Here are some of my recent projects. Each project is a unique piece of
            development showcasing my skills and passion for building web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div
          className={`mt-12 text-center transition-all delay-500 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/phani2809"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
