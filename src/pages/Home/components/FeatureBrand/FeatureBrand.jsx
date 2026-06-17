import './FeatureBrand.css'

function FeatureBrand() {

    const features = [
        {
            title: "Sustentável",
            description: "Materiais ecológicos e produção consciente.",
            icon: "♻️",
        },
        {
            title: "Feito no Brasil",
            description: "Valorizamos o que é nosso e quem faz com propósito.",
            icon: "🌎",
        },
        {
            title: "Design Autoral",
            description: "Peças únicas que unem estética e funcionalidade.",
            icon: "♡",
        },
        {
            title: "Conexão com a Natureza",
            description: "Inspiradas na leveza, força e beleza do oceano.",
            icon: "☀",
        },
    ];

    return (
        <section
            id="sustainability"
        >
            {features.map((feature) => (
                <div
                    key={feature.title}
                    className="feature-card"
                >
                    <div>{feature.icon}</div>

                    <h4>
                        {feature.title}
                    </h4>

                    <p>
                        {feature.description}
                    </p>
                </div>
            ))}
        </section>
    )
}
 
export default FeatureBrand;