import { StarBg } from "@/Components/StarBg";
import { ThemeToggle } from "@/Components/ThemeToggle";
import { Navbar } from "@/Components/Navbar";
import { HeroSection } from "@/Components/Sections/HeroSection";
import { AboutSection } from "@/Components/Sections/AboutSection";
import { SkillsSection } from "@/Components/Sections/SkillsSection";
import { ProjectsSection } from "@/Components/Sections/ProjectsSection";

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
            </main>
        </div>
    );
}