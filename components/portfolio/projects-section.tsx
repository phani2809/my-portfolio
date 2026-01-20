"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Folder, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

// ============================================
// PLACEHOLDER DATA - Replace with your projects
// ============================================
const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with product management, cart functionality, and payment integration using Stripe.",
    image: "/placeholder-project-1.jpg",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.vercel.app",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team workspaces.",
    image: "/placeholder-project-2.jpg",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2.vercel.app",
    featured: true,
  },
  {
    title: "AI Chat Application",
    description:
      "An AI-powered chat application that uses OpenAI's GPT API to provide intelligent responses and conversation history.",
    image: "/placeholder-project-3.jpg",
    techStack: ["Next.js", "OpenAI API", "Vercel AI SDK", "Supabase"],
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://project3.vercel.app",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays real-time weather data with interactive charts and location-based forecasts.",
    image: "/placeholder-project-4.jpg",
    techStack: ["React", "Chart.js", "Weather API", "Geolocation"],
    githubUrl: "https://github.com/yourusername/project4",
    liveUrl: "https://project4.vercel.app",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with modern technologies featuring smooth animations and responsive design.",
    image: "/placeholder-project-5.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/project5",
    liveUrl: "https://project5.vercel.app",
    featured: false,
  },
  {
    title: "Blog Platform",
    description:
      "A full-featured blog platform with markdown support, categories, comments, and admin dashboard.",
    image: "/placeholder-project-6.jpg",
    techStack: ["Next.js", "MDX", "Prisma", "NextAuth"],
    githubUrl: "https://github.com/yourusername/project6",
    liveUrl: "https://project6.vercel.app",
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
      {/* Project Image Placeholder */}
      <div className="relative h-48 overflow-hidden bg-secondary">
        <div className="flex h-full items-center justify-center">
          <Folder className="h-16 w-16 text-muted-foreground/50" />
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/90 opacity-0 transition-opacity group-hover:opacity-100">
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
              href="https://github.com/yourusername"
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
