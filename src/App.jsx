import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Card from "./components/Card";
import About from "./components/About";
import Header from "./components/Header";
import CardList from "./components/Maracards";
import CardList2 from "./components/NaivashaCards";
import CardList3 from "./components/DianiCards";
import CardList4 from "./components/MalindiCards";

const App = () => {
 
  return (
   <Router>
    <Navbar />
    <Routes>
    <Route path="/blog" element={<Card />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/MaasaiMara" element={<CardList />} />
    <Route path="/Naivasha" element={<CardList2 />} />
    <Route path="/Diani" element={<CardList3 />} />
    <Route path="/Malindi" element={<CardList4 />} />

    

    </Routes>
   <Footer />
   </Router>

  )
}
export default App;

