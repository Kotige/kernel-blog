import { motion } from "motion/react";
import { article } from "motion/react-client";

export default function Card({ post }) {
    return (
        <motion.article
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="w-[300px] h-[120px] border border-[#9aa5b8]/5 bg-[#b2bdd1]/40 flex items-center gap-4 p-3 shrink-0 cursor-pointer"
        >
            <img 
                src={post.image} 
                alt={post.title} 
                className="h-24 w-24 object-cover shrink-0"
            />

            <div className="fle flex-col justify-between h-full py-1">
                <h3 className="text-lg leading-tight text-main line-clamp-3">
                    {post.title}
                </h3>

                <span className="text-sm text-muted">
                    {post.date}
                </span>
            </div>
        </motion.article>
    )
}