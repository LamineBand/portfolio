import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [Message, setMessage] = useState("");
  const [loader, setloader] = useState(false);

  async function EnvoieInfo() {
    try {
      setloader(true);
      setMessage("");
      const res = await axios.post(
        "https://backend-portfolio-delta-weld.vercel.app/api/sendmail",
        formData
      );
      if (res && res.data.mess === "ok") {
        setloader(false);

        document.getElementById("toast")?.click();
        setFormData({ name: "", email: "", subject: "", message: "" });
        console.log("envoie reussi");
      } else {
        setloader(false);
        setMessage("L'envoie de votre Email a échouer");
        console.log("le back a échouer");
      }
    } catch (error) {
      setloader(false);
      setMessage("L'envoie de votre Email a échouer");
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
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    toast.success("Email envoyer avec succès !");
  };
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800"
    >
      {/* Conteneur de toast */}
      <button className=" d-none" id="toast" onClick={handleClick}></button>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contactez-moi
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            Prêt à discuter de votre projet ? N'hésitez pas à me contacter pour
            une collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Informations de contact */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Informations de contact
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                      Email
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium text-sm sm:text-base break-all">
                      lamine.bandaogo22@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                      Téléphone
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">
                      +225 07 01 97 53 50
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                      Localisation
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">
                      Côte d'ivoire, Abidjan
                    </p>
                  </div>
                </div>
              </div>

              {/* Liens sociaux */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Suivez-moi
                </h4>
                <div className="flex space-x-3 sm:space-x-4">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 text-white hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/feed/"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
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
          <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Envoyez-moi un message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors text-sm sm:text-base"
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
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors text-sm sm:text-base"
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
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors text-sm sm:text-base"
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
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                  placeholder="Décrivez votre projet ou votre message..."
                />
              </div>

              {loader ? (
                <button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 sm:py-3 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-lg flex items-center justify-center space-x-2"
                  type="button"
                  disabled
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden" role="status">
                    Envoyer de message en cours...
                  </span>
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 sm:py-3 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Envoyer le message</span>
                </button>
              )}
            </form>

            <center>
              <div className="mt-3 ">
                <span style={{ color: "red" }}> {Message} </span>
              </div>
            </center>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
