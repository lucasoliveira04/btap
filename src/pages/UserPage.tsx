import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";

export const UserPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="transition-between-sections"></div>

      <ProjectsSection />
      <div className="transition-div"></div>
      <About />
      <Footer />
    </div>
  );
};
