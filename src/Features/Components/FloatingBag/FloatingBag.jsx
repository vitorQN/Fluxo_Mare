import './FloatingBag.css';


function FloatingBag() {
    return (
         <a
        href="#catalogo"
        className="floating-bag"
        aria-label="Abrir catálogo"
      >
        <span className="floating-bag-handle"></span>
        <span className="floating-bag-body"></span>
      </a>
    );
}

export default FloatingBag;