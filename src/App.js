import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Link } from "react-scroll";
import Home from "./components/Home";
import Me from "./components/Me";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navi from "./components/NavBar";
import Social from "./components/Social";
function App() {
  return (
    <>
    
      <Router>
    <Navi/>
    <Social/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<Me />} />
          {/* <Route path="/socials" element={<Social />} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
