import "./Posts.css";
import { Data } from "../../Data/CardData";
import PostItemCard from "../PostItemCard/PostItemCard";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Posts() {
  return (
    <div
      style={{
        padding: "80px 0",
        backgroundColor: "#f2f4f7",
        marginTop: "80px",
      }}
    >
      <ContainerWrapper>
        {Data.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <div className="flex justify-between items-center">
                  <Link to={`category/${item.slug}`}>
                    <h1
                      style={{
                        fontFamily: "Graphik",
                        fontWeight: "bold",
                        fontSize: "26px",
                        color: "#1d2939",
                      }}
                    >
                      {item.title}
                    </h1>
                  </Link>
                  <Link to={`category/${item.slug}`}>
                    <Button
                      title="View All"
                      background="#fff"
                      color="#1D2939"
                    />
                  </Link>
                </div>
              </div>
              {item.content.slice(0, 3).map((post, index) => (
                <PostItemCard
                  key={index}
                  slug={item.slug}
                  id={post.id}
                  date={post.date}
                  title={post.title}
                  subtitle={post.description}
                  imgUrl={post.imageUrl}
                />
              ))}
            </div>
          );
        })}
      </ContainerWrapper>
    </div>
  );
}
