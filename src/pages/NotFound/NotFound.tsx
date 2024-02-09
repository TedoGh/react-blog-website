import "./NotFound.css";
import ContainerWrapper from "../../components/ContainerWrapper/ContainerWrapper";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
}

export default function NotFound({ title }: Props) {
  const navigate = useNavigate();
  const navigateClick = () => {
    navigate(-1);
  };
  document.title = `${title}`;
  return (
    <div className="notfound">
      <ContainerWrapper>
        <div className="notfound-wrapper">
          <h1>{title}</h1>
          <Button
            title="Go to Back"
            background="#1D2939"
            color="#fff"
            onClick={navigateClick}
          />
        </div>
      </ContainerWrapper>
    </div>
  );
}
