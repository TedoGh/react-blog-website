import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import CategoryPosts from "./pages/CategoryPosts/CategoryPosts";
import PostSingleItem from "./pages/PostSingleItem/PostSingleItem";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}
