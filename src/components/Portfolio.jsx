import { useState, useEffect, useRef } from 'react';
import CardProject from "./CardProject";
import ImageArchiff from '../assets/archiff.jpg';
import ImageMotostech from '../assets/motostech.jpg';
import ImageZero from '../assets/zeronet.jpg';
import ImageSofafront from '../assets/sofas-fronted.png';
import ImageSofadesign from '../assets/rediseno-sofas.jpg';
import ImageSofaconfi from '../assets/react-configurador.jpg';
import ImageDemo from '../assets/demo.jpg';
import ImagePatacona from '../assets/patacona.png';
import ImageMotoselectricas from '../assets/motoselectricas.jpg';

const projectsData = [
    {
        link: "https://archiff.com/master-en-gestion-y-diseno-de-arquitectura-e-interiorismo",
        image: ImageArchiff,
        title: "Desarrollo Fronted de la landing",
        tags: ["HTML", "Tailwind", "JS", "Wordpress"]
    },
    {
        link: "https://motos.tech/",
        image: ImageMotostech,
        title: "Desarrollo Fronted",
        tags: ["HTML", "Tailwind", "JS", "Wordpress"]
    },
    {
        link: "https://zeronetit.com/en",
        image: ImageZero,
        title: "Desarrollo Fronted de la landing",
        tags: ["HTML", "CSS", "Tailwind", "JS"]
    },
    {
        link: "https://sofavalencia.com/",
        image: ImageSofafront,
        title: "Participación en el desarrollo Fronted",
        tags: ["HTML", "Tailwind", "JS", "Wordpress"]
    }, 
    {
        link: "https://sofavalencia.com/sofas/cabecero-de-cama-modelo-budapest",
        image: ImageSofadesign,
        title: "Rediseño de la página de productos",
        tags: ["Diseño UX/UI", "Figma", "Research"]
    }, 
    {
        link: "https://sofavalencia.com/configurador-descanso?b=f2bc9a4f-b663-4477-86d7-e8385c83dc8b",
        image: ImageSofaconfi,
        title: "Desarrollo Fronted del configurador",
        tags: ["React", "HTML", "Tailwind", "Typescript"]
    }, 
    {
        link: "https://demo.motos.tech/",
        image: ImageDemo,
        title: "Desarrollo Fronted y diseño ",
        tags: ["HTML", "Tailwind", "PHP", "Wordpress"]
    }, 
    {
        link: "https://pataconamotos.com/",
        image: ImagePatacona,
        title: "Desarrollo Fronted",
        tags: ["HTML", "Tailwind", "PHP", "Wordpress"]
    }, 
    {
        link: "https://motoselectricas.tech/",
        image: ImageMotoselectricas,
        title: "Desarrollo Fronted",
        tags: ["HTML", "Tailwind", "PHP", "Wordpress"]
    },
];

const Portfolio = () => {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const portfolioRef = useRef(null);  // Referencia a la sección de portfolio

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleShowMore = () => {
        const newShowAll = !showAll;
        setShowAll(newShowAll);

        if (portfolioRef.current && !newShowAll) {
            portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="Portfolio" ref={portfolioRef}>
            <div className="px-5 lg:px-20 py-10 lg:py-20 bg-white">
                <div>
                    <p>-Mi Portfolio</p>
                    <h2 className="leading-tight">Algunos <span className="border-b-2 border-secondary inline-block text-secondary">proyectos</span> que he realizado</h2>
                    <p className="mt-3">A lo largo de mi carrera como Frontend Developer y Web Designer, he tenido la oportunidad de desarrollar y trabajar en equipo en diversos proyectos desafiantes y emocionantes. Estos son algunos de ellos:</p>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-8 lg:mt-10">
                        {projectsData.slice(0, isMobile && !showAll ? 3 : projectsData.length).map((project, index) => (
                            <CardProject key={index} link={project.link} image={project.image} title={project.title} tags={project.tags} />
                        ))}
                    </div>
                    
                    {isMobile && projectsData.length > 3 && (
                        <div className="flex justify-center mt-6">
                            <button 
                                onClick={handleShowMore}
                                className="bg-primary py-2 px-5 rounded-full text-white text-sm"
                            >
                                {showAll ? "Mostrar menos" : "Mostrar más"}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
