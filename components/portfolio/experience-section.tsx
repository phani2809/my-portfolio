"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

// ============================================
// PLACEHOLDER DATA - Replace with your experience
// ============================================
const experienceData = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Company Inc.",
    companyUrl: "https://techcompany.com",
    duration: "Jan 2024 - Present",
    type: "Full-time",
    location: "Remote",
    responsibilities: [
      "Lead the development of the main product dashboard using React and TypeScript",
      "Implemented design system and component library used across 5+ products",
      "Mentored 3 junior developers and conducted code reviews",
      "Reduced page load time by 40% through performance optimizations",
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS"],
  },
  {
    role: "Full Stack Developer",
    company: "Startup Labs",
    companyUrl: "https://startuplabs.com",
    duration: "Jun 2022 - Dec 2023",
    type: "Full-time",
    location: "San Francisco, CA",
    responsibilities: [
      "Built and maintained RESTful APIs serving 100K+ daily requests",
      "Developed responsive web applications using React and Node.js",
      "Integrated third-party services including Stripe, AWS, and Twilio",
      "Collaborated with design team to implement pixel-perfect UIs",
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "AWS", "Docker"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Digital Agency",
    companyUrl: "https://digitalagency.com",
    duration: "Jan 2022 - May 2022",
    type: "Internship",
    location: "New York, NY",
    responsibilities: [
      "Assisted in building client websites using React and CSS",
      "Participated in daily standups and sprint planning",
      "Fixed bugs and implemented new features under supervision",
      "Learned agile methodologies and collaborative development practices",
    ],
    technologies: ["React", "JavaScript", "SCSS", "Git", "Figma"],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    companyUrl: "#",
    duration: "Jun 2021 - Dec 2021",
    type: "Freelance",
    location: "Remote",
    responsibilities: [
      "Designed and developed websites for small businesses",
      "Created custom WordPress themes and plugins",
      "Managed client relationships and project timelines",
      "Delivered 10+ projects on time and within budget",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "HTML/CSS"],
  },
];

function TimelineItem({
  experience,
  index,
  isLast,
}: {
  experience: (typeof experienceData)[0];
  index: number;
  isLast: boolean;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
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

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative flex gap-6 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg">
          <Briefcase className="h-5 w-5 text-primary-foreground" />
        </div>
        {!isLast && (
          <div className="h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-border" />
        )}
      </div>

      {/* Content Card */}
      <div className="mb-10 flex-1 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg">
        {/* Header */}
        <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{experience.role}</h3>
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
            >
              {experience.company}
              {experience.companyUrl !== "#" && (
                <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </a>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {experience.duration}
            </div>
            <div className="flex gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {experience.type}
              </span>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                {experience.location}
              </span>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <ul className="mb-4 space-y-2">
          {experience.responsibilities.map((responsibility, respIndex) => (
            <li
              key={respIndex}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              {responsibility}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
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

export function ExperienceSection() {
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
    <section ref={sectionRef} id="experience" className="relative py-20 lg:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Work Experience
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto max-w-2xl text-muted-foreground">
            My professional journey and the experiences that shaped my career as a developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experienceData.map((experience, index) => (
            <TimelineItem
              key={`${experience.company}-${experience.role}`}
              experience={experience}
              index={index}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
