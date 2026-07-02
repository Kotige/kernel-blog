import { motion } from "motion/react";

export default function JourneyNode({
    node,
    active,
    onClick,
}) {
    const isFeatured = node.featured;

    const handleClick = (e) => {
        e.stopPropagation();
        onClick();
    };

    return (
        <motion.button
            type="button"
            aria-label={node.title}
            onClick={handleClick}
            className="absolute z-30 -translate-x-1/2 -translate-y-1/2 outline-none group"
            style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
            }}
            initial={{
                opacity: 0,
                scale: 0.6,
            }}
            animate={{
                opacity: 1,
                scale: active ? 1.15 : 1,
            }}
            whileHover={{
                scale: active ? 1.2 : 1.08,
            }}
            whileTap={{
                scale: 0.95,
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
        >
            {/* Glow */}
            <motion.span
                className="absolute inset-0 rounded-full"
                animate={{
                    scale: active ? 2.4 : 1.6,
                    opacity: active ? 0.35 : 0,
                }}
                transition={{
                    duration: 0.35,
                }}
                style={{
                    background:
                        "radial-gradient(circle, rgba(32,112,176,.55) 0%, transparent 70%)",
                }}
            />

            {/* Halo */}
            <motion.span
                className="absolute rounded-full border border-[#2070B0]/50"
                style={{
                    width: isFeatured ? 30 : 22,
                    height: isFeatured ? 30 : 22,
                    left: "50%",
                    top: "50%",
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: active ? 1.1 : 1,
                    opacity: active ? 1 : 0.45,
                }}
                transition={{
                    duration: 0.3,
                }}
            />

            {/* Núcleo */}
            <motion.span
                className="relative block rounded-full bg-[#033661]"
                style={{
                    width: isFeatured ? 14 : 9,
                    height: isFeatured ? 14 : 9,
                }}
                animate={{
                    scale: isFeatured
                        ? [1, 1.08, 1]
                        : 1,
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Ano */}
            <motion.span
                className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-xs text-[#033661]"
                animate={{
                    opacity: active ? 1 : 0.65,
                    y: active ? 2 : 0,
                }}
            >
                {node.year}
            </motion.span>
        </motion.button>
    );
}