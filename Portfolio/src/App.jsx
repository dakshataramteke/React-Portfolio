import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;