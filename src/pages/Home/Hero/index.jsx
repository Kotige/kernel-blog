import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaChevronDown } from "react-icons/fa";

import HeroNetwork from "../../../components/HeroNetwork";

export default function Hero( {onFinish} ) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <AnimatePresence onExitComplete={onFinish}>
        {open && (
          <motion.section
            initial={{ y: 0, opacity: 1 }}
            exit={{
              y: "-100vh",
              opacity: 0,
              transition: {
                duration: 1,
                ease: [0.7, 0, 0.2, 1],
              },
            }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-background"
          >
            <div className="absolute inset-0 opacity-60">
              <HeroNetwork />
            </div>

            <div className="relative z-10 max-w-2xl px-6 text-center">

              <motion.p className="lg:text-start lg:ms-6 text-[#033661] text-sm lg:text-base"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                Bem-vindos ao
              </motion.p>

              <motion.h1 className="font-serif text-7xl lg:text-8xl text-[#011d36]"
                initial={{ opacity: 0, y:20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y:0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 1 }}
              >
                Kernel
              </motion.h1>

              <motion.p className="mt-10 text-sm lg:text-base text-[#033661] max-w-md mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                Onde ideias de mundos diferentes colidem
                <br className=""/>
                e criam novas estruturas.
              </motion.p>
            </div>

            <motion.button
              onClick={() => setOpen(false)}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute bottom-10
                z-20
                flex h-12 w-12 
                items-center
                justify-center
                rounded-full
                border
                border-main/40
                bg-background/60
                backdrop-blur
                text-[#033661]
                transition
                hover:scale-110
                hover:border-main
                cursor-pointer
              "
            >
              <FaChevronDown size={16} />
            </motion.button>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}