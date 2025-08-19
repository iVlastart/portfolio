import { StarBg } from "@/Components/StarBg";
import { ThemeToggle } from "@/Components/ThemeToggle";
import { Navbar } from "@/Components/Navbar";
import { HeroSection } from "@/Components/HeroSection";
import { AboutSection } from "@/Components/AboutSection";

export const Home = ()=>{
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle/>
            <StarBg/>
            <Navbar/>

            <main>
                <HeroSection/>
                <AboutSection/>
            </main>
        </div>
    );
}