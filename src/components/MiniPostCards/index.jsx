import { motion } from "motion/react";
import Card from "./Card";
import { section } from "motion/react-client";

export default function MiniPost({ posts }) {
    const items = 
        posts.length > 4
            ? [...posts, ...posts]
            : posts;
    
    return (
        <section className="hidden md:block py-6 overflow-hidden">
            <motion.div
                className="flex gap-6 w-max"
                animate={
                    posts.length > 4
                        ? {
                            x: ["0%", "-50%"],
                        }
                        : {}
                }
                transition={{
                    repeat: Infinity, ease: "linear", duration: 30,
                }}
                whileHover={{ animationPlayState: "paused", }}
            >
                {items.map((post, index) => (
                    <Card
                        key={`${post.id}-${index}`}
                        post={post}
                    />
                ))}
            </motion.div>
        </section>
    );
}