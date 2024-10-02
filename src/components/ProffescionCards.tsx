import { motion } from "framer-motion";

interface Profession {
  title: string;
  techStack: string[];
}

export default function ProfessionCards() {
  const professions: Profession[] = [
    {
      title: "Frontend",
      techStack: [
        "React",
        "Next.js",
        "Vue",
        "Nuxt",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
      ],
    },
    {
      title: "Mobile",
      techStack: ["React Native", "Flutter"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {professions.map((profession, index) => (
        <motion.div
          key={profession.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className=" bg-white/10 rounded-lg shadow-md p-6 "
        >
          <h3 className="text-xl font-semibold mb-2">{profession.title}</h3>
          <div>
            <div className="flex flex-wrap gap-2">
              {profession.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
