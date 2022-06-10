import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Details from "./pages/home/projects/Details";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
