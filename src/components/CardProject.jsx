import IconArrow from '../assets/icon-arrow.svg';

const CardProject = ({ link, image, title, tags = [] }) => {
    return (
        <div className="bg-white rounded-lg p-4 lg:p-8 shadow-xl transition-transform duration-300 hover:scale-105 relative">
            <a href={link} className='inset-0 absolute w-full h-full' target='_blank'></a>
            <img src={image} alt={title} className="aspect-[16/9] w-full object-contain rounded-md" />
            <h3 className="mb-4 text-xl font-semibold mt-2">{title}</h3>
            <div className="flex gap-2 flex-wrap">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-primary px-4 py-1 text-white text-sm rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex w-full justify-end items-end mt-4">
                <img src={IconArrow} alt="Icono flecha" className='w-10 h-10'/>
            </div>
        </div>
    );
};

export default CardProject;
