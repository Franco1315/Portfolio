import CardContact from "./cards/CardContact"
import iconLikedin from '../assets/svg/linkedin.svg';
import iconMovil from '../assets/svg/movil.svg';
import iconMail from '../assets/svg/mail.svg';

const contactData = [
    {
        icon: iconLikedin,
        title: "Linkedin",
        linkText: "María Franco",
        link: "https://www.linkedin.com/in/mariafrancooviedo/",
    },
    {
        icon: iconMovil,
        title: "Número telefonico",
        linkText: "+34624772832",
        link:"tel:+34624772832",
    },
    {
        icon: iconMail,
        title: "E-mail",
        linkText: "mariafrancooviedo@gmail.com",
        link:"mailto:mariafrancooviedo@gmail.com",
    },
];

const Contact = () => {
    return (
        <section id="Contact">
            <div className="bg-primary px-5 lg:px-20 py-10 lg:py-20">
                <div>
                    <p className="text-white">-Contacto</p>
                    <h2 className='font-medium text-white leading-tight'>Puedes contactarme por estos medios</h2>
                    <p className="mt-2 text-white">Me encantaría saber de ti, puedes contactarme a través de estos medios, estaré encantada de responderte</p>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:mt-14">
                        {contactData.map((contact, index) => (
                            <CardContact key={index} icon={contact.icon} title={contact.title} linkText={contact.linkText} link={contact.link} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact 
