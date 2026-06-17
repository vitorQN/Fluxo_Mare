import React from 'react';
import './About.css'
import * as images from "../../assets/images"

const About = () => {
    return (
        <section
            id="about"
        >
            <div>
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
