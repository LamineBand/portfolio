import React from "react";
import {
  Github,
  Linkedin,
  //Mail,
  ChevronDown,
  Code,
  Sparkles,
  ArrowRight,
  Download,
} from "lucide-react";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-indigo-900 dark:to-gray-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge de statut 
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 text-white/90">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Disponible pour de nouveaux projets</span>
          </div>*/}

          {/* Photo professionnelle avec effet glassmorphism */}
          <div className="mb-12 relative">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto relative">
              {/* Cercles animés en arrière-plan */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 animate-spin-slow opacity-75"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 animate-spin-slow animation-delay-1000 opacity-50"></div>

              {/* Photo container */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    <img src="/imgProjet/lamine.jpg" alt="" />
                  </span>
                </div>
              </div>

              {/* Indicateur de statut */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Titre principal avec effet de gradient */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                Développeur
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-4">
                Full-Stack
                <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-yellow-400 animate-pulse" />
              </span>
              <span className="bg-gradient-to-r from-indigo-200 via-purple-200 to-white bg-clip-text text-transparent">
                & Mobile
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-white/80 mb-6 leading-relaxed font-light">
            Créateur d'expériences digitales modernes
          </p>

          {/* Description avec style amélioré */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
            <p className="text-lg text-white/70 leading-relaxed">
              Diplômé en{" "}
              <span className="text-purple-300 font-semibold">
                informatique de gestion
              </span>{" "}
              et certifié
              <span className="text-indigo-300 font-semibold"> Gomycode</span>,
              je transforme vos idées en applications web et mobile performantes
              avec une approche créative et professionnelle.
            </p>
          </div>

          {/* Boutons d'action redesignés */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-3"
            >
              <span className="text-lg">Découvrir mes projets</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/cvbdg.pdf"
              download
              className="btn-primary flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger mon CV</span>
            </a>

            {/**
          *    <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg">Me contacter</span>
            </button>
          */}
          </div>

          {/* Liens sociaux redesignés */}
          <div className="flex justify-center space-x-8 mb-16">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 group-hover:rotate-3">
                <Github className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/feed/"
              className="group relative"
            >
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 group-hover:-rotate-3">
                <Linkedin className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
              </div>
            </a>
            {/**
             * <a href="#" className="group relative">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 group-hover:rotate-3">
                <Mail className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
              </div>
            </a>
             */}
          </div>

          {/* Indicateur de défilement amélioré */}
          <button
            onClick={scrollToAbout}
            className="group mx-auto block text-white/60 hover:text-white transition-all duration-300"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-medium opacity-80">
                Découvrir plus
              </span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
              </div>
              <ChevronDown className="w-6 h-6 animate-bounce group-hover:translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
