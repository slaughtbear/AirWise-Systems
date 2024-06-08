import { useRef } from "react";
import Navbar from "./interface/navbar/Navbar";
//import Register from "./interface/register/Register"
import "./App.css"; 

function App() {
  const parentRef = useRef(null);

  return (
    <div className="bg-stone-950" ref={parentRef}>
      <Navbar parentRef={parentRef} />
    </div>
  );
}

export default App;
