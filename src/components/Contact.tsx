import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import axios from "axios";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  async function EnvoieInfo() {
    try {
      const res = await axios.post(
        "http://localhost:3005/api/sendmail",
        formData
      );
      if (res && res.data.mess === "ok") {
        console.log("message envoyer au back-end");
      } else {
        console.log("le back a échouer");
      }
    } catch (error) {
      console.log("erreur d'envoie au serveur =");
      console.log(error);
    }
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    // console.log("Form submitted:", formData);
    //alert("Message envoyé avec succès!");
    EnvoieInfo();
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contactez-moi
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Prêt à discuter de votre projet ? N'hésitez pas à me contacter pour
            une collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Informations de contact
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Email</p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      lamine.bandaogo22@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Téléphone
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      +225 07 01 97 53 50
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Localisation
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      Côte d'ivoire, Abidjan
                    </p>
                  </div>
                </div>
              </div>

              {/* Liens sociaux */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Suivez-moi
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link bg-gray-800 text-white hover:bg-gray-700"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/feed/"
                    className="social-link bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  {/**
                 *   <a
                    href="#"
                    className="social-link bg-indigo-600 text-white hover:bg-indigo-700"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                 */}
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Envoyez-moi un message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white-50 dark:bg-white-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white-50 dark:bg-white-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white-50 dark:bg-white-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  placeholder="Objet de votre message"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white-50 dark:bg-white-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Décrivez votre projet ou votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 text-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer le message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
