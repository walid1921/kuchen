import { useState, useEffect } from "react";
import PrimaryBtn from "../components/btn/PrimaryBtn";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import SecondaryBtn from "../components/btn/SecondaryBtn";

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update background image index every 2 seconds
      setBgIndex((prevIndex) => (prevIndex % 4) + 1);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []); // Run effect only once on component mount

  const bgImage1 = "bg-heroImage1";
  const bgImage2 = "bg-heroImage2";
  const bgImage3 = "bg-heroImage3";
  const bgImage4 = "bg-heroImage4";

  return (
    <section id="hero" className="relative overflow-hidden h-[100vh]">
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            bgIndex === 1 ? "opacity-100" : "opacity-0"
          } ${bgImage1} bg-no-repeat bg-cover bg-center`}
        />
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            bgIndex === 2 ? "opacity-100" : "opacity-0"
          } ${bgImage2} bg-no-repeat bg-cover bg-center`}
        />
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            bgIndex === 3 ? "opacity-100" : "opacity-0"
          } ${bgImage3} bg-no-repeat bg-cover bg-center`}
        />
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            bgIndex === 4 ? "opacity-100" : "opacity-0"
          } ${bgImage4} bg-no-repeat bg-cover bg-center`}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="center-center h-full w-full">
        <div className="text-center xl:w-[50%] w-[95%] relative">
          <h1 className="xl:text-[80px] lg:text-[60px] md:text-[40px] text-[30px] font-extrabold md:leading-[80px] bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent animate-moveInLeft ">
            Zeit für eine neue <span className="text-primary">Trend</span>Küche
          </h1>
          <div className="mt-[40px] md:mb-[96px] mb-[40px] mx-auto md:w-[60%] w-full md:px-0 px-8">
            <p className="md:text-[22px] text-[18px] animate-moveInRight">
              Die Küche ist das neue Lebensmittelpunkt in der Familie und im
              Haus
            </p>
          </div>
          <div className="center-center gap-5 animate-moveInBottom">
            <LinkScroll to="treffen">
              <PrimaryBtn text="Termin vereinbaren" icon="BsFillSendFill" />
            </LinkScroll>
            <Link to="gallery">
              <SecondaryBtn />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
