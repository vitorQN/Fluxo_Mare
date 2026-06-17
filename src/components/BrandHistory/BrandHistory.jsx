import { useEffect, useRef, useState } from "react";
import './BrandHistory.css'
import * as images from "../../assets/images";

function BrandHistory() {

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
        <section id="history">
            <div
                ref={historyContentRef}
                className={`history-content scroll-fade-in ${isHistoryContentVisible ? "is-visible" : ""
                    }`}
            >
                <p>
                    nossa história
                </p>

                <h3>
                    Feita no Ritmo da Maré
                </h3>

                <p className="history-description">
                    A Fluxo Maré começou como um desejo simples: criar peças bonitas,
                    úteis e mais conscientes para acompanhar a rotina de quem vive em
                    movimento. Entre praias, feiras e conversas com artesãs brasileiras,
                    transformamos retalhos, fibras naturais e ideias leves em ecobags
                    pensadas para durar.
                </p>

                <div className="history-details">
                    <div>
                        <strong>2026</strong>
                        <span>primeiras peças autorais</span>
                    </div>

                    <div>
                        <strong>Brasil</strong>
                        <span>produção local e cuidadosa</span>
                    </div>

                    <div>
                        <strong>Oceano</strong>
                        <span>inspiração para cada coleção</span>
                    </div>
                </div>
            </div>

            <div className="history-image">
                <img
                    src={images.nossaHistoria}
                    alt="Mesa de criação com tecidos naturais"
                />
            </div>
        </section>
    );
}

export default BrandHistory;