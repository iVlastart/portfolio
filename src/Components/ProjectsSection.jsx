import { Title } from "./Title";

const projects = [
    {
        id: 1,
        title: 'LibreIo',
        description: 'A web app where you can upload and share your videos with others',
        image: '/projects/LibreIo.webp',
        tags: ['Laravel', 'PHP', 'HTML', 'Tailwind CSS', 'JavaScript'],
        github: 'https://github.com/iVlastart/LibreIo'
    }
];

export const ProjectsSection = ()=>{
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <Title part1='Featured' part2='Projects'/>

                <p className="text-center mb-12 max-w-2xl mx-auto">
                    Here are some of personal projects. More projects coming in in the future...
                </p>
            </div>
        </section>
    )
};