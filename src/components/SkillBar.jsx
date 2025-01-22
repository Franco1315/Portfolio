import { useEffect, useRef } from 'react';
import iconHeader from '../assets/icon-header.svg';

const SkillBar = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            const originalContent = container.innerHTML;
            container.innerHTML = originalContent.repeat(10);
        }
    }, []);

    return (
        <div className="bg-secondary w-full absolute bottom-0 overflow-hidden py-2 lg:py-4">
            <div className="scroll-container">
                <div ref={scrollRef} className="scroll-content">
                    <p>Web Design</p>
                    <img src={iconHeader} alt="icono sol" className="w-6 h-6" />
                    <p>App Design</p>
                    <img src={iconHeader} alt="icono sol" className="w-6 h-6" />
                    <p>Web Developer</p>
                    <img src={iconHeader} alt="icono sol" className="w-6 h-6" />
                    <p>UX/UI Design</p>
                    <img src={iconHeader} alt="icono sol" className="w-6 h-6" />
                    <p>Digital Designer</p>
                    <img src={iconHeader} alt="icono sol" className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default SkillBar;

