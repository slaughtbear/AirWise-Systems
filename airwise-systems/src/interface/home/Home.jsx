import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
import Services from "../services/Services";
import About from "../about/About";
import Footer from "../footer/Footer";
import Register from "../register/Register";
import Login from "../login/Login";
import Test from "../../config/Test";

function Home() {
  return (
    <div className="bg-stone-950">
      <Navbar />
      <div>
        <Test />
        <Banner />
        <About />
        <Services />
        <Footer />
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default Home;
