import ArrowRight from "./svg/ArrowRight";
import Star from "./svg/Star";

const HeroCard = ({ title, icon, text, textColor }) => {
  return (
    <div className="card hero-card group">
      <div className="flex card-title">
        <div className={textColor}>{icon}</div>
        <div className="mx-2">{title}</div>
      </div>
      <div className="card-text">{text}</div>
      <div className={textColor}>
        <div className="hero-card-more">
            <span className="font-bold">Learn More</span>
            <div>
            <ArrowRight />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
