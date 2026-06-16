import './Hero.css';
import * as images from '../../assets/images';


function Hero() {
     return (
        <section
        className="hero-section"
        style={{
          backgroundImage:
            `url(${images.foto1})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-text">
            <div>
              <p>
                coleção consciente
              </p>

              <h2>
                Leveza em Movimento
              </h2>
            </div>

            <p>
              Ecobags que acompanham o seu fluxo e respeitam a maré.
            </p>

            <a href="#collection" className="hero-button">
              Conheça a Coleção
            </a>
          </div>

        </div>
      </section>
     );
}

export default Hero;