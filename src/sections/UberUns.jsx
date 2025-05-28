import recipeIcon from "/public/receipt-cutoff.png";
import stackIcon from "/public/stack.png";
import UnionIcon from "/public/Union.png";

const UberUns = () => {
  return (
    <section
      id="uberUns"
      className=" md:section pt-[80px] md:px-[80px] px-8 bg-bgUberUns bg-center bg-no-repeat bg-cover w-full"
    >
      <h3 className="text-primary text-[18px] font-semibold text-center md:mb-16 mb-[60px] tracking-[4px]">
        ÜBER UNS
      </h3>

      <div className="grid 2xl:grid-rows-2 2xl:grid-cols-3 xl:grid-rows-2 xl:grid-cols-2 grid-cols-1 grid-rows-1 2xl:gap-36 gap-[60px]  ">
        <div className="center-center gap-6 2xl:border-[13px] border-[6px] border-[#35383F] px-[50px] py-[10px] ">
          <p className="text-primary font-extrabold text-[40px] 2xl:text-[130px]">
            20
          </p>
          <p className="2xl:text-[22px] text-[16px] 2xl:leading-[45px] leading-[25px]">
            Jahre Erfahrung
          </p>
        </div>

        {/* <div></div> */}

        <h2 className="2xl:text-[45px] text-center text-[28px] font-bold 2xl:leading-[60px] md:text-left bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent">
          Lösungen von Design bis Aufbau mit unseren Profis
        </h2>

        <p className="2xl:text-[20px] text-[14px] text-justify 2xl:leading-[40px] leading-[30px] ">
          Wir helfen Ihnen bei der Gestaltung Ihrer ganz persönlichen Küche. Von
          Traditionell bis ganz Modern, alles ist dabei, was Ihren Stil ausmacht
        </p>

        <div className="2xl:flex-row flex flex-col gap-6 ">
          <img
            src={recipeIcon}
            alt=""
            className="2xl:h-[60px] 2xl:w-[60px] h-[50px] w-[50px] bg-no-repeat bg-cover bg-center"
          />
          <div>
            <p className="text-[22px] font-bold mb-3">Bezahlbare Preise</p>
            <p className="2xl:text-[18px] text-[14px]  2xl:leading-[40px] leading-[30px] ">
              Eine Traumküche muß nicht teuer sein, wir bauen es so, daß es in
              Ihr Budget passt
            </p>
          </div>
        </div>
        <div className="2xl:flex-row flex flex-col gap-6 ">
          <img
            src={stackIcon}
            alt=""
            className="2xl:h-[60px] 2xl:w-[60px] h-[50px] w-[50px]  bg-no-repeat bg-cover bg-center"
          />
          <div>
            <p className="text-[22px] font-bold mb-3">Exklusives Design</p>
            <p className="2xl:text-[18px] text-[14px]  2xl:leading-[40px] leading-[30px] ">
              Unser Design kann alles umsetzen, wie Sie sich Ihre Traumküche
              vorstellen
            </p>
          </div>
        </div>
        <div className="2xl:flex-row flex flex-col gap-6 ">
          <img
            src={UnionIcon}
            alt=""
            className="2xl:h-[60px] 2xl:w-[70px] h-[50px] w-[60px]  bg-no-repeat bg-cover bg-center"
          />
          <div>
            <p className="text-[22px] font-bold mb-3">Professionelles Team</p>
            <p className="2xl:text-[18px] text-[14px]  2xl:leading-[40px] leading-[30px] ">
              Unser professionelles Team geht auf Ihre Wünsche ein und setzt
              dabei auf Ihr Wolfühlfaktor und höchste Zufriedenheit!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UberUns;
