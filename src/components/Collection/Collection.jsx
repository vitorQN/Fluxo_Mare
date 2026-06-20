import { useContext, useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Collection.css'
import Products from '../../Features/Components/Products';


function Collection({ products }) {

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
        <section id="collection">
            <div>
                <div className="collection-header">
                    <div ref={historyContentRef}
                        className={`history-content scroll-fade-in ${isHistoryContentVisible ? "is-visible" : ""
                            }`}>
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
                    
                    <Products ref={collectionTrackRef} />
                    
                </div>
            </div>
        </section>
    );
}

export default Collection;