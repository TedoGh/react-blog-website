import "./CategoryPosts.css";
import { useParams } from "react-router-dom";
import { Data } from "../../Data/CardData";
import Hero from "../../components/Hero/Hero";
import ContainerWrapper from "../../components/ContainerWrapper/ContainerWrapper";
import PostItemCard from "../../components/PostItemCard/PostItemCard";
import NotFound from "../NotFound/NotFound";

export default function CategoryPosts() {
  const { slug } = useParams<string>();

  const category = Data.find((category) => category.slug === slug);

  if (!category) {
    return <NotFound title="Category Not Found" />;
  }

  document.title = `Category : ${category.title}`;

  return (
    <>
      <Hero title={category.title} subtitle={category.description} />
      <div className="category-posts">
        <ContainerWrapper>
          {category.content.map((post) => {
            return (
              <PostItemCard
                key={post.id}
                slug={category.slug}
                id={post.id}
                date={post.date}
                title={post.title}
                subtitle={post.description}
                imgUrl={post.imageUrl}
              />
            );
          })}
        </ContainerWrapper>
      </div>
    </>
  );
}
