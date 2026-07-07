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
                                className="absolute -left-8 z-20 ps-13 text-2xl font-serif text-[#011d36]"
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
                        <NavLink href="/changelog">Changelog</NavLink>
                        <NavLink href="/autor">Autor</NavLink>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center">

                    {/* Desktop icons */}
                    <div className="hidden lg:flex items-center gap-5 ml-4">
                        <SocialIcon href="https://github.com/Kotige">
                            <FaGithub />
                        </SocialIcon>
                        <SocialIcon href="https://www.instagram.com/modvestudio/">
                            <FaInstagram />
                        </SocialIcon>
                    </div>

                    {/* Hamburger */}
                    <motion.button
                        onClick={() => setOpen(!open)}
                        className="text-[#011d36] mobile p-2 rounded-md md:hidden"
                        whileTap={{ scale: 0.92 }}
                        animate={{ rotate: open ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {open ? <HiX size={22} /> : <HiMenu size={22} />}
                    </motion.button>
                </div>
            </div>

            <div className="hidden md:flex absolute bottom-0 left-0 w-full h-[1.1px] bg-gradient-to-r from-transparent via-[#011D36]/40 to-transparent blur-[0.5px]" />


{/* Mobile Menu */}

            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 top-[72px] bg-black/20 backdrop-blur-md z-40 md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setOpen(false)}
                        />

                        {/* Menu */}
                        <motion.div
                            className="fixed right-0 top-[72px] bottom-0 w-1/2 bg-page z-50 md:hidden"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 320,
                                damping: 30,
                            }}
                        >
                            <div className="flex flex-col p-8 gap-6">
                                <MobileLink href="/" onClick={() => setOpen(false)}>
                                    Home
                                </MobileLink>

                                <MobileLink href="/posts" onClick={() => setOpen(false)}>
                                    Posts
                                </MobileLink>

                                <MobileLink href="/changelog" onClick={() => setOpen(false)}>
                                    Changelog
                                </MobileLink>

                                <MobileLink href="/autor" onClick={() => setOpen(false)}>
                                    Autor
                                </MobileLink>
                            </div>

                            <div className="flex items-center gap-5 justify-center mt-10">
                                <SocialIcon href="https://github.com/Kotige">
                                    <FaGithub />
                                </SocialIcon>
                                <SocialIcon href="https://www.instagram.com/modvestudio/">
                                    <FaInstagram />
                                </SocialIcon>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
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
            className="text-base text-muted hover:text-[#2070B0] hover:font-medium relative inline-block"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {children}
        </motion.a>
    )
}

function MobileLink({ href, children, onClick }) {
    return (
        <motion.a
            href={href}
            onClick={onClick}
            className="text-lg text-[#1C64A0] font-medium"
            whileHover={{ x: 6 }}
            whileTap={{ scale: 0.97 }}
        >
            {children}
        </motion.a>
    );
}