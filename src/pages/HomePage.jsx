import Brands from "../components/Brands";
import Navbar from "../components/Navbar";
import Numbers from "../components/Numbers";
import Treffen from "../sections/Treffen";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Projekte from "../sections/Projekte";
import Reviews from "../sections/Reviews";
import Services from "../sections/Services";
import Products from "../sections/UberUns";
import AdditionalServices from "../sections/AdditionalServices";

function HomePage() {
  return (
    <main className="relative">
      <Navbar />

      <Hero />

      <Products />

      <Projekte />

     
        <Brands />
      

      <AdditionalServices />

      <Services />

      <Reviews />

      <Numbers />

      <Treffen />

      <Footer />
    </main>
  );
}

export default HomePage;
