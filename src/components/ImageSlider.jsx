import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { flushSync } from "react-dom";
import { Link } from "react-router-dom";

const ImageSlider = ({ projects, openProject }) => {
  const option = {};
  const [emblaRef, emblaApi] = useEmblaCarousel(option, [Autoplay()]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container xl:gap-[160px] gap-8">
          {projects.map((project) => (
            <div
              className=" embla__slide relative xl:h-[520px] xl:w-[850px] h-[250px] imageFade hover:cursor-grab transition-all ease-in-out duration-300"
              key={project.id}
            >
              <img
                className="embla__slide__img"
                src={project.img}
                alt={project.title}
              />

              {/* <span className="  text-[#bbb] absolute md:bottom-5 bottom-2 md:right-10 right-3 z-1 md:text-xl font-semibold ">
                {project.title}
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
