interface TechnicalSkillsProps {
  skills: string[];
}

export default function TechnicalSkills({ skills }: TechnicalSkillsProps) {
  return (
    <section className="py-24 px-6 bg-white/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest mb-16 text-center">
          Technical Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2.5 bg-sage/10 hover:bg-sage/20 text-forest rounded-lg text-sm font-medium border border-sage/20 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
