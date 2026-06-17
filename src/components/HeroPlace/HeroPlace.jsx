import './HeroPlace.css'

function HeroPlace() {
    return (
        <section id="heroPlace" className="heroPlace-section">
            <div className="heroPlace-overlay"></div>

            <div className="heroPlace-content">
                <p>
                    criada no litoral do Piau&iacute;
                </p>

                <h3>
                    Onde o vento encontra a mar&eacute;
                </h3>

                <p>
                    A Fluxo Mar&eacute; carrega a leveza do Piau&iacute;: dunas, sol,
                    rio, oceano e o ritmo calmo de quem cria perto da natureza.
                </p>

                <a href="#about">
                    conhecer a origem
                </a>
            </div>
        </section>
    );
}

export default HeroPlace;