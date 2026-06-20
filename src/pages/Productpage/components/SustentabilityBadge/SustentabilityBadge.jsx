import "./SustentabilityBadge.css";

/**
 * SustentabilityBadge
 * Props:
 *   texto: string  — optional custom message
 */
export default function SustentabilityBadge({
  texto = "Produção consciente · Materiais naturais · Design em movimento",
}) {
  return (
    <div className="sustentability-badge">
      <span className="sustentability-badge__icon">🌊</span>
      <span className="sustentability-badge__text">{texto}</span>
    </div>
  );
}
