import { Link } from "react-router-dom";
import "./PostItemCard.css";

interface Props {
  slug: string;
  id: number;
  date: string;
  title: string;
  subtitle: string;
  imgUrl: string;
}

export default function PostItemCard({
  slug,
  id,
  date,
  title,
  subtitle,
  imgUrl
}: Props) {
  return (
    <div className="post-card">
      <div className="post-card-content">
        <div className="post-card-info">
          <p className="post-card-date">{date}</p>
          <Link to={`/category/${slug}/post/${id}`}>
            <h1 className="post-card-title">{title}</h1>
          </Link>
          <p className="post-card-description">{subtitle}</p>
        </div>
        <img
          src={imgUrl}
          width="300px"
          height="212px"
          alt={title}
          style={{ borderRadius: "20px" }}
        />
      </div>
    </div>
  );
}
