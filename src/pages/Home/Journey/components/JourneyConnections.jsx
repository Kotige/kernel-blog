import { motion } from "motion/react";

export default function JourneyConnections({
    nodes,
    activeNode,
}) {
    // Procura um nó pelo id
    const findNode = (id) => nodes.find((node) => node.id === id);

    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            {nodes.flatMap((node) =>
                node.connections.map((connectionId) => {
                    const target = findNode(connectionId);

                    if (!target) return null;

                    const x1 = node.position.x;
                    const y1 = node.position.y;

                    const x2 = target.position.x;
                    const y2 = target.position.y;

                    /**
                     * Ponto de controle para gerar
                     * uma curva suave.
                     */
                    const controlX = (x1 + x2) / 2;

                    const controlY =
                        (y1 + y2) / 2 -
                        Math.abs(x2 - x1) * 0.15;

                    const isHighlighted =
                        activeNode === node.id ||
                        activeNode === target.id;

                    return (
                        <motion.path
                            key={`${node.id}-${connectionId}`}
                            d={`
                                M ${x1},${y1}
                                Q ${controlX},${controlY}
                                ${x2},${y2}
                            `}
                            fill="none"
                            stroke={
                                isHighlighted
                                    ? "#2070B0"
                                    : "#d7d7d7"
                            }
                            strokeWidth={
                                isHighlighted
                                    ? 0.45
                                    : 0.28
                            }
                            strokeLinecap="round"
                            initial={{
                                pathLength: 0,
                                opacity: 0,
                            }}
                            animate={{
                                pathLength: 1,
                                opacity: isHighlighted
                                    ? 1
                                    : 0.55,
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })
            )}
        </svg>
    );
}