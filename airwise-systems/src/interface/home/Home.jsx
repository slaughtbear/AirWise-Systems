import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
import Services from "../services/Services";
import About from "../about/About";
import Footer from "../footer/Footer";
import Register from "../register/Register";

function Home() {
  return (
    <div className="bg-stone-950">
      <Navbar />
      <div>
        <Banner />
        <About />
        <Services />
        <Footer />
        <Register />
      </div>
    </div>
  );
}

export default Home;
