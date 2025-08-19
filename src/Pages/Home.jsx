import { StarBg } from "@/Components/StarBg";
import { ThemeToggle } from "@/Components/ThemeToggle";
import { Navbar } from "@/Components/Navbar";
import { HeroSection } from "@/Components/Sections/HeroSection";
import { AboutSection } from "@/Components/Sections/AboutSection";
import { SkillsSection } from "@/Components/Sections/SkillsSection";
import { ProjectsSection } from "@/Components/Sections/ProjectsSection";
import { ContactSection } from "@/Components/Sections/ContactSection";
import { Footer } from "@/Components/Footer";

export const Home = ()=>{
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle/>
            <StarBg/>
            <Navbar/>

            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectsSection/>
                <ContactSection/>
            </main>

            <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap
                    justify-between items-center">
                <Footer/>
            </footer>
        </div>
    );
}