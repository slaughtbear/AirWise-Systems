import { useRef } from "react";

import Navbar from "./interface/navbar/Navbar";
import Banner from "./interface/banner/Banner";
import Services from "./interface/services/Services";
import About from "./interface/about/About";
import Footer from "./interface/footer/Footer";


import "./App.css";

function App() {
  const parentRef = useRef(null);

  return (
    <div className="bg-stone-950" ref={parentRef}>
      <Navbar parentRef={parentRef} />
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
