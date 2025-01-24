import { Link } from 'react-scroll';
import { motion } from 'framer-motion'; // Importamos Framer Motion
import imagenHeader from '../assets/foto-presentation.png';
import CV from '../assets/cv/CV-MARIA-FRANCO.pdf';
import NavBar from './elements/NavBar';
import SkillBar from './elements/SkillBar';

const Header = () => {
    return (
        <header className="relative min-h-screen flex flex-col">
            <NavBar />
            {/* Contenedor header */}
            <div 
                id="Aboutmi" 
                className="px-5 lg:px-20 flex-grow w-full flex flex-col lg:flex-row items-center justify-center relative"
            >
                <motion.div
                    className="lg:mt-0 mt-10 lg:w-[40%] w-full flex flex-col gap-y-4"
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, ease: "easeOut" }} 
                >
                    <div className="font-semibold text-2xl border w-fit px-2 relative">
                        <span>Hello There!</span>
                        <span className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-500 border"></span>
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 border"></span>
                        <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-500 border"></span>
                        <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-500 border"></span>
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-semibold leading-tight title-header">
                        <span className="text-secondary border-b-2 border-secondary inline-block">
                            María Franco
                        </span>
                        <br />Front-end Developer<br /> and Web Designer
                    </h2>
                    <p>
                        Especializada en lenguajes HTML, CSS, JavaScript, framework React, entre otras herramientas y con experiencia avanzada en Figma para el diseño UX/UI.
                    </p>
                    <div className="flex gap-x-4 mt-3">
                        <Link
                            to="Contact"
                            smooth={true}
                            duration={500}
                            className="bg-primary py-2 px-5 cursor-pointer rounded-full text-white transition-all duration-300 hover:bg-secondary"
                        >
                            Contáctame
                        </Link>
                        <a 
                            href={CV} 
                            download="CV-Maria-Franco.pdf" 
                            className="bg-secondary transition-all duration-300 hover:bg-primary py-2 px-5 rounded-full text-white"
                        >
                            Descargar CV
                        </a>
                    </div>
                </motion.div>

                {/* Imagen del header */}
                <motion.div
                    className="lg:w-[60%] w-full flex justify-center lg:justify-end"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <img 
                        src={imagenHeader} 
                        alt="Imagen de Maria Franco" 
                        className="lg:w-[650px] w-[420px] imagen-header max-w-full"
                    />
                </motion.div>
            </div>

            <SkillBar />
        </header>
    );
}

export default Header;
