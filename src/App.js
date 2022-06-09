import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
