import { Download, Linkedin, Mail, Github } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import profileImage from "@/assets/portrait-cropped.jpeg";
import hoverImage from "@/assets/laughing-cropped.jpeg";
import cvFile from "@/assets/cv.pdf";

const Index = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setImageLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6 py-12 relative">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Florian Brunner",
          url: "https://flobrunner.github.io/cv/",
          sameAs: [
            "https://www.linkedin.com/in/florianbrunner/",
            "https://github.com/flobrunner",
          ],
          jobTitle: "Tech enthusiast",
          description: "Tech enthusiast, sportsman, and young dad.",
        })}
      </script>

      <div className="flex flex-col items-center gap-8 max-w-md text-center">
        {/* Profile Photo */}
        <div
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-border shadow-xl ring-1 ring-primary/10 cursor-pointer transition-transform duration-300 hover:scale-105"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
        >
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          <img
            ref={imgRef}
            src={isHovered ? hoverImage : profileImage}
            alt="Profile photo"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </div>

        {/* Name & Title */}
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Florian Brunner
          </h1>
          <p className="text-lg text-muted-foreground">
            Tech enthusiast · Sportsman · Young dad
          </p>
        </div>

        {/* CTA Button */}
        <a
          href={cvFile}
          download="Florian-Brunner-CV.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
          aria-label="Download CV as PDF"
        >
          <Download className="w-5 h-5" />
          <span>Download CV</span>
        </a>

        {/* Contact Section */}
        <address className="not-italic">
          <p className="text-sm text-muted-foreground mb-3">Get in touch</p>
          <div className="flex items-center justify-center gap-5">
            <a
              href="https://www.linkedin.com/in/florianbrunner/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/flobrunner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:brunnerflorian85@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </address>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center text-xs text-muted-foreground/60">
        Built with React, Vite & Tailwind CSS
      </footer>

      {/* Page view tracker (invisible) */}
      <img
        src={`https://api.countapi.xyz/hit/flobrunner-cv/page?value=1`}
        className="w-0 h-0 opacity-0 pointer-events-none"
        alt=""
        aria-hidden="true"
      />
    </main>
  );
};

export default Index;