import { Navbar } from "@/components/portfolio/navbar";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";

/**
 * Portfolio Landing Page
 *
 * This is the main entry point for the portfolio website.
 * All sections are modular components that can be easily customized.
 *
 * To customize the content:
 * 1. Edit the placeholder data in each component file
 * 2. Replace placeholder images with your actual images
 * 3. Update social links and contact information
 * 4. Modify the color theme in globals.css if desired
 */
export default function HomePage() {
  return (
    <main className="min-h-screen scroll-smooth bg-background">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Hero Section - Full screen intro with name and title */}
      <HeroSection />

      {/* About Section - Bio, education, and career goals */}
      <AboutSection />

      {/* Skills Section - Technical skills with progress bars */}
      <SkillsSection />

      {/* Projects Section - Portfolio projects grid */}
      <ProjectsSection />

      {/* Experience Section - Work history timeline */}
      <ExperienceSection />

      {/* Contact Section - Contact form and info */}
      <ContactSection />

      {/* Footer - Copyright and social links */}
      <Footer />
    </main>
  );
}
