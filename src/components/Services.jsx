import CardService from './CardService.jsx'
import iconDeveloper from '../assets/developer.svg';
import iconUX from '../assets/ux-ui.svg';
import iconDesign from '../assets/design.svg';

const servicesData = [
    {
        icon: iconDeveloper,
        title: "Frontend Developer",
        description:
            "Experiencia avanzada en HTML, CSS, React, y Tailwind CSS, además me especializo en desarrollar sitios dinámicos y personalizados en WordPress.",
    },
    {
        icon: iconUX,
        title: "UX/UI Designer",
        description:
            "Diseño de interfaces intuitivas, prototipos interactivos y flujos de usuario, enfocándome en la estética, usabilidad y objetivos del proyecto.",
    },
    {
        icon: iconDesign,
        title: "Web Designer",
        description:
            "Especializada en el diseño de páginas modernas y responsive, cuidando tanto la estética como la experiencia del usuario.",
    },
];

const Services = () => {
    return (
        <section id='Services'>
            <div className="bg-primary py-10 lg:py-20 px-5 lg:px-20">
                <div>
                    <p className="text-white">-Servicios</p>
                    <h2 className="text-white"><span className="border-b-2 border-secondary inline-block">Servicios</span> que ofrezco</h2>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 lg:mt-14">
                        {servicesData.map((service, index) => (
                            <CardService key={index} icon={service.icon} title={service.title} description={service.description} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services