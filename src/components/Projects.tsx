import React from "react";
import {
  ExternalLink,
  // Github,
  // Smartphone,
  // ShoppingCart,
  // Building,
} from "lucide-react";
{
  /**
   *    {
      id: 5,
      titre: "Site boutique de chaussures",
      description:
        "Boutique en ligne de chaussures avec une interface intuitive, fluide et moderne.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "/imgProjet/p3.png",
      lienDemo: "https://lamineband.github.io/cheeckPoint-boostrap2/",
      lienCode: "#",
      statut: "Terminé",
    },
   */
}
const Projects: React.FC = () => {
  const projets = [
    {
      id: 1,
      titre: "E-commerce Modern",
      description:
        "Plateforme e-commerce complète avec panier, paiement et gestion des commandes. Interface moderne et intuitive.",
      technologies: ["TypeScript", "Next.js", "JWT", "MongoDB", "Firebase"],
      image: "/imgProjet/p.png",
      lienDemo: "https://ivoire-tech.vercel.app/",
      lienCode: "#",
      statut: "Terminé",
    },
    {
      id: 2,
      titre: "Site de Sport",
      description:
        "Site de coaching sportif interactif, avec navigation fluide, objectifs personnalisés, exercices guidés et interface responsive.",
      technologies: ["React.js", "Bootstrap"],
      image: "/imgProjet/p5.png",
      lienDemo: "https://lamine-fit-pwas.vercel.app/",
      lienCode: "#",
      statut: "Terminé",
    },
    {
      id: 7,
      titre: "Site Karibu Digital",
      description: "Site simple et fluide d'une agance multi-service.",
      technologies: ["TypeScript", "Next.js", "Bootstrap"],
      image: "/imgProjet/p6.png",
      lienDemo: "https://karibu-eight.vercel.app/",
      lienCode: "#",
      statut: "Terminé",
    },
    {
      id: 3,
      titre: "Site de restauration",
      description:
        "Site vitrine responsive pour restaurant, mettant en valeur le menu, l’ambiance et les infos pratiques via une interface élégante et fluide.",
      technologies: ["React.js", "TypeScript", "Bootstrap"],
      image: "/imgProjet/p11.png",
      lienDemo: "https://restob.vercel.app/",
      lienCode: "#",
      statut: "En cours",
    },
    {
      id: 4,
      titre: "Site Wise TV",
      description:
        "Site vitrine pour chaîne TV, avec interface épurée, identité visuelle marquée et mise en avant des émissions et actualités.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "/imgProjet/p2.png",
      lienDemo: "https://lamineband.github.io/wise1/",
      lienCode: "#",
      statut: "Terminé",
    },

    {
      id: 6,
      titre: "Site Restaurant",
      description:
        "Site vitrine responsive pour l'agence Lamine Travel, présentant ses services et ses offres de voyages de façon claire et attrayante.",
      technologies: ["React.js", "TypeScript", "Bootstrap"],
      image: "/imgProjet/voy.png",
      lienDemo: "https://agence-voyage-khaki.vercel.app/",
      lienCode: "#",
      statut: "Terminé",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes projets
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Découvrez quelques-unes de mes réalisations récentes, alliant
            créativité et performance technique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image du projet */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.image}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />

                {/**project.icon
                 *   <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
                 *  </div>
                 */}
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.titre}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Liens */}
                <div className="flex space-x-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.lienDemo}
                    className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visiter le contenu</span>
                  </a>
                  {/**
                *    <a
                    href={project.lienCode}
                    className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
