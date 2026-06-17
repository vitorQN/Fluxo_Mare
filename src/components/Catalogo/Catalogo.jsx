import './Catalogo.css';
import * as images from '../../assets/images'

function Catalogo() {

    
  const catalogItems = [
    {
      name: "Acessórios",
      description: "Proteção para celular com estampas inspiradas no mar.",
      image:
        `${images.foto37}`,
    },
    {
      name: "Bolsas",
      description: "Bolsas leves para praia, rotina e movimento.",
      image:
        `${images.foto34}`,
    },
    {
      name: "Camisetas",
      description: "Básicos confortáveis com identidade Fluxo Maré.",
      image:
        `${images.foto32}`,
    },
    {
      name: "Shorts",
      description: "Modelagens práticas para dias solares.",
      image:
        `${images.foto33}`,
    },
    {
      name: "Calças",
      description: "Peças fluidas para acompanhar todos os fluxos.",
      image:
        `${images.foto38}`,
    },
  ];

    return (
        <section id="catalogo">
            <div className="catalogo-header">
                <p>
                    catálogo
                </p>

                <h3>
                    Produtos Para o Seu Fluxo
                </h3>

                <p className="catalogo-description">
                    Explore as categorias da Fluxo Maré: capinhas, bolsas, camisetas,
                    shorts e calças pensadas para movimento, conforto e estilo.
                </p>
            </div>

            <div className="catalogo-grid">
                {catalogItems.map((item) => (
                    <a
                        key={item.name}
                        href="#collection"
                        className="catalogo-card"
                    >
                        <div className="catalogo-image">
                            <img
                                src={item.image}
                                alt={item.name}
                            />
                        </div>

                        <div className="catalogo-info">
                            <h4>
                                {item.name}
                            </h4>

                            <p>
                                {item.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Catalogo;