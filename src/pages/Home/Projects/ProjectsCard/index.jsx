import { HiArrowRight } from "react-icons/hi";

export default function ProjectCard({
    title,
    description,
    icon: Icon,
    href,
}) {
    return (
        <a
            href={href}
            className="
                group
                flex
                flex-col
                flex-shrink-0

                w-[230px]
                md:w-auto
                h-[200px]

                border
                border-[#1f1f1f]/20

                p-6

                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-accent"
        >
            <div>
                <Icon className="mb-3 text-3xl text-[#033661]" />

                <h3 className="mb-3 font-serif text-base">
                    {title}
                </h3>
            </div>

            <p className="text-sm leading-4 text-foreground-muted">
                {description}
            </p>

            <div className="mt-auto flex justify-end pt-1">
                <HiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
            </div>
        </a>
    );
}