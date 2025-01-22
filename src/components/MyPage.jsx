import ImageMockup from '../assets/mockup-portfolio.png';

const MyPage = () => {
    return (
        <div className='relative w-full h-screen'>
            {/* Imagen de fondo */}
            <img 
                src={ImageMockup} 
                className='absolute inset-0 w-full h-full object-cover z-0' 
                alt="Imagen de una computadora con el diseño de la página web"
            />

            {/* Enlace para hacer clic en toda el área */}
            <a 
                href="https://www.figma.com/design/uo1oFV9B3RXH2OEtvXPeVD/Portfolio?node-id=6-47&t=cfospMEx1HDO4AL2-1" 
                className='absolute inset-0 w-full h-full z-10' 
                target='_blank'
            ></a>

            {/* Contenido */}

            
            <div className='absolute top-10 lg:top-20 left-5 lg:left-20 z-20 bg-opacity-50 text-white rounded-lg px-4 py-2'>
                <p>- Mi página web</p>
                <h2 className='font-medium leading-tight'>
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
