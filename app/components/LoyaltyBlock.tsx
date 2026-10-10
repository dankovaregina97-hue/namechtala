import { loyalty } from "../content";
import { Reveal } from "./Reveal";

// Система лояльности: лестница кэшбэка, три бонуса и условия. Тексты правятся в админке.
export function LoyaltyBlock() {
  return (
    <div className="loyalty">
      <Reveal>
        <h2 className="loyalty-subtitle">{loyalty.cashbackTitle}</h2>
      </Reveal>
      <ol className="ladder">
        {loyalty.tiers.map((tier, index) => (
          <Reveal as="li" delay={index * 110} key={tier.percent} className="ladder-step">
            <span className="ladder-percent">{tier.percent}</span>
            <span className="ladder-condition">{tier.condition}</span>
          </Reveal>
        ))}
      </ol>

      <ul className="perks">
        {loyalty.perks.map((perk, index) => (
          <Reveal as="li" delay={index * 110} key={perk.title} className="perk">
            <span className="label">{perk.title}</span>
            <span className="perk-value">{perk.value}</span>
            <p className="perk-text">{perk.text}</p>
          </Reveal>
        ))}
      </ul>

      {loyalty.rules.length > 0 ? (
        <Reveal className="loyalty-rules">
          {loyalty.rules.map((rule) => (
            <p key={rule}>{rule}</p>
          ))}
        </Reveal>
      ) : null}
    </div>
  );
}
