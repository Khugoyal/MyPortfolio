import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [

    // Programming Languages
    { name: "Python", level: 90, category: "languages" },
    { name: "Java", level: 90, category: "languages" },
    { name: "JavaScript", level: 90, category: "languages" },
    { name: "TypeScript", level: 85, category: "languages" },
    { name: "C++", level: 80, category: "languages" },
    { name: "C#", level: 75, category: "languages" },
    { name: "Swift", level: 70, category: "languages" },
    { name: "Kotlin", level: 70, category: "languages" },
    { name: "GoLang", level: 65, category: "languages" },
    { name: "SQL", level: 85, category: "languages" },
    { name: "HTML/CSS", level: 95, category: "languages" },

  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "AWS", level: 75, category: "tools" },
  { name: "Azure", level: 65, category: "tools" },
{ name: "Power BI", level: 80, category: "tools" },
{ name: "Excel", level: 80, category: "tools" },
{ name: "GitLab CI/CD", level: 70, category: "tools" },
{ name: "Unity", level: 75, category: "tools" },
{ name: "Agile", level: 85, category: "tools" },

 // Coursework
 { name: "Data Structures & Algorithms", level: 100, category: "coursework" },
 { name: "Introduction to Machine Learning", level: 100, category: "coursework" },
 { name: "Software Engineering (Agile)", level: 100, category: "coursework" },
 { name: "Database Management", level: 100, category: "coursework" },
 { name: "Machine Learning for Data Science", level: 100, category: "coursework" },
 { name: "Information Retrieval", level: 100, category: "coursework" },
 { name: "Game Development", level: 100, category: "coursework" },
];

// const categories = ["all", "frontend", "backend", "tools"];
const categories = ["all", "languages", "frontend", "backend", "tools", "coursework"];


export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
