interface ResearchArea {
  title: string;
  description: string;
  highlights: string[];
  icon: string;
}

interface ResearchAreasProps {
  areas: ResearchArea[];
}

export default function ResearchAreas({ areas }: ResearchAreasProps) {
  return (
    <section className="py-16 px-6 bg-white dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-12">
          Research Areas
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border-2 border-neutral-200 dark:border-neutral-800 hover:border-accent-primary/50 transition-colors"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{area.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                {area.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">
                  Key Contributions
                </p>
                <ul className="space-y-1.5">
                  {area.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-neutral-700 dark:text-neutral-300 flex gap-2"
                    >
                      <span className="text-accent-secondary flex-shrink-0">→</span>
                      <span>{highlight}</span>
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
