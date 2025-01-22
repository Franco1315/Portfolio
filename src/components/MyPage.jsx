import ImageMockup from '../assets/mockup-portfolio.png';
import ImageMockupMobile from '../assets/mockup-portfolio-mobile.jpg';

const MyPage = () => {
    return (
        <div className='relative w-full lg:h-screen overflow-hidden'>
            {/* Imagen de fondo en desktop */}
            <img 
                src={ImageMockup} 
                className='absolute inset-0 w-full h-full object-cover lg:block hidden z-0' 
                alt="Imagen de una computadora con el diseño de la página web"
            />

            {/* Imagen de fondo en mobile */}
            <div className="w-full h-full block lg:hidden bg-black">
                <img 
                    src={ImageMockupMobile} 
                    className="object-cover z-0" 
                    alt="Imagen de una computadora con el diseño de la página web"
                />
            </div>

            {/* Enlace para hacer clic en toda el área */}
            <a 
                href="https://www.figma.com/design/uo1oFV9B3RXH2OEtvXPeVD/Portfolio?node-id=6-47&t=cfospMEx1HDO4AL2-1" 
                className='absolute inset-0 w-full h-full z-10' 
                target='_blank'
            ></a>

            {/* Contenido */}
            <div className='absolute top-4 md:top-16 lg:top-20 left-5 lg:left-20 z-20 text-white rounded-lg px-6 py-4'>
                <p> Mi página web</p>
                <h2 className='font-semibold leading-tight'>
                    Puedes ver el diseño de mi página 
                    <span className="border-b-2 border-secondary inline-block text-secondary transition-all duration-300 hover:border-primary hover:text-primary mx-2">
                        <a href="https://www.figma.com/design/uo1oFV9B3RXH2OEtvXPeVD/Portfolio?node-id=6-47&t=cfospMEx1HDO4AL2-1" target='_blank'>aquí</a>
                    </span>
                </h2>
            </div>
        </div>
    );
}

export default MyPage;
