import iconArrow from '../assets/arrow-contact.svg';

const CardContact = ({ icon, title, linkText, link }) => {
    return (
        <div className="bg-white rounded-lg p-4 lg:p-8 flex flex-col relative">
            <div className='flex items-center gap-4'>
                <div className="bg-[#F5F5F5] rounded-full w-12 h-12 mb-3 flex items-center justify-center shadow-md">
                    <img src={icon} alt={title} />
                </div>
                <div>
                    <h3 className="font-semibold text-lg lg:text-xl cursor-default mb-1">{title}</h3>
                    <a href={link}
                        className="text-lg lg:text-xl text-primary w-full break-words relative"
                        target="_blank">{linkText}
                    </a>
                </div>
            </div>
            <div className="mt-2 flex justify-end pr-32">
                <img src={iconArrow} alt="Arrow" className="w-6 h-6" />
            </div>
            <div className="w-full flex justify-end">
                <a href={link} className="bg-secondary py-2 px-4 rounded-full text-white font-semibold lg:hover:bg-primary transition-all duration-300" target="_blank">Contáctame</a>
            </div>
        </div>
    )
}

export default CardContact
