import Navbar from "../../interface/navbar/Navbar";
import Banner from "../../interface/banner/Banner";
import Services from "../../interface/services/Services";
import About from "../../interface/about/About";
import Footer from "../../interface/footer/Footer";
import Test from "../../firebase/Test";

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
      </div>
    </div>
  );
}

export default Home;
