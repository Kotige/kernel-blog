import projects from "../../../data/projects";
import ProjectCard from "./ProjectsCard";

export default function Projects() {
    return (
        <section id="projects"
            className="border-t border-border">
            <div
                className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col gap-2 mb-10">
                    <span className="text-xs tracking-[0.25em] uppercase text-[#033661] font-semibold">
                        Projetos
                    </span>

                    <div className=" w-8 h-[2px] bg-[#033661]"/>
                </div>

                <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-5 md:overflow-visible">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="snap-start"
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}