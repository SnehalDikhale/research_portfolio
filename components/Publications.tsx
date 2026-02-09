interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  badge?: "ICRA" | "IROS" | "IEEE RAL" | "Submitted";
  pdf?: string;
  code?: string;
  video?: string;
  image?: string;
}

interface PublicationsProps {
  publications: Publication[];
}

export default function Publications({ publications }: PublicationsProps) {
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "ICRA":
        return "bg-sage/20 text-sage border-sage/40";
      case "IROS":
        return "bg-moss/20 text-moss border-moss/40";
      case "IEEE RAL":
        return "bg-forest/10 text-forest border-forest/20";
      case "Submitted":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-sage/10 text-sage border-sage/20";
    }
  };

  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest mb-16 text-center">
          Selected Publications
        </h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <article
              key={index}
              className="grid md:grid-cols-[200px_1fr] gap-6 p-6 bg-white/80 rounded-xl border border-sage/20 hover:border-sage/60 transition-all hover:shadow-md items-start"
            >
              {/* Image */}
              {pub.image && (
                <div className="hidden md:block">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="w-full rounded-lg border border-sage/20 object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div>
                {/* Title */}
                <h3 className="text-lg font-semibold text-forest mb-2 leading-snug">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="text-forest/70 mb-2 text-sm">
                  {pub.authors}
                </p>

                {/* Venue and Badge */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <p className="text-sm italic text-forest/60">
                    {pub.venue}, {pub.year}
                  </p>
                  {pub.badge && (
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getBadgeColor(
                        pub.badge
                      )}`}
                    >
                      {pub.badge}
                    </span>
                  )}
                </div>

                {/* Links */}
                {(pub.pdf || pub.code || pub.video) && (
                  <div className="flex gap-4">
                    {pub.pdf && (
                      <a
                        href={pub.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-sage hover:text-forest font-medium inline-flex items-center gap-1.5 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        PDF
                      </a>
                    )}
                    {pub.video && (
                      <a
                        href={pub.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-sage hover:text-forest font-medium inline-flex items-center gap-1.5 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Video
                      </a>
                    )}
                    {pub.code && (
                      <a
                        href={pub.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-sage hover:text-forest font-medium inline-flex items-center gap-1.5 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
