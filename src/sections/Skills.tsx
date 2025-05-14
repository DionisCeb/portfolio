import React, {useEffect} from "react";
import SkillBar from "../components/SkillBar";

const SkillsSection = () => {
    const designSkills = [
      { name: 'Photoshop', level: 90 },
      { name: 'Figma', level: 95 },
      { name: 'Adobe XD', level: 70 },
      { name: 'Illustrator', level: 75 },
      { name: 'CSS', level: 95 },
      { name: 'Tailwind', level: 80 },
      { name: 'Bootstrap ', level: 60 },
      { name: 'Sass ', level: 70 },
    ];
  
    const devSkills = [
      { name: 'HTML', level: 100 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'TypeScript', level: 70 },
      { name: 'MySQL', level: 70 },
      { name: 'MongoDB', level: 65 },
      { name: 'Laravel', level: 85 },
      { name: 'React Native', level: 80 },
    ];
  
    useEffect(() => {
      const elements = document.querySelectorAll('.slide-block');
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.animationDelay = `${index * 200 + 2000}ms`;
            target.classList.add('slide-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
  
      elements.forEach((element) => observer.observe(element));
  
      return () => observer.disconnect();
    }, []);
  
    return (
      <section className="bg-black text-white py-10 px-4 md:px-16" id="skills">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Design Skills</h2>
            {designSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Development Skills</h2>
            {devSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  

export default SkillsSection;
