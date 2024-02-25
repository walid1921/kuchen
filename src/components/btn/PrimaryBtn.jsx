import { BsFillSendFill } from "react-icons/bs";

function PrimaryBtn({ text }) {
  return (
    <button className="btn text-white md:text-[16px] text-[12px] md:font-bold font-semibold   tracking-wide  rounded-full md:px-[25px] hover:cursor-pointer transition-all ease-in duration-150 bg-primary hover:bg-white hover:text-primary  gap-2">
      <span className="btn__visible lg:px-[10px] px-[16px] lg:py-[14px] py-[8px]">
        <BsFillSendFill />
        {text}{" "}
      </span>
      <span className="btn__invisible lg:px-[10px] px-[16px] lg:py-[14px] py-[8px]">
        <BsFillSendFill />
        {text}{" "}
      </span>
    </button>
  );
}

export default PrimaryBtn;
