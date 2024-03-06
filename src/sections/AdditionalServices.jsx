import { HiOutlineCheckCircle } from "react-icons/hi";
import PrimaryBtn from "../components/btn/PrimaryBtn";
import { Link } from "react-router-dom";

function AdditionalServices() {
  return (
    <section className="md:section md:my-[50px] pt-[80px] 2xl:px-[270px] md:px-[80px]">
      <div className="flex text-center lg:text-start lg:flex-nowrap flex-wrap-reverse lg:gap-8">
        <div className="xl:relative flex flex-wrap justify-center gap-6 lg:w-[60%] w-full mt-6 lg:mt-0 px-8 ">
          <img
            src="/gallery/IMG_27.JPG"
            alt=""
            className="h-[250px] xl:absolute top-0 left-0 2xl:top-[100px] 2xl:left-[100px] object-cover object-center z-5 hover:z-20 hover:cursor-pointer xl:hover:scale-105 transition-all ease-in-out duration-300 "
          />
          <img
            src="/gallery/IMG_20.JPG"
            alt=""
            className="h-[300px] object-cover object-center xl:absolute top-16 right-9 z-5 hover:z-20 hover:cursor-pointer xl:hover:scale-105 transition-all ease-in-out duration-300"
          />
          <img
            src="/gallery/IMG_35.JPG"
            alt=""
            className="h-[300px] object-cover object-center xl:absolute -bottom-16 left-32 z-1 hover:z-20 hover:cursor-pointer xl:hover:scale-105 transition-all ease-in-out duration-300"
          />
        </div>

        <div className="lg:w-[40%] lg:mb-0 mb-12 px-8 md:px-0">
          <h3 className="text-primary text-[18px] font-semibold md:mb-16 mb-[60px] tracking-[4px]">
            UNSERE ZUSÄTZLICHEN LEISTUNGEN
          </h3>
          <h2 className="2xl:text-[28px] text-[28px] font-bold  mb-[20px]  bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent 2xl:w-[566px]">
            Erweitern Sie Ihr Zuhause oder Büro mit unseren Leistungen.
          </h2>
          <ul className="flex flex-col gap-5 2xl:text-[20px] text-[14px]  2xl:leading-[40px] leading-[30px] text-justify">
            <li className="flex items-start ">
              <div className="mt-3 mr-4">
                <HiOutlineCheckCircle size={25} color="#DCA14D" />
              </div>

              <p>Luxuriöse Bäder für Ihren ganz persönlichen Geschmack</p>
            </li>
            <li className="flex items-start ">
              <div className="mt-3 mr-4">
                <HiOutlineCheckCircle size={25} color="#DCA14D" />
              </div>

              <p>
                Hochwertige Möbelkollektionen mit Komfort und Stil für Ihren
                Wohnraum
              </p>
            </li>
            <li className="flex items-start ">
              <div className="mt-3 mr-4">
                <HiOutlineCheckCircle size={25} color="#DCA14D" />
              </div>

              <p>
                Exquisite Büromöbel- Lösungen für Produktivität und Eleganz.
                Unser Sortiment bietet Marken wie VITRA, USM, Hülsta und Walter
                Knoll
              </p>
            </li>
          </ul>
        </div>
      </div>

      <Link to="/gallery" className="center-center mt-[4rem] lg:mt-32">
        <PrimaryBtn text="Mehr sehen" icon="HiOutlineArrowSmRight" />
      </Link>
    </section>
  );
}

export default AdditionalServices;
