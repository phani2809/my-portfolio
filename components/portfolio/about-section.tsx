"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Target, User } from "lucide-react";

// ============================================
// PLACEHOLDER DATA - Replace with your info
// ============================================
const aboutData = {
  // Replace with your profile image URL
  profileImage: "/placeholder-profile.jpg",
  bio: `I'm a passionate Full Stack Developer with over 3 years of experience building 
    web applications. I specialize in creating responsive, user-friendly interfaces 
    and robust backend systems. My journey in tech started when I built my first 
    website at age 15, and I've been hooked ever since.`,
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      year: "2020 - 2024",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Tech Academy",
      year: "2023",
    },
  ],
  goals: [
    "Build impactful products that solve real-world problems",
    "Contribute to open-source projects",
    "Continuously learn and adopt new technologies",
    "Mentor aspiring developers",
  ],
};

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection observer for scroll animation
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
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            About Me
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Profile Image */}
          <div
            className={`flex justify-center transition-all delay-200 duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-primary/20 to-primary/10 blur-lg" />
              
              {/* Profile image container */}
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-primary/30 sm:h-80 sm:w-80">
                {/* Placeholder - Replace with actual image */}
                <div className="flex h-full w-full items-center justify-center bg-secondary">
                  <User className="h-32 w-32 text-muted-foreground" />
                </div>
                {/* Uncomment and use this when you have an actual image
                <Image
                  src={aboutData.profileImage || "/placeholder.svg"}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
                */}
              </div>
            </div>
          </div>

          {/* About Content */}
          <div
            className={`space-y-8 transition-all delay-300 duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Bio */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Who I Am</h3>
              </div>
              <p className="leading-relaxed text-muted-foreground">{aboutData.bio}</p>
            </div>

            {/* Education */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-3">
                {aboutData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30"
                  >
                    <p className="font-medium text-foreground">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution} • {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Goals */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Career Goals</h3>
              </div>
              <ul className="space-y-2">
                {aboutData.goals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
