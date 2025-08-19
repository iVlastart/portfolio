import { ArrowUp } from "lucide-react";

export const Footer = ()=>{
    return(
        <>
            <p className="text-sm text-foreground">
                &copy; {new Date().getFullYear()} Vlasta Vašut 
            </p>
            
            <a href="#hero" className="p-1 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors
                    duration-300 text-primary">
                <ArrowUp/>
            </a>
        </>
    );
};