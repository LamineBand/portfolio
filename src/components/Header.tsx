import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
//import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      // Ferme le menu uniquement en mobile (largeur < 768px)
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold  text-white">Bandaogo Lamine</div>

          {/* Desktop Navigation   <nav className="hidden md:flex items-center space-x-8 d-md-none"> */}
          <nav className="hidden md:flex items-center space-x-8 d-md-none">
            <button
              style={{ fontWeight: "bold", color: "white" }}
              onClick={() => scrollToSection("accueil")}
              className="nav-link"
            >
              Accueil
            </button>
            <button
              style={{ fontWeight: "bold", color: "white" }}
              onClick={() => scrollToSection("about")}
              className="nav-link"
            >
              À propos
            </button>
            <button
              style={{ fontWeight: "bold", color: "white" }}
              onClick={() => scrollToSection("projects")}
              className="nav-link"
            >
              Projets
            </button>
            <button
              style={{ fontWeight: "bold", color: "white" }}
              onClick={() => scrollToSection("skills")}
              className="nav-link"
            >
              Compétences
            </button>
            <button
              style={{ fontWeight: "bold", color: "white" }}
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contact
            </button>
            {/**
            <button className="btn-primary flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>CV</span>
            </button>
           <ThemeToggle /> */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="block md:hidden flex items-center space-x-2">
            {/**<ThemeToggle /> */}
            <button
              style={{ backgroundColor: "white" }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:block mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("accueil")}
                className="nav-link text-left"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="nav-link text-left"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="nav-link text-left"
              >
                Projets
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="nav-link text-left"
              >
                Compétences
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-link text-left"
              >
                Contact
              </button>
              <a
                href="/cvbdg.pdf"
                download
                className="btn-primary flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger mon CV</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
