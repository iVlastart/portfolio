import { StarBg } from "@/Components/StarBg";
import { ThemeToggle } from "@/Components/ThemeToggle";

export const Home = ()=>{
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle/>
            <StarBg/>
        </div>
    );
}