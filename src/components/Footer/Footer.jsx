import './Footer.css'

function Footer() {
    return (
        <footer id="contact">
            <div>
                <div>
                    <h2>
                        Fluxo Maré
                    </h2>
                    <p>
                        Design em movimento inspirado pela natureza e pelo oceano.
                    </p>
                </div>

                <div>
                    <h4>
                        Institucional
                    </h4>

                    <ul>
                        <li>Sobre</li>
                        <li>Sustentabilidade</li>
                        <li>Produções</li>
                        <li>Contato</li>
                    </ul>
                </div>

                <div>
                    <h4>
                        Ajuda
                    </h4>

                    <ul>
                        <li>Trocas e devoluções</li>
                        <li>Envio e prazos</li>
                        <li>Perguntas frequentes</li>
                        <li>Política de privacidade</li>
                    </ul>
                </div>

                <div>
                    <h4>
                        Receba Novidades
                    </h4>

                    <div className="newsletter">
                        <input
                            type="email"
                            placeholder="Seu e-mail"
                        />
                        <button>→</button>
                    </div>

                    <div className="socials">
                        <a
                            href="https://www.instagram.com/claudio_henri00/"
                            aria-label="Instagram"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <rect x="3" y="3" width="18" height="18" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="1" />
                            </svg>
                        </a>

                        <a
                            href="https://twitter.com/"
                            aria-label="Twitter"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M4 4l11.2 16H20L8.8 4H4z" />
                                <path d="M4.5 20L20 4" />
                            </svg>
                        </a>

                        <a
                            href="https://www.tiktok.com/"
                            aria-label="TikTok"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M14 4v10.2a4.3 4.3 0 1 1-3.6-4.2" />
                                <path d="M14 4c.4 3.2 2.2 5 5 5.4" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                © 2026 Fluxo Maré. Todos os direitos reservados.
            </div>
        </footer>
    );
}

export default Footer;