"use client";
import Link from "next/link";
import "./css/projet.css";
export default function Projets() {
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
      technologies: ["React js", "Bootstrap"],
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
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "/imgProjet/p1.png",
      lienDemo: "https://lamineband.github.io/ExerciceMr1/",
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
    {
      id: 6,
      titre: "Site Restaurant",
      description:
        "Site vitrine responsive pour un restaurant fictif, avec navigation interactive vers une page voyage.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "/imgProjet/p4.png",
      lienDemo: "https://gleaming-gelato-7a9d60.netlify.app/",
      lienCode: "#",
      statut: "Terminé",
    },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-custom">
        <div className="container">
          <a
            className="navbar-brand"
            href="/"
            style={{ color: "#2563eb", fontWeight: "700" }}
          >
            Bandaogo Lamine
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href={"/"} className="nav-link">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#apropos">
                  À propos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <Link href={"/projets"} className="nav-link">
                  Projets
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="projects-header">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="projects-title">Mes Projets</h1>
              <p className="projects-subtitle">
                Découvrez une sélection de mes réalisations récentes
              </p>
              {/**
            *    <div className="projects-stats">
                <div className="row">
                  <div className="col-md-4">
                    <div className="stat-item">
                      <h3>15+</h3>
                      <p>Projets réalisés</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="stat-item">
                      <h3>3</h3>
                      <p>Années d'expérience</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="stat-item">
                      <h3>100%</h3>
                      <p>Clients satisfaits</p>
                    </div>
                  </div>
                </div>
              </div>
            */}
            </div>
          </div>
        </div>
      </section>

      {/* Filtres 
      <section className="projects-filters">
        
  *        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="filter-buttons">
                <button className="filter-btn active" data-filter="all">
                  Tous les projets
                </button>
                <button className="filter-btn" data-filter="web">
                  Applications Web
                </button>
                <button className="filter-btn" data-filter="mobile">
                  Mobile
                </button>
                <button className="filter-btn" data-filter="api">
                  API & Backend
                </button>
              </div>
            </div>
          </div>
        </div>
 
      </section>
*/}
      {/* Projets Grid */}
      <section className="projects-grid">
        <div className="container">
          <div className="row g-4">
            {projets.map((projet) => (
              <div key={projet.id} className="col-lg-4 col-md-6">
                <div className="project-card">
                  <div className="project-image">
                    <img
                      src={projet.image}
                      alt={projet.titre}
                      className="img-fluid"
                    />
                    {/**
                   *   <div className="project-overlay">
                      <div className="project-actions">
                        <a
                          href={projet.lienDemo}
                          className="btn-action"
                          title="Voir la démo"
                        >
                          <i className="fas fa-eye"></i>
                        </a>
                        <a
                          href={projet.lienCode}
                          className="btn-action"
                          title="Voir le code"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                   */}
                    {/**
                     * <div className="project-status">
                      <span
                        className={`status-badge ${
                          projet.statut === "Terminé"
                            ? "completed"
                            : "in-progress"
                        }`}
                      >
                        {projet.statut}
                      </span>
                    </div>
                     */}
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{projet.titre}</h3>
                    <p className="project-description">{projet.description}</p>

                    <div className="project-technologies">
                      {projet.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a href={projet.lienDemo} className="btn-primary-small">
                        <i className="fas fa-external-link-alt me-2"></i>
                        Visiter le contenu
                      </a>
                      {/** <a href={projet.lienCode} className="btn-outline-small">
                        <i className="fab fa-github me-2"></i>
                        Code
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="projects-cta">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Vous avez un projet en tête ?</h2>
              <p>
                Discutons ensemble de vos besoins et donnons vie à vos idées
              </p>
              <Link
                href={"/contact"}
                className="btn-primary-custom"
                style={{ color: "white" }}
              >
                <i className="fas fa-rocket me-2"></i>
                Démarrer un projet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
