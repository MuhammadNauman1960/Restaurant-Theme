import "./App.css";
import Navbar from "./mycomponents/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./mycomponents/Home";
import About from "./mycomponents/About";
import Menu from "./mycomponents/Menu";
import Specials from "./mycomponents/Specials";
import Events from "./mycomponents/Events";
import Chefs from "./mycomponents/Chefs";
import Gallery from "./mycomponents/Gallery";
import Contact from "./mycomponents/Contact";
import Footer from "./mycomponents/Footer";
import BookTable from "./mycomponents/BookTable";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exit path="/about" element={<About />}></Route>
          <Route exit path="/contact" element={<Contact />}></Route>
          <Route exit path="/chefs" element={<Chefs />}></Route>
          <Route exit path="/events" element={<Events />}></Route>
          <Route exit path="/gallery" element={<Gallery />}></Route>
          <Route exit path="/menu" element={<Menu />}></Route>
          <Route exit path="/specials" element={<Specials />}></Route>
          <Route exit path="/booktable" element={<BookTable />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
