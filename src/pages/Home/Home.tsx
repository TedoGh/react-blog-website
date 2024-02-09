import Hero from "../../components/Hero/Hero";
import Posts from "../../components/Posts/Posts";
export default function Home() {
  document.title = "Home Page";

  return (
    <>
      <Hero
        title="Minimal blog template for creative expressions"
        subtitle="100% customisable and SEO-friendly blog template
        for personal and commercial purposes."
      />
      <Posts />
    </>
  );
}
