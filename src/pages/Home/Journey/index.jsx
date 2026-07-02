import { useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

import journeyData from "../../../data/journeyData";

import JourneyConnections from "./components/JourneyConnections";
import JourneyNode from "./components/JourneyNode";
import JourneyCard from "./components/JourneyCard";

export default function Journey() {
    const [activeNode, setActiveNode] = useState(null);

    const selectedNode = journeyData.find(
        (node) => node.id === activeNode
    );

    const handleNodeClick = (id) => {
        setActiveNode((prev) => (prev === id ? null : id));
    };

    return (
        <section className="relative w-full h-[600px] overflow-hidden">

            {/* Conexões */}
            <JourneyConnections
                nodes={journeyData}
                activeNode={activeNode}
            />

            {/* Estrelas */}
            {journeyData.map((node) => (
                <JourneyNode
                    key={node.id}
                    node={node}
                    active={activeNode === node.id}
                    onClick={() => handleNodeClick(node.id)}
                />
            ))}

            <AnimatePresence>

                {selectedNode && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 z-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveNode(null)}
                        />

                        {/* Card */}
                        <JourneyCard
                            node={selectedNode}
                        />
                    </>
                )}

            </AnimatePresence>

        </section>
    );
}