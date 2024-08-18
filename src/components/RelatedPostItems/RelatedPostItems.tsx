import PostItemCard from "../PostItemCard/PostItemCard";
import { Category } from "../../data/CardData";

interface Props {
  category: Category;
  PostId: number;
}

export default function RelatedPostItems({ category, PostId }: Props) {
  const releatedPosts = category.content.filter((post) => post.id !== PostId);

  return (
    <div className="container">
      <h1>Recommended articles</h1>
      {releatedPosts.slice(0, 3).map((post, index) => {
        return (
          <div>
            <PostItemCard
              key={index}
              slug={category.slug}
              id={post.id}
              date={post.date}
              title={post.title}
              subtitle={post.description}
              imgUrl={post.imageUrl}
            />
          </div>
        );
      })}
    </div>
  );
}
