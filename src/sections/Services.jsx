import Slider from "../components/Slider";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Kontaktieren Sie uns",
    description:
      "Nehmen Sie Kontakt mit uns auf, um die nächsten Schritte zu planen",
  },
  {
    id: 2,
    number: "02",
    title: "Beratung",
    description:
      "Professionelle Beratung seitens unserer Experten ist garantiert. Gemeinsam suchen wir den besten Weg zur Umsetzung Ihrer Traumkuche",
  },
  {
    id: 3,
    number: "03",
    title: "Planung",
    description:
      "Gemeinsam mit Ihnen erstellen wir die einzelnen Schritte der Umsetzung, so dass alle Anforderungen erfüllt werden",
  },
  {
    id: 4,
    number: "04",
    title: "Design",
    description:
      "Ästhetik und Komfort in jeder Hinsicht. Unsere Designer helfen dabei Ihren Stil und Anforderungen umzusetzen",
  },
  {
    id: 5,
    number: "05",
    title: "Produktion",
    description:
      "Nach Fertigstellung Ihrer Planung setzen wir alle Hebel in Bewegung, damit Ihre Traumküche fristgerecht bei unserem Küchenhersteller produziert wird",
  },
  {
    id: 6,
    number: "06",
    title: "Installation",
    description: "Unser Handwerker-Team erledigt den Aufbau Ihrer Traumkuche",
  },
];

const Services = () => {
  return (
    <section className="md:section pt-[80px] 2xl:px-[270px] md:px-[80px]">
      <div className="flex  text-center lg:text-start lg:flex-nowrap flex-wrap lg:gap-8">
        <div className="lg:w-[40%] lg:mb-0 mb-12 px-8 md:px-0">
          <h3 className="text-primary text-[18px] font-semibold md:mb-16 mb-[60px] tracking-[4px]">
            WIE ARBEITEN WIR
          </h3>
          <h2 className="2xl:text-[45px] text-[28px] font-bold 2xl:leading-[60px] mb-[20px]  bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent 2xl:w-[566px]">
            6 einfache Schritte zur Innenraumgestaltung
          </h2>
          <p className="2xl:text-[20px] text-[14px]  2xl:leading-[40px] leading-[30px] text-justify">
            Die Größe Ihrer Küche variiert je nach Layout. Die Form der Küche
            bestimmt auch den Platz für Schränke, Arbeitsplatten und Zubehör.
          </p>
        </div>

        <div className="lg:w-[60%] w-full">
          <Slider steps={steps} />
        </div>
      </div>
    </section>
  );
};

export default Services;
