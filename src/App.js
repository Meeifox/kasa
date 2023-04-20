import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import About from "./pages/about/About";
import NotFound from "./pages/error/NotFound";
import CardsDetails from "./components/common/cardsDetails/CardsDetails";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/"element={<Home />}></Route>
        <Route path="/about"element={<About />}></Route>
        <Route path="/lots/:id"element={<CardsDetails/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
