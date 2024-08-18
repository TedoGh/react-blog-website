import "./styles.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import CategoryPosts from "./pages/CategoryPosts/CategoryPosts";
import PostSingleItem from "./pages/PostSingleItem/PostSingleItem";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="category/:slug" element={<CategoryPosts />} />
        <Route
          path="category/:slug/post/:postId"
          element={<PostSingleItem />}
        />
        <Route path="*" element={<NotFound title="Page Not Found" />} />
      </Routes>
      <Footer />
    </div>
  );
}
