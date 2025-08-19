import { File } from "lucide-react";
import cvFile from '@/assets/Vašut-cv.pdf';
import zivotopisFile from '@/assets/Vašut-životopis.pdf';

export const AboutSection = ()=>{
    return(
        <section id="about" className=" py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-foreground">About</span>&nbsp;
                    <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web Developer
                        </h3>
                        <p className="text-muted-foreground">
                            I'm passionate about creating elegant solutions to complex problems,
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 p-4 justify-center">
                            <a href="#contact" className="cosmic-btn">
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <a className="gradient-border p-6 card-hover hover:cursor-pointer" href={cvFile}
                            download={'Vašut-cv.pdf'}>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <File className="h-6 w-6 text-primary"/>
                                </div>
                                <span className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Get My CV (English)
                                    </h4>
                                </span>
                            </div>
                        </a>

                        <a className="gradient-border p-6 card-hover hover:cursor-pointer" href={zivotopisFile}
                            download={'Vašut-životopis.pdf'}>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <File className="h-6 w-6 text-primary"/>
                                </div>
                                <span className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Get My CV (Czech)
                                    </h4>
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};