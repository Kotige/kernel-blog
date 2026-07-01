import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import kernel from "/kernel-nobg.png";


export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav
            id="navbar"
            className="relative w-full px-4 py-3 bg-background"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* LEFT */}
                <div className="flex">
                    <a href="/">
                        <div className="flex items-center relative">
                            
                            <motion.img
                                src={kernel}
                                alt="kernel logo"
                                className="w-[1.2rem] z-1"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                            />

                            <motion.span
                                className="absolute -left-8 z-20 ps-13 text-xl font-serif text-[#011d36]"
                                initial={{ opacity: 0, x: -10 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.35 }}
                            >
                                Kernel
                            </motion.span>
                        </div>
                    </a>

                    {/* NavLinks */}
                    <div className="hidden md:flex items-center gap-6 ml-30">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/posts">Posts</NavLink>
                        <NavLink href="/posts">Changelog</NavLink>
                        <NavLink href="/autor">Autor</NavLink>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center">
                    {/* Hamburger */}
                    <motion.button
                        onClick={() => setOpen(!open)}
                        className="text-muted mobile p-2 rounded-md lg:hidden"
                        whileTap={{ scale: 0.92 }}
                        animate={{ rotate: open ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {open ? <HiX size={22} /> : <HiMenu size={22} />}
                    </motion.button>

                    {/* Desktop icons */}
                    <div className="hidden lg:flex items-center gap-5 ml-4">
                        <SocialIcon href="https://github.com/Kotige">
                            <FaGithub />
                        </SocialIcon>
                        <SocialIcon href="https://www.instagram.com/modvestudio/">
                            <FaInstagram />
                        </SocialIcon>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex absolute bottom-0 left-0 w-full h-[1.1px] bg-gradient-to-r from-transparent via-[#011D36]/40 to-transparent blur-[0.5px]" />

        </nav>
    );
}

function SocialIcon({ children, href = "#" }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            className="text-xl text-muted hover:text-[#2070B0]"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
        >
            {children}
        </motion.a>
    );
}

function NavLink({href, children}) {
    return (
        <motion.a
            href={href}
            className="text-sm text-muted hover:text-[#2070B0] hover:font-medium relative inline-block"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {children}
        </motion.a>
    )
}