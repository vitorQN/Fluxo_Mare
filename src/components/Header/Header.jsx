import './Header.css'
import '../../App.css'
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as images from '../../assets/images';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const navigate = useNavigate();

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
                    {isHomePage && <Link to="/#collection">coleção</Link>}
                    {isHomePage && <Link to="/#catalogo">catálogo</Link>}
                    {isHomePage && <Link to="/#about">sobre</Link>}
                    {isHomePage && <Link to="/#history">nossa história</Link>}
                    {isHomePage && <Link to="/#sustainability">sustentabilidade</Link>}
                    {isHomePage && <Link to="/#contact">contato</Link>}
                </nav>
                {!isHomePage && <button
                        type="button"
                        className="home-button"
                        aria-label="Home"
                        onClick={() => navigate('/')}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 11.5v7a1 1 0 0 0 1 1h3v-5.5a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14 14v5.5h3a1 1 0 0 0 1-1v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>}

                {isHomePage && <button
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
                </button>}
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