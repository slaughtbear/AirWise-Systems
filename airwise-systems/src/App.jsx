import { useRef } from "react";
import Navbar from "./interface/navbar/Navbar";
import Banner from "./interface/banner/Banner";
import Services from "./interface/services/Services";
import "./App.css"; 

function App() {
  const parentRef = useRef(null);

  return (
    <div className="bg-stone-950" ref={parentRef}>
      <Navbar parentRef={parentRef} />
      <div>
        <Banner />
        <Services />
      </div>
    </div>
  );
}

export default App;
