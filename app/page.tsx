"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-custom">
        <div className="container">
          <a
            className="navbar-brand"
            href="#"
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
                <a className="nav-link" href="#apropos">
                  À propos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
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

      {/* Hero Section */}
      <section id="accueil" className="hero-section">
        <div className="container hero-content">
          <div className="row align-items-center">
            <div className="col-lg-6  mb-5">
              <h1
                className="display-4 fw-bold text-white mb-4"
                style={{
                  fontSize: "3.5rem",
                  lineHeight: "1.2",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                Développeur Web
                <span style={{ color: "#f59e0b", display: "block" }}>
                  Full Stack
                </span>
              </h1>

              <p
                className="lead text-white mb-5"
                style={{
                  fontSize: "1.3rem",
                  opacity: "0.9",
                  maxWidth: "500px",
                }}
              >
                Je crée des expériences web modernes et performantes avec React,
                Next.js et les dernières technologies.
              </p>

              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <Link
                  href={"/projets"}
                  className="btn-primary-custom"
                  style={{ color: "white" }}
                >
                  Voir mes projets
                </Link>

                <Link href={"/contact"} className="btn-outline-custom">
                  Me contacter
                </Link>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <div
                className="hero-circle"
                style={{
                  width: "350px",
                  height: "350px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(10px)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <i
                  className="fas fa-code"
                  style={{
                    fontSize: "8rem",
                    color: "white",
                    opacity: "0.8",
                  }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{ padding: "100px 0", background: "#f8fafc" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2
                className="section-title fw-bold"
                style={{ fontSize: "2.5rem", color: "#1f2937" }}
              >
                Mes Services
              </h2>
              <p
                className="lead mb-5"
                style={{
                  color: "#6b7280",
                  maxWidth: "600px",
                  margin: "0 auto 3rem",
                }}
              >
                Des solutions complètes pour donner vie à vos projets web
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card feature-card p-4">
                <div className="feature-icon mx-auto">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <div className="text-center">
                  <h4 className="fw-bold mb-3" style={{ color: "#1f2937" }}>
                    Développement Frontend
                  </h4>
                  <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                    Création d'interfaces utilisateur modernes et responsives
                    avec React, Next.js, et TypeScript.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card feature-card p-4">
                <div className="feature-icon mx-auto">
                  <i className="fas fa-server"></i>
                </div>
                <div className="text-center">
                  <h4 className="fw-bold mb-3" style={{ color: "#1f2937" }}>
                    Développement Backend
                  </h4>
                  <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                    APIs robustes et sécurisées avec Node.js, Express, et bases
                    de données modernes.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card feature-card p-4">
                <div className="feature-icon mx-auto">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="text-center">
                  <h4 className="fw-bold mb-3" style={{ color: "#1f2937" }}>
                    Design Responsive
                  </h4>
                  <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                    Applications parfaitement adaptées à tous les appareils et
                    tailles d'écran.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2
                className="fw-bold mb-4"
                style={{ fontSize: "2.5rem", color: "#1f2937" }}
              >
                À propos de moi
              </h2>
              <p
                className="mb-4"
                style={{
                  color: "#6b7280",
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                }}
              >
                Passionné par le développement web depuis plusieurs années, je
                me spécialise dans la création d'applications modernes et
                performantes. Mon expertise couvre l'ensemble du stack
                technique, du frontend au backend.
              </p>
              <p
                className="mb-4"
                style={{
                  color: "#6b7280",
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                }}
              >
                Je vous accompagne dans la réalisation de vos projets digitaux,
                en privilégiant toujours la qualité, les performances et
                l'expérience utilisateur.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "#10b981", fontSize: "1.2rem" }}
                    ></i>
                    <span style={{ fontWeight: "500" }}>React & Next.js</span>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "#10b981", fontSize: "1.2rem" }}
                    ></i>
                    <span style={{ fontWeight: "500" }}>Node.js & Express</span>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "#10b981", fontSize: "1.2rem" }}
                    ></i>
                    <span style={{ fontWeight: "500" }}>TypeScript</span>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "#10b981", fontSize: "1.2rem" }}
                    ></i>
                    <span style={{ fontWeight: "500" }}>MongoDB & SQL</span>
                  </div>
                </div>
              </div>

              <Link
                href={"/contact"}
                className="btn-primary-custom"
                style={{ marginBottom: "40px", color: "white" }}
              >
                Travaillons ensemble
              </Link>
            </div>

            <div className="col-lg-6 text-center">
              <div
                style={{
                  background: "#1e40af",
                  borderRadius: "20px",
                  padding: "60px 40px",
                  color: "white",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "relative", zIndex: "2" }}>
                  <i
                    className="fas fa-quote-left"
                    style={{
                      fontSize: "3rem",
                      opacity: "0.8",
                      marginBottom: "20px",
                    }}
                  ></i>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      fontStyle: "italic",
                      margin: "0",
                      lineHeight: "1.6",
                    }}
                  >
                    "La passion pour le code et l'innovation me pousse à créer
                    des solutions qui dépassent les attentes."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ background: "#1f2937", padding: "80px 0" }}>
        <div className="container text-center">
          <h2
            className="fw-bold text-white mb-4"
            style={{ fontSize: "2.5rem" }}
          >
            Prêt à démarrer votre projet ?
          </h2>
          <p
            className="lead text-white mb-5"
            style={{ opacity: "0.9", maxWidth: "600px", margin: "0 auto 2rem" }}
          >
            Contactez-moi pour discuter de vos besoins et transformer vos idées
            en réalité digitale.
          </p>
          <Link
            href={"/contact"}
            className="btn-primary-custom"
            style={{ fontSize: "1.1rem", color: "white" }}
          >
            <i className="fas fa-envelope me-2"></i>
            Démarrer un projet
          </Link>
        </div>
      </section>
    </>
  );
}
