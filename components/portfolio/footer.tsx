"use client";

import { Github, Heart, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

// ============================================
// PLACEHOLDER DATA - Replace with your info
// ============================================
const footerData = {
  name: "Yanna Phani Srinath Reddy",
  socials: [
    { name: "GitHub", url: "https://github.com/phani2809", icon: Github },
    { name: "LinkedIn", url: "http://www.linkedin.com/in/yanna-phani-srinath-reddy-b590a826a", icon: Linkedin },
    { name: "Email", url: "mailto:yannaphanisrinathreddy@gmail.com", icon: Mail },
  ],
};

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  // Avoid hydration mismatches from server/client timezone differences
  // by setting the year on the client after mount.
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span suppressHydrationWarning>© {currentYear ?? ""}</span>
            <span className="font-medium text-foreground">{footerData.name}</span>
            <span>• Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and</span>
            <span className="font-medium text-primary">Next.js</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {footerData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <button
            type="button"
            onClick={() => document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" })}
            className="transition-colors hover:text-primary"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="transition-colors hover:text-primary"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="transition-colors hover:text-primary"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="transition-colors hover:text-primary"
          >
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
}
