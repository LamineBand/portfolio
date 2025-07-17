"use client";

import { useState } from "react";
import "./css/contact.css";
import Link from "next/link";
export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi (frontend uniquement)
    console.log("Données du formulaire:", formData);
    setShowSuccess(true);

    // Reset du formulaire après 3 secondes
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        nom: "",
        email: "",
        sujet: "",
        message: "",
      });
    }, 3000);
  };

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
      <section className="contact-header">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="contact-title">Contactez-moi</h1>
              <p className="contact-subtitle">
                Discutons de votre projet et donnons vie à vos idées
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="row g-5">
            {/* Informations de contact */}
            <div className="col-lg-5">
              <div className="contact-info">
                <h2 className="contact-info-title">Restons en contact</h2>
                <p className="contact-info-text">
                  Je suis toujours ravi de discuter de nouveaux projets et
                  d'opportunités de collaboration. N'hésitez pas à me contacter
                  pour toute question ou demande de devis.
                </p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-details">
                      <h4>Email</h4>
                      <p>lamine.bandaogo22@gmail.com</p>
                      <a
                        href="mailto:lamine.bandaogo22@gmail.com"
                        className="contact-link"
                      >
                        Envoyer un email
                      </a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="contact-details">
                      <h4>Téléphone</h4>
                      <p>+225 07 01 97 53 50</p>
                      <a
                        href="tel:+225 07 01 97 53 50"
                        className="contact-link"
                      >
                        Appeler maintenant
                      </a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-details">
                      <h4>Localisation</h4>
                      <p>Abidjan, Côte d'ivoire</p>
                      <span className="contact-link">Disponible en remote</span>
                    </div>
                  </div>
                </div>

                <div className="social-links">
                  <h4>Suivez-moi</h4>
                  <div className="social-icons">
                    <a
                      href="https://www.linkedin.com/feed/"
                      className="social-icon"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/" className="social-icon">
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://web.facebook.com/?_rdc=1&_rdr#"
                      className="social-icon"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      className="social-icon"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="col-lg-7">
              <div className="contact-form-container">
                <h2 className="form-title">Envoyez-moi un message</h2>

                {showSuccess && (
                  <div className="success-message">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Message envoyé avec succès ! Je vous répondrai bientôt.
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="nom" className="form-label">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          className="form-control"
                          required
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          required
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="sujet" className="form-label">
                      Sujet *
                    </label>
                    <select
                      id="sujet"
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="projet-web">Projet de site web</option>
                      <option value="application">
                        Développement d'application
                      </option>
                      <option value="maintenance">Maintenance/Support</option>
                      <option value="consultation">Consultation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      rows={6}
                      required
                      placeholder="Décrivez votre projet ou votre demande..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-submit">
                    <i className="fas fa-paper-plane me-2"></i>
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section 
       <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="faq-title">Questions fréquentes</h2>
              <p className="faq-subtitle">
                Trouvez rapidement les réponses à vos questions
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="faq-list">
                <div className="faq-item">
                  <div className="faq-question">
                    <h4>Quels sont vos délais de réalisation ?</h4>
                    <i className="fas fa-plus"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      Les délais varient selon la complexité du projet. Un site
                      vitrine prend généralement 2-3 semaines, tandis qu'une
                      application web complexe peut nécessiter 1-3 mois.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">
                    <h4>Proposez-vous la maintenance après livraison ?</h4>
                    <i className="fas fa-plus"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      Oui, je propose des contrats de maintenance pour assurer
                      la sécurité, les mises à jour et le bon fonctionnement de
                      votre site ou application.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">
                    <h4>Travaillez-vous avec des clients internationaux ?</h4>
                    <i className="fas fa-plus"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      Absolument ! Je travaille en remote avec des clients du
                      monde entier. La communication se fait principalement en
                      français et en anglais.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">
                    <h4>Quelles technologies utilisez-vous ?</h4>
                    <i className="fas fa-plus"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      Je me spécialise dans React, Next.js, TypeScript, Node.js,
                      et les technologies web modernes. Je choisis toujours la
                      stack la plus adaptée à votre projet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
    </>
  );
}
