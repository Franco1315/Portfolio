import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (!element) return;

        const targetPosition = element.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 700;
        let start = null;

        const animation = (currentTime) => {
            if (!start) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        requestAnimationFrame(animation);
    };

    const handleScroll = (e, id) => {
        e.preventDefault();
        setIsOpen(false);
        setTimeout(() => {
            smoothScroll(id);
        }, 20); 
    };
    
    

    return (
        <nav className="px-5 lg:px-20 pt-6">
            <div className="bg-primary py-2 lg:py-3 flex justify-between items-center px-4 rounded-full">
                {/* Logo */}
                <div className="flex items-center gap-x-4">
                    <div className="bg-secondary rounded-full p-2 w-10 h-10 flex items-center justify-center">
                        <p className="text-white text-2xl">M</p>
                    </div>
                    <h1 className="text-white font-bold text-xl lg:text-2xl">María Franco</h1>
                </div>

                {/* Menú en desktop */}
                <ul className="hidden md:flex items-center gap-4 text-white font-medium">
                    <li><a href="#Aboutmi" onClick={(e) => handleScroll(e, "#Aboutmi")}>Sobre mí</a></li>
                    <li><a href="#Services" onClick={(e) => handleScroll(e, "#Services")}>Servicios</a></li>
                    <li><a href="#Portfolio" onClick={(e) => handleScroll(e, "#Portfolio")}>Portfolio</a></li>
                    <li className="bg-white py-1 px-3 rounded-full text-primary font-semibold">
                        <a href="#Contact" onClick={(e) => handleScroll(e, "#Contact")}>Contáctame</a>
                    </li>
                </ul>

                {/* Botón de menú hamburguesa en mobile */}
                <button
                    className="md:hidden text-white text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </motion.div>
                </button>
            </div>

            {/* Menú desplegable en mobile con animación */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-primary mt-2 rounded-lg p-4 shadow-lg"
                    >
                        <ul className="flex flex-col gap-4 text-white text-center font-medium">
                            <li><a href="#Aboutmi" onClick={(e) => handleScroll(e, "#Aboutmi")}>Sobre mí</a></li>
                            <li><a href="#Services" onClick={(e) => handleScroll(e, "#Services")}>Servicios</a></li>
                            <li><a href="#Portfolio" onClick={(e) => handleScroll(e, "#Portfolio")}>Portfolio</a></li>
                            <li className="bg-white py-1 px-3 rounded-full text-primary font-semibold w-fit m-auto">
                                <a href="#Contact" onClick={(e) => handleScroll(e, "#Contact")}>Contáctame</a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;
