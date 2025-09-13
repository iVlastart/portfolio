import { Title } from "@/Components/partials/Title";
import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'LibreIo',
        description: 'A web app where you can upload and share your videos with others. App is not deployed yet.',
        img: '/projects/LibreIo.webp',
        tags: ['Laravel', 'PHP', 'HTML', 'Tailwind CSS', 'JavaScript'],
        github: 'https://github.com/iVlastart/LibreIo',
        demo: '#'
    },
    {
        id: 2,
        title: 'Portfolio',
        description: 'My personal portfolio',
        img: '/projects/portfolio.webp',
        tags: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
        github: 'https://github.com/iVlastart/portfolio',
        demo: 'https://vlastavasutportfolio.vercel.app/'
    },
    {
        id: 3,
        title: 'Wordle',
        description: 'An app where you have 5 tries to guess the word',
        img: '/projects/Wordle.webp',
        tags: ['React', 'HTML', 'Tailwind CSS', 'TypeScript', 'Node.js', 'JavaScript'],
        github: 'https://github.com/iVlastart/Wordle',
        demo: '#'
    },
    {
        id: 4,
        title: 'QBot',
        description: 'A discord bot that asks you a random question. Good for testing your general knowledge',
        img: '/projects/QBot.webp',
        tags: ['Node.js', 'JavaScript'],
        github: 'https://github.com/iVlastart/QBot',
        demo: '#'
    },
    {
        id: 5,
        title: 'Mouse Clicker',
        description: 'A game where you click a mouse',
        img: '/projects/MouseClicker.webp',
        tags: ['React', 'HTML', 'Tailwind CSS', 'TypeScript'],
        github: 'https://github.com/iVlastart/MouseClicker',
        demo: 'https://mouseclicker.vercel.app/'
    },
];

export const ProjectsSection = ()=>{
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <Title part1='Featured' part2='Projects'/>

                <p className="text-center mb-12 max-w-2xl mx-auto">
                    Here are some of personal projects. More projects coming in in the future...
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        projects.map((project, key)=>(
                            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs
                                    card-hover">
                                <div className="h-48 overflow-hidden">
                                    <img src={project.img} alt={project.title} className="w-full h-full
                                        object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, key)=>(
                                            <span key={key} className="px-2 py-1 text-xs font-medium rounded-full
                                                    text-foreground border border-gray-800">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                

                                    <h3 className="text-xl font-semibold mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-foreground text-sm mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <a href={project.demo} className="text-foreground/80
                                                    hover:text-primary transition-colors duration-300"
                                                    target="_blank">
                                                <ExternalLink size={20}/>
                                            </a>
                                            <a href={project.github} className="text-foreground/80
                                                    hover:text-primary transition-colors duration-300"
                                                    target="_blank">
                                                <GithubIcon size={20}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/iVlastart" target="_blank" className="cosmic-btn w-fit 
                            flex items-center mx-auto gap-2">
                        Check My GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
};