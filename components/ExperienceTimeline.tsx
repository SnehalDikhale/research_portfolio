interface ExperienceItem {
  title: string;
  period: string;
  current?: boolean;
  responsibilities: string[];
}

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <section className="py-24 px-6 bg-white/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest mb-16 text-center">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10 border-l-2 border-moss/40">
              {/* Timeline dot */}
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-moss border-4 border-white shadow-md" />

              {/* Content */}
              <div className="pb-8">
                <div className="flex flex-wrap items-baseline gap-3 mb-3">
                  <h3 className="font-serif text-2xl font-semibold text-forest">
                    {exp.title}
                  </h3>
                  {exp.current && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sage/20 text-sage border border-sage/40">
                      Current
                    </span>
                  )}
                </div>

                <p className="text-sage font-medium mb-6">
                  Honda Research Institute • {exp.period}
                </p>

                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className="text-forest/70 leading-relaxed flex gap-4 items-start"
                    >
                      {/* Custom Dash */}
                      <span className="text-moss font-bold text-xl flex-shrink-0 mt-0.5">—</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
