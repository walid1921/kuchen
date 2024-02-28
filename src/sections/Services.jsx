import Slider from "../components/Slider";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Kontaktieren Sie uns",
    description:
      "Nehmen Sie Kontakt mit uns auf, um detaillierte Informationen zu erhalten oder Fragen zu stellen. Wir stehen Ihnen zur Verfügung, um Ihnen zu helfen und alle Ihre Anfragen zu beantworten",
  },
  {
    id: 2,
    number: "02",
    title: "Beratung",
    description:
      "Erhalten Sie professionelle Beratung von unseren Experten. Wir helfen Ihnen, alle Aspekte zu verstehen und die besten Lösungen für Ihre Küche auszuwählen",
  },
  {
    id: 3,
    number: "03",
    title: "Planung",
    description:
      "Wir erstellen gemeinsam mit Ihnen einen detaillierten Plan für jeden Schritt des Projekts. Ihre Beteiligung an der Planung garantiert die Erfüllung all Ihrer Anforderungen und Wünsche",
  },
  {
    id: 4,
    number: "04",
    title: "Design",
    description:
      "Unsere Designer werden ein einzigartiges Design für Ihre Küche erstellen, unter Berücksichtigung Ihres Stils und Ihrer funktionalen Anforderungen. Das Ergebnis: Ästhetik und Komfort in jedem Detail",
  },
  {
    id: 5,
    number: "05",
    title: "Produktion",
    description:
      "Dank moderner Ausrüstung und hochwertiger Materialien setzen wir Ihr Design in die Realität um. Verfolgen Sie den Produktionsprozess und überzeugen Sie sich von der Qualität unserer Produkte",
  },
  {
    id: 6,
    number: "06",
    title: "Installation",
    description:
      "Unsere qualifizierten Handwerker installieren alle Elemente Ihrer Küche unter Berücksichtigung jeder einzelnen Details. Das Ergebnis: eine fertige Küche, die allen Ihren Erwartungen entspricht",
  },
];

const Services = () => {
  return (
    <section className="md:section pt-[80px] 2xl:px-[270px] lg:px-[80px]">
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
