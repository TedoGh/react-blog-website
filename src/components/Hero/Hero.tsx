import "./Hero.css";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";

interface Props {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: Props) {
  return (
    <div className="hero">
      <ContainerWrapper>
        <div className="hero-wrapper">
          <h1 className="hero-title">{title}</h1>
          <h2 className="hero-subtitle">{subtitle}</h2>
        </div>
      </ContainerWrapper>
    </div>
  );
}
