import ImageSlider from "../components/ImageSlider";
import { Link } from "react-router-dom";
import PrimaryBtn from "../components/btn/PrimaryBtn";

const projects = [
  {
    id: 1,
    title: "Kitchen Classic",
    img: "/gallery/IMG_10.JPG",
  },
  {
    id: 2,
    title: "Kitchen Classic",
    img: "/gallery/IMG_4.JPG",
  },
  {
    id: 3,
    title: "Kitchen Classic",
    img: "/gallery/IMG_12.JPG",
  },
  {
    id: 4,
    title: "Kitchen Classic",
    img: "/gallery/IMG_29.JPG",
  },
  {
    id: 5,
    title: "Kitchen Classic",
    img: "/gallery/IMG_60.JPG",
  },
  {
    id: 6,
    title: "Kitchen Classic",
    img: "/gallery/IMG_3.JPG",
  },
];

const Projekte = () => {
  return (
    <section
      id="projekte"
      className="md:section md:mb-[50px] pt-[80px] flex flex-col gap-16 w-full "
    >
      <div className="flex flex-col justify-center items-center px-8 md:px-0">
        <h3 className="text-primary text-[18px] font-semibold  md:mb-16 mb-[60px] tracking-[4px]">
          UNSERE PROJEKTE
        </h3>

        <h2 className="2xl:text-[45px] text-[28px] font-bold 2xl:leading-[60px] mb-[20px] text-center bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent ">
          Entdecken Sie unsere Küchendesigns
        </h2>

        <p className="2xl:text-[20px] text-[14px] md:text-center text-justify 2xl:leading-[40px] leading-[30px] md:w-[600px]">
          Lassen Sie sich von unseren Küchendesigns inspirieren und lassen uns
          Sie gemeinsam Ihre Traumküche zusammenstellen
        </p>
      </div>

      <ImageSlider projects={projects} />

      <Link to="/gallery" className="center-center ">
        <PrimaryBtn text="Mehr sehen" icon="HiOutlineArrowSmRight" />
      </Link>
    </section>
  );
};

export default Projekte;
