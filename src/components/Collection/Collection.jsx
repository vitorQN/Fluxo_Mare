import { useContext, useRef } from "react";
import './Collection.css'
import Products from '../../Features/Components/Products';


function Collection() {

    const collectionTrackRef = useRef(null);
    const scrollCollection = (direction) => {
        const track = collectionTrackRef.current;

        if (!track) {
            return;
        }

        const card = track.querySelector(".product-card");
        const gap = 28;
        const cardWidth = card ? card.offsetWidth + gap : track.clientWidth;

        track.scrollBy({
            left: direction * cardWidth,
            behavior: "smooth",
        });
    };



    return (
        <section id="collection">
            <div>
                <div className="collection-header">
                    <div>
                        <p>
                            coleção
                        </p>

                        <h3>
                            Para Todos os Fluxos
                        </h3>
                    </div>

                </div>

                <div className="collection-carousel">
                    <div className="carousel-controls">
                        <button
                            type="button"
                            aria-label="Produto anterior"
                            onClick={() => scrollCollection(-1)}
                        >
                            ‹
                        </button>

                        <button
                            type="button"
                            aria-label="Próximo produto"
                            onClick={() => scrollCollection(1)}
                        >
                            ›
                        </button>
                    </div>

                    <Products ref={collectionTrackRef}/>

                </div>
            </div>
        </section>
    );
}

export default Collection;