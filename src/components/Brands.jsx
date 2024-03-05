import Marquee from "react-fast-marquee";

import logo1 from "/public/logo1.png";
import logo2 from "/public/logo2.png";
import logo3 from "/public/logo3.png";
import logo4 from "/public/logo4.png";
import logo5 from "/public/logo5.png";
import logo6 from "/public/logo6.png";
import logo7 from "/public/logo7.png";
import logo8 from "/public/logo8.png";
import logo9 from "/public/logo9.png";
import logo10 from "/public/logo10.png";
import logo11 from "/public/logo11.png";
import logo12 from "/public/logo12.png";
import logo13 from "/public/logo13.png";
import { Link } from "react-router-dom";

const logos = [
  {
    id: 1,
    img: logo1,
    url: "https://de.gorenje.com",
  },
  {
    id: 2,
    img: logo2,
    url: "https://www.blanco.com",
  },
  {
    id: 3,
    img: logo3,
    url: "https://www.hansgrohe.de",
  },
  {
    id: 4,
    img: logo4,
    url: "https://www.quooker.de",
  },
  {
    id: 5,
    img: logo5,
    url: "https://www.bosch.de",
  },
  {
    id: 6,
    img: logo6,
    url: "https://www.bora.com",
  },
  {
    id: 7,
    img: logo7,
    url: "https://www.neff-home.com",
  },
  {
    id: 8,
    img: logo8,
    url: "https://www.nobilia.de",
  },
  {
    id: 9,
    img: logo9,
    url: "https://www.berbel.de",
  },
  {
    id: 10,
    img: logo10,
    url: "https://www.siemens.com",
  },
  {
    id: 11,
    img: logo11,
    url: "https://www.vogtwelt.de",
  },
  {
    id: 12,
    img: logo12,
    url: "https://oranier.com",
  },
  {
    id: 13,
    img: logo13,
    url: "https://www.wagnerundschoenherr.de/",
  },
];

function Brands({ direction = "left" }) {
  return (
    <section className="pt-[50px] 2xl:px-[270px]">
      <div className="flex flex-col justify-center items-center px-8 md:px-0 mb-[30px]">
        <h3 className="text-primary text-[18px] font-semibold  md:mb-16 mb-[60px] tracking-[4px]">
          UNSERE PARTNER
        </h3>

        {/* <h2 className="2xl:text-[45px] text-[28px] font-bold 2xl:leading-[60px] mb-[20px] text-center bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent ">
          Wachstum und Innovation fördern
        </h2> */}
      </div>

      <Marquee pauseOnHover={true} direction={direction}>
        {" "}
        {logos.map((logo) => (
          <div className="md:mr-16 mr-6" key={logo.id}>
            <Link to={logo.url} target="_blank" rel="noopener noreferrer">
              <img
                src={logo.img}
                alt=""
                className="md:h-[40px] h-[35px] bg-no-repeat bg-cover bg-center filter invert grayscale hover:grayscale-0 hover:invert-0 hover:cursor-pointer transition-all ease-in-out duration-300"
              />
            </Link>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default Brands;
