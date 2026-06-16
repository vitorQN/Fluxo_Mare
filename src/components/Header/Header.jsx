import './Header.css'
import '../../App.css'
import { useState } from 'react';
import * as images from '../../assets/images';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div>
                <div className="header-logo">
                    <img src={images.logoazul} alt="Fluxo Mare logo" />
                </div>

                <div>
                    <h1>
                        Fluxo Maré
                    </h1>
                    <p>
                        tudo que flui encontra o oceano
                    </p>
                </div>

                <nav className="desktop-nav">
                    <a href="#collection">coleção</a>
                    <a href="#catalogo">catálogo</a>
                    <a href="#about">sobre</a>
                    <a href="#history">nossa história</a>
                    <a href="#sustainability">sustentabilidade</a>
                    <a href="#contact">contato</a>
                </nav>

                <button
                    type="button"
                    className={`mobile-menu-button ${isMenuOpen ? "is-open" : ""}`}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <nav id="mobile-menu" className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}>
                <a href="#collection" onClick={() => setIsMenuOpen(false)}>coleção</a>
                <a href="#catalogo" onClick={() => setIsMenuOpen(false)}>catálogo</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>sobre</a>
                <a href="#piaui" onClick={() => setIsMenuOpen(false)}>Piauí</a>
                <a href="#history" onClick={() => setIsMenuOpen(false)}>nossa história</a>
                <a href="#sustainability" onClick={() => setIsMenuOpen(false)}>sustentabilidade</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>contato</a>
            </nav>
        </header>
    );
}

export default Header;