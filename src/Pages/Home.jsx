import { StarBg } from "@/Components/StarBg";
import { ThemeToggle } from "@/Components/ThemeToggle";
import { Navbar } from "@/Components/Navbar";
import { HeroSection } from "@/Components/HeroSection";
import { AboutSection } from "@/Components/AboutSection";
import { SkillsSection } from "@/Components/SkillsSection";
import { ProjectsSection } from "@/Components/ProjectsSection";

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