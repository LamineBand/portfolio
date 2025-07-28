import React from "react";
import { Code, Server, Smartphone, PenTool as Tools } from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Front-End",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "TypeScript" },
        //{ name: "Tailwind CSS", level: 95 },
        { name: "JavaScript" },
        { name: "HTML/CSS" },
      ],
    },
    {
      title: "Back-End",
      icon: <Server className="w-8 h-8 text-green-600" />,
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "MongoDB" },
        { name: "MySQL" },
        // { name: "PostgreSQL", level: 75 },
        { name: "Firebase" },
      ],
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      skills: [
        { name: "React Native" },
        { name: "Capacitor" },
        //  { name: "Expo", level: 75 },
        // { name: "Flutter", level: 60 }
      ],
    },
    {
      title: "Outils",
      icon: <Tools className="w-8 h-8 text-orange-600" />,
      skills: [
        { name: "Git" },
        // { name: "Docker", level: 70 },
        // { name: "Figma", level: 85 },
        { name: "VS Code" },
        { name: "Postman" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Compétences techniques
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions
            complètes et performantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {/*skill.level  pour div suivant : style={{ width: `${skill.level}%` }}*/}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
