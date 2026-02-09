export default function ModalityFusion() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest mb-6 text-center">
          Modality Fusion & VLM Architecture
        </h2>
        <p className="text-center text-forest/70 text-lg mb-16 max-w-3xl mx-auto">
          Bridging tactile sensing expertise with vision-language model innovations
        </p>

        {/* Elegant Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Input (Tactile) */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-px bg-moss/40"></div>
            <div className="pl-8">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-sage/20 text-sage font-semibold text-sm rounded-full mb-4">
                  Input Modality
                </span>
                <h3 className="font-serif text-3xl font-bold text-forest mb-4">
                  Tactile Perception
                </h3>
                <p className="text-forest/70 leading-relaxed mb-6">
                  Deep expertise in tactile sensing and sensor fusion provides the foundation for understanding multimodal data integration.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-moss/30 hover:border-moss/60 transition-colors">
                  <h4 className="font-semibold text-forest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-moss rounded-full"></span>
                    Hardware-Agnostic Representations
                  </h4>
                  <p className="text-sm text-forest/70">
                    Domain randomization frameworks enabling sim-to-real transfer with 65% gap reduction
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-moss/30 hover:border-moss/60 transition-colors">
                  <h4 className="font-semibold text-forest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-moss rounded-full"></span>
                    Vision-Tactile Fusion
                  </h4>
                  <p className="text-sm text-forest/70">
                    220k visuotactile dataset with hierarchical graph neural networks for sensor fusion
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-moss/30 hover:border-moss/60 transition-colors">
                  <h4 className="font-semibold text-forest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-moss rounded-full"></span>
                    HyperTaxel Resolution
                  </h4>
                  <p className="text-sm text-forest/70">
                    3x improvement in tactile sensor resolution through learned representations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Reasoning (VLM/LLM) */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-px bg-moss/40"></div>
            <div className="pl-8">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-forest/10 text-forest font-semibold text-sm rounded-full mb-4">
                  Reasoning Architecture
                </span>
                <h3 className="font-serif text-3xl font-bold text-forest mb-4">
                  VLM & LLM Integration
                </h3>
                <p className="text-forest/70 leading-relaxed mb-6">
                  Applying sensor fusion principles to modify VLM backbones for action-conditioned world models and multimodal reasoning.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-moss/30 hover:border-moss/60 transition-colors">
                  <h4 className="font-semibold text-forest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-moss rounded-full"></span>
                    Custom Projection Layers
                  </h4>
                  <p className="text-sm text-forest/70">
                    Architectural modifications to VLM backbones enabling physical reasoning
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-moss/30 hover:border-moss/60 transition-colors">
                  <h4 className="font-semibold text-forest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-moss rounded-full"></span>
                    Action-Conditioned Models
                  </h4>
                  <p className="text-sm text-forest/70">
                    25% improvement in task success through action-conditioned world models
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-moss/30 hover:border-moss/60 transition-colors">
                  <h4 className="font-semibold text-forest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-moss rounded-full"></span>
                    Low-Latency Reasoning
                  </h4>
                  <p className="text-sm text-forest/70">
                    7x reduction in reasoning latency through architectural optimizations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connection Statement */}
        <div className="mt-16 p-8 bg-white rounded-2xl border border-sage/20 shadow-sm">
          <p className="font-serif text-xl text-center text-forest leading-relaxed">
            "The same principles that enable hardware-agnostic tactile representations{" "}
            <strong className="text-sage">inform the design of multimodal VLM architectures</strong> — creating a unified approach to sensor fusion and reasoning."
          </p>
        </div>
      </div>
    </section>
  );
}
