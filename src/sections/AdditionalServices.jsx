import { HiOutlineCheckCircle } from "react-icons/hi";

function AdditionalServices() {
  return (
    <section className="md:section md:mt-[50px] md:mb-[100px] pt-[80px] 2xl:px-[270px] lg:px-[80px]">
      <div className="flex text-center lg:text-start lg:flex-nowrap flex-wrap-reverse lg:gap-8">
        <div className="xl:relative flex flex-wrap justify-center gap-3 lg:w-[60%] w-full mt-6 lg:mt-0">
          <img
            src="/gallery/IMG_27.JPG"
            alt=""
            className="h-[300px] xl:absolute top-0 left-0 object-cover object-center z-5 hover:z-20 hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 "
          />
          <img
            src="/gallery/IMG_20.JPG"
            alt=""
            className="h-[300px] object-cover object-center xl:absolute top-16 right-9 z-5 hover:z-20 hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
          />
          <img
            src="/gallery/IMG_35.JPG"
            alt=""
            className="h-[300px] object-cover object-center xl:absolute -bottom-16 left-32 z-1 hover:z-20 hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
          />
        </div>

        <div className="lg:w-[40%] lg:mb-0 mb-12 px-8 md:px-0">
          <h3 className="text-primary text-[18px] font-semibold md:mb-16 mb-[60px] tracking-[4px]">
            Unsere Zusätzlichen Leistungen
          </h3>
          <h2 className="2xl:text-[28px] text-[28px] font-bold  mb-[20px]  bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent 2xl:w-[566px]">
            Erweitern Sie Ihr Zuhause oder Büro mit unseren Leistungen.
          </h2>
          <ul className="flex flex-col gap-5 2xl:text-[20px] text-[14px]  2xl:leading-[40px] leading-[30px] text-justify">
            <li className="flex items-start ">
              <div className="mt-3 mr-4">
                <HiOutlineCheckCircle size={25} color="#DCA14D" />
              </div>

              <p>
                Luxuriöse Badgestaltungen, die Ihren persönlichen Stil
                widerspiegeln.
              </p>
            </li>
            <li className="flex items-start ">
              <div className="mt-3 mr-4">
                <HiOutlineCheckCircle size={25} color="#DCA14D" />
              </div>

              <p>
                Hochwertige Möbelkollektionen für Komfort und Stil in Ihrem
                Wohnraum.
              </p>
            </li>
            <li className="flex items-start ">
              <div className="mt-3 mr-4">
                <HiOutlineCheckCircle size={25} color="#DCA14D" />
              </div>

              <p>
                Optimieren Sie Ihren Arbeitsbereich mit exquisiten
                Büromöbel-Lösungen für Produktivität und Eleganz.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AdditionalServices;
