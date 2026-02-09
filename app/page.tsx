import ProfileHeader from "@/components/ProfileHeader";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Publications from "@/components/Publications";
import TechnicalSkills from "@/components/TechnicalSkills";
import ResearchAreas from "@/components/ResearchAreas";
import {
  experiences,
  publications,
  technicalSkills,
  researchAreas,
} from "@/lib/academicData";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ProfileHeader />
      <Publications publications={publications} />
      <ExperienceTimeline experiences={experiences} />
      <ResearchAreas areas={researchAreas} />
      <TechnicalSkills skills={technicalSkills} />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Snehal S. Dikhale
          </p>
        </div>
      </footer>
    </main>
  );
}
