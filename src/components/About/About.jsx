import { useEffect, useRef, useState } from "react";
import './About.css'
import * as images from "../../assets/images"

const About = () => {

    const historyContentRef = useRef(null);
        const [isHistoryContentVisible, setIsHistoryContentVisible] = useState(false);
    
        useEffect(() => {
            const historyContent = historyContentRef.current;
    
            if (!historyContent) {
                return undefined;
            }
    
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsHistoryContentVisible(true);
                        observer.unobserve(entry.target);
                    }
                },
                {
                    threshold: 0.25,
                }
            );
    
            observer.observe(historyContent);
    
            return () => {
                observer.disconnect();
            };
        }, []);

    return (
        <section
            id="about"
        >
            <div ref={historyContentRef}
                className={`history-content scroll-fade-in ${isHistoryContentVisible ? "is-visible" : ""
                    }`}>
                <p>
                    Sobre a Fluxo Maré
                </p>

                <h3>
                    O movimento que nos conecta
                </h3>

                <p className="about-description">
                    A Fluxo Maré nasceu do encontro entre design, consciência e
                    natureza. Nossas peças são criadas para gerar impacto positivo,
                    utilizando materiais sustentáveis e produção responsável.
                </p>

                <a href="#history" className="about-button">
                    Saiba Mais
                </a>
            </div>

            <div className="about-image">
                <img
                    src={images.foto5}
                    alt="Woman with eco bag"
                />
            </div>
        </section>


    );
};

export default About;
