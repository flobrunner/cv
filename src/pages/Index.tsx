import { Download, Linkedin, Mail, Github } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="flex flex-col items-center gap-8 max-w-md text-center">
        {/* Profile Photo */}
        <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-border shadow-lg">
          <img
            src={profileImage}
            alt="Profile photo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Title */}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Your Name
          </h1>
          <p className="text-muted-foreground">
            Software Engineer · Designer · Creator
          </p>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-4">
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-6 pt-4">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:your@email.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Index;
