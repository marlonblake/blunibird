import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { sections } from "./content/site.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collection.jsx";
import Piece from "./pages/Piece.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          {Object.entries(sections).map(([type, s]) => (
            <Route key={type} path={"/" + s.path} element={<Collection type={type} />} />
          ))}
          <Route path="/read/:slug" element={<Piece />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
