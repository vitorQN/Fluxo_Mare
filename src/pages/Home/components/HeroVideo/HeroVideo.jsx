import './HeroVideo.css'
import * as images from "../../../../assets/images";

function HeroVideo() {
    return (
        <section className="heroVideo">
            
            <div className="heroVideo-bg">
                <video
                    className="heroVideo-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={images.videoPro} type="video/mp4" />
                </video>
            </div>


            <div className="heroVideo-content">
                <h2>Fluxo Maré</h2>
                <p>
                    tudo que flui encontra o oceano</p>
            </div>
        </section>
    );
}

export default HeroVideo;