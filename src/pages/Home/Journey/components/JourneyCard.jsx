import { motion } from "motion/react";

export default function JourneyCard({ node }) {
    if (!node) return null;

    return (
        <motion.aside
            initial={{
                opacity: 0,
                x: 30,
                scale: 0.98,
                filter: "blur(10px)",
            }}
            animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                filter: "blur(0px)",
            }}
            exit={{
                opacity: 0,
                x: 30,
                scale: 0.98,
                filter: "blur(10px)",
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
            className="
                absolute
                right-12
                top-1/2
                z-30
                w-full
                max-w-md
                -translate-y-1/2
                rounded-3xl
                border
                border-neutral-200
                bg-white/90
                backdrop-blur-xl
                p-8
                shadow-xl
            "
        >
            <p className="text-xs uppercase tracking-[0.25em] text-[#2070B0]">
                {node.year}
            </p>

            <h3 className="mt-2 text-3xl font-serif text-[#033661]">
                {node.title}
            </h3>

            <p className="mt-2 text-sm text-neutral-500">
                {node.subtitle}
            </p>

            <div className="my-6 h-px bg-neutral-200" />

            <p className="leading-7 text-neutral-700">
                {node.description}
            </p>

            {node.technologies.length > 0 && (
                <>
                    <div className="my-6 h-px bg-neutral-200" />

                    <div className="flex flex-wrap gap-2">
                        {node.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="
                                    rounded-full
                                    border
                                    border-neutral-200
                                    px-3
                                    py-1
                                    text-xs
                                    text-neutral-600
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </>
            )}

            {node.links.length > 0 && (
                <>
                    <div className="my-6 h-px bg-neutral-200" />

                    <div className="flex flex-col gap-3">
                        {node.links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-[#2070B0] transition-colors hover:text-[#033661]"
                            >
                                {link.label} →
                            </a>
                        ))}
                    </div>
                </>
            )}
        </motion.aside>
    );
}