import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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
import CardList5 from "./components/MombasaCards";
import CardList6 from "./components/SamburuCards";
import BookingPage from "./components/BookingPage";

const App = () => {
 
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path="" element={<Home />} />
    <Route path="/blog" element={<Card />} />
    <Route path="/about" element={<About />} />
    <Route path="/MaasaiMara" element={<CardList />} />
    <Route path="/Naivasha" element={<CardList2 />} />
    <Route path="/Diani" element={<CardList3 />} />
    <Route path="/Malindi" element={<CardList4 />} />
    <Route path="/Mombasa" element={<CardList5 />} />
    <Route path="/Samburu" element={<CardList6 />} />
    <Route path="/booking" element={<BookingPage />} />
    </Routes>
    <Footer />
    </Router>

  );
};
export default App;

