import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link, animateScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { HiChevronUp } from "react-icons/hi";
import ProjectModal from "../components/ProjectModal";
import gallery from "../assets/data/gallery";

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [nextItems, setNextItems] = useState(9);
  const [project, setProject] = useState(gallery);
  const [filter, setFilter] = useState("all");

  const openProject = (projectId) => {
    setSelectedProject(projectId);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const loadHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const scrollToTop = () => {
    const options = {
      duration: 500,
      smooth: true,
    };

    animateScroll.scrollToTop(options);
  };

  useEffect(() => {
    if (filter === "all") {
      setProject(gallery);
    }

    if (filter === "küche") {
      const filteredGallery = gallery.filter(
        (item) => item.category === "küche"
      );
      setProject(filteredGallery);
    }

    if (filter === "badezimmer") {
      const filteredGallery = gallery.filter(
        (item) => item.category === "badezimmer"
      );
      setProject(filteredGallery);
    }

    if (filter === "wohnzimmer") {
      const filteredGallery = gallery.filter(
        (item) => item.category === "wohnzimmer"
      );
      setProject(filteredGallery);
    }

    if (filter === "mobel") {
      const filteredGallery = gallery.filter(
        (item) => item.category === "mobel"
      );
      setProject(filteredGallery);
    }
  }, [filter]);

  return (
    <div className="flex relative flex-col ">
      <div className="center-between flex-wrap mx-4 mb-10 md:mb-0 backdrop-blur-md">
        <div className=" p-2 rotate-[270deg] bg-[rgba(114,114,114,0.69)] border border-gray-400 backdrop-blur-sm rounded-full hover:cursor-pointer transition-all ease-in-out duration-300 hover:bg-primary hover:text-white">
          <LinkRouter to={"/"}>
            <HiChevronUp size={28} />
          </LinkRouter>
        </div>
        <h2 className="2xl:text-[45px] my-8 text-[28px] font-bold 2xl:leading-[60px] text-center bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent ">
          Beispiele
        </h2>

        <div className={`center-center border rounded z-10  `}>
          <button
            onClick={() => setFilter("all")}
            className={` text-[10px] md:text-[16px] border-r py-2 md:px-4 px-3 cursor-pointer transition-all ease-in duration-200 hover:bg-[rgba(114,114,114,0.6)] text-[#bbb] border-[rgba(114,114,114,.4)`}
          >
            Alle
          </button>

          <button
            onClick={() => setFilter("küche")}
            className={` text-[10px] md:text-[16px] border-r py-2 md:px-4 px-3 cursor-pointer transition-all ease-in duration-200 hover:bg-[rgba(114,114,114,0.6)] text-[#bbb] border-[rgba(114,114,114,.4)`}
          >
            Küche
          </button>

          <button
            onClick={() => setFilter("badezimmer")}
            className={` text-[10px] md:text-[16px] border-r py-2 md:px-4 px-3 cursor-pointer transition-all ease-in duration-200 hover:bg-[rgba(114,114,114,0.6)] text-[#bbb] border-[rgba(114,114,114,.4)`}
          >
            Badezimmer
          </button>

          <button
            onClick={() => setFilter("wohnzimmer")}
            className={` text-[10px] md:text-[16px] border-r py-2 md:px-4 px-3 cursor-pointer transition-all ease-in duration-200 hover:bg-[rgba(114,114,114,0.6)] text-[#bbb] border-[rgba(114,114,114,.4)`}
          >
            Wohnzimmer
          </button>
          <button
            onClick={() => setFilter("mobel")}
            className={` text-[10px] md:text-[16px] border-r py-2 md:px-4 px-3 cursor-pointer transition-all ease-in duration-200 hover:bg-[rgba(114,114,114,0.6)] text-[#bbb] border-[rgba(114,114,114,.4)`}
          >
            Büromöbel
          </button>
        </div>
      </div>
      <div className="columns-1 md:columns-2 xl:columns-3 mx-4  ">
        {project?.slice(0, nextItems)?.map((image) => (
          <LazyLoadImage
            key={image.id}
            className="mb-3 object-cover object-center hover:cursor-pointer"
            effect="blur"
            loading="lazy"
            src={image.url}
            alt=""
            onClick={() => openProject(image.id)}
          />
        ))}
      </div>

      <Link
        className="fixed p-2 mb-2 mr-2 bg-[rgba(114,114,114,0.69)] border border-gray-400 backdrop-blur-sm bottom-0 right-0 z-30 rounded-full hover:cursor-pointer transition-all ease-in-out duration-300 hover:bg-primary hover:text-white"
        onClick={scrollToTop}
      >
        <HiChevronUp size={28} />
      </Link>

      <div className="center-center fixed h-[65px] bottom-0 w-full bg-[rgba(114,114,114,0.69)] backdrop-blur-sm">
        <button
          className="center-center gap-2 hover:text-primary transition-all ease-in-out duration-300"
          onClick={loadHandler}
        >
          Mehr laden <HiChevronUp size={28} className="rotate-180" />
        </button>
      </div>

      {selectedProject !== null && (
        <ProjectModal
          closeProject={closeProject}
          selectedProject={selectedProject}
          gallery={gallery}
        />
      )}
    </div>
  );
};

export default Gallery;
