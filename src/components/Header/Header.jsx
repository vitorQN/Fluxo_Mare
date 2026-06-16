import './Header.css'
import '../../App.css'
import { useState } from 'react';
import * as images from '../../assets/images';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#f6f1eb]/80 backdrop-blur-md border-b border-[#e6ddd3]">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
                <div className="header-logo">
                    <img src={images.logoazul} alt="Fluxo Mare logo" />
                </div>

                <div className="text-center">
                    <h1 className="text-2xl tracking-[0.4em] uppercase text-[#67605c]">
                        Fluxo Maré
                    </h1>
                    <p className="text-xs tracking-[0.3em] mt-1 text-[#90857d] uppercase">
                        tudo que flui encontra o oceano
                    </p>
                </div>

                <nav className="desktop-nav hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
                    <a href="#collection" className="hover:text-black transition">
                        coleção
                    </a>
                    <a href="#catalogo" className="hover:text-black transition">
                        catálogo
                    </a>
                    <a href="#about" className="hover:text-black transition">
                        sobre
                    </a>
                    <a href="#history" className="hover:text-black transition">
                        nossa história
                    </a>
                    <a href="#sustainability" className="hover:text-black transition">
                        sustentabilidade
                    </a>
                    <a href="#contact" className="hover:text-black transition">
                        contato
                    </a>
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

            <nav
                id="mobile-menu"
                className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}
            >
                <a href="#collection" onClick={() => setIsMenuOpen(false)}>
                    cole&ccedil;&atilde;o
                </a>
                <a href="#catalogo" onClick={() => setIsMenuOpen(false)}>
                    cat&aacute;logo
                </a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                    sobre
                </a>
                <a href="#piaui" onClick={() => setIsMenuOpen(false)}>
                    Piau&iacute;
                </a>
                <a href="#history" onClick={() => setIsMenuOpen(false)}>
                    nossa hist&oacute;ria
                </a>
                <a href="#sustainability" onClick={() => setIsMenuOpen(false)}>
                    sustentabilidade
                </a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                    contato
                </a>
            </nav>
        </header>
    );
}

export default Header;