import "./Button.css";

interface Props {
  title: string;
  background: string;
  color: string;
  onClick?: () => void;
}

export default function Button({ title, background, color, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{
        backgroundColor: background,
        color: color
      }}
    >
      {title}
    </button>
  );
}
