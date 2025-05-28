import Modal from "react-modal";
import { HiOutlineX } from "react-icons/hi";

function ProjectModal({ closeProject, gallery, selectedProject }) {
  console.log(gallery.find((project) => project.id === selectedProject));
  return (
    <Modal
      isOpen={selectedProject !== null}
      onRequestClose={closeProject}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(5px)",
          zIndex: 1000,
        },
        content: {
          background: "rgba(0, 0, 0, 0)",

          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(0, 0, 0, 0)",
          color: "#fff",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      {selectedProject !== null && (
        <div className="center-center h-[100vh]  w-[600px]  md:w-[800px]  lg:w-full lg:h-full rotate-90 lg:rotate-0">
          <div className="relative">
            <img
              src={
                gallery.find((project) => project.id === selectedProject).url
              }
              alt=""
              className="center-center  object-cover object-center rounded-md  "
            />

            <button className="z-50 hover:cursor-pointer absolute  top-6 right-6 rounded-full p-1 bg-primary hover:bg-white text-white hover:text-primary transition-all ease-in duration-150 ">
              <HiOutlineX size={25} onClick={closeProject} />
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}

export default ProjectModal;
