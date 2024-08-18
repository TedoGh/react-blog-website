import "./PostSingleItem.css";
import { Link, useParams } from "react-router-dom";
import { Data } from "../../Data/CardData";
import ContainerWrapper from "../../components/ContainerWrapper/ContainerWrapper";
import Button from "../../components/Button/Button";
import NotFound from "../NotFound/NotFound";
import RelatedPostItems from "../../components/RelatedPostItems/RelatedPostItems";

export default function PostSingleItem() {
  const { slug, postId } = useParams<string>();

  const category = Data.find((category) => category.slug === slug);

  const post = category?.content.find((post) => post.id === Number(postId));

  if (!post || !category) {
    return <NotFound title="Post Not Found" />;
  }

  const previousPost = post.id > 1 && post.id - 1;

  const nextPost = post.id < category.content.length && post.id + 1;

  return (
    <div className="post-item">
      <ContainerWrapper>
        <div className="post-item-content">
          <h1 className="post-item-title">{post.title}</h1>
          <div className="post-item-meta">
            <p className="post-item-date">{post.date}</p>
            <span>•</span>
            <Link className="post-item-category" to={`/category/${slug}`}>
              <p>{category.title}</p>
            </Link>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.rendered }} />
          <div className="post-nav">
            <div>
              {previousPost && (
                <Link to={`/category/${slug}/post/${previousPost}`}>
                  <Button
                    title="Previous Post"
                    background="#1D2939"
                    color="#fff"
                  />
                </Link>
              )}
            </div>
            <div>
              {nextPost && (
                <Link to={`/category/${slug}/post/${nextPost}`}>
                  <Button title="Next Post" background="#1D2939" color="#fff" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </ContainerWrapper>
      <div>
        <RelatedPostItems category={category} PostId={post.id} />
      </div>
    </div>
  );
}
