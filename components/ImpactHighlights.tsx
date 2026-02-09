export default function ImpactHighlights() {
  const highlights = [
    {
      value: "7x",
      label: "Reasoning Latency Reduction",
      description: "Through custom VLM architecture optimization",
    },
    {
      value: "65%",
      label: "Sim-to-Real Gap Reduction",
      description: "Physics-informed domain randomization in Unreal Engine",
    },
    {
      value: "25%",
      label: "Task Success Improvement",
      description: "Action-conditioned world models for physical reasoning",
    },
    {
      value: "3x",
      label: "Tactile Resolution Enhancement",
      description: "HyperTaxel hyper-resolution technique",
    },
  ];

  return (
    <section className="py-24 px-6 bg-oatmeal">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest mb-16 text-center">
          Impact Highlights
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-2xl border border-sage/30 hover:border-sage/60 transition-all hover:shadow-lg"
            >
              {/* Value in Serif */}
              <div className="font-serif text-5xl md:text-6xl font-bold text-sage mb-3">
                {highlight.value}
              </div>

              {/* Label */}
              <h3 className="font-semibold text-forest mb-3 text-lg leading-tight">
                {highlight.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-forest/70 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Patent Status Pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-sage/10 border border-sage/30 rounded-full">
            <span className="w-2 h-2 bg-sage rounded-full animate-pulse"></span>
            <span className="font-semibold text-forest text-sm">
              2 Patents Filed (2025)
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-moss/10 border border-moss/30 rounded-full">
            <span className="w-2 h-2 bg-moss rounded-full"></span>
            <span className="font-semibold text-forest text-sm">
              VLM-based Failure Reasoning
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-moss/10 border border-moss/30 rounded-full">
            <span className="w-2 h-2 bg-moss rounded-full"></span>
            <span className="font-semibold text-forest text-sm">
              Context-Aware Multimodal Action Planning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
