import React from "react";
import {
  GraduationCap,
  Award,
  Code,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";

const About: React.FC = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
      title: "Licence en Informatique de Gestion",
      description:
        "Formation académique solide en développement logiciel et gestion de projets",
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Certification Gomycode",
      description:
        "Spécialisation en développement d'applications web et mobile modernes",
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Stack Technique Complète",
      description: "Maîtrise des technologies front-end, back-end et mobile",
    },
  ];

  const skills = [
    { name: "Rigueur", icon: <Target className="w-5 h-5" /> },
    { name: "Curiosité", icon: <Lightbulb className="w-5 h-5" /> },
    { name: "Autonomie", icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À propos de moi
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionné par le développement depuis plusieurs années, je combine
            expertise technique et créativité pour créer des solutions
            innovantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-indigo-900 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Mon parcours
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Diplômé en informatique de gestion avec une certification
                Gomycode en développement d'applications, je maîtrise l'ensemble
                de la chaîne de développement web et mobile. Mon approche
                combine rigueur technique et créativité pour livrer des
                solutions qui répondent aux besoins utilisateurs.
              </p>
            </div>

            {/* Stack technique */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Technologies principales
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "Firebase",
                  "MySQL",
                  "React Native",
                  "TypeScript",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="bg-white dark:bg-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Soft skills */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900 px-4 py-2 rounded-full"
                >
                  {skill.icon}
                  <span className="text-sm font-medium text-indigo-800 dark:text-indigo-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Réalisations */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex-shrink-0">{achievement.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
