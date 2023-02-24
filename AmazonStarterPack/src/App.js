import "./App.css";
// import Footer from "./components/Footer/Footer";
// import Header from "./components/header/Header";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
// import Slider from "./components/Slider/Slider";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Virtual from "./components/Virtual/Virtual";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./components/Products/ProductDetail";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:name" element={<ProductDetail />} />
          <Route path="/checkout/:nameCo" element={<CheckOut />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
