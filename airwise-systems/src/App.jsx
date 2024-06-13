import Navbar from "./interface/navbar/Navbar";
import Banner from "./interface/banner/Banner";
import Services from "./interface/services/Services";
import About from "./interface/about/About";
import Footer from "./interface/footer/Footer";
import { Link, BrowserRouter } from 'react-router-dom'

import "./App.css";

function App() {

  return (
    <div className="bg-stone-950">
      <Navbar/>
      <div>
        <Banner />
        <About />
        <Services />
        <Footer />
      </div>
    </div>
  );
}

export default App;
