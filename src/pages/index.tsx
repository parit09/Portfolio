import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import AchievementsSection from '@/components/AchievementsSection';
import CertificatesSection from '@/components/CertificatesSection';
import FooterSection from '@/components/FooterSection';
import MedievalSword3D from '@/components/MedievalSword3D';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 3D Sword Background Element */}
      <MedievalSword3D />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <CertificatesSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
