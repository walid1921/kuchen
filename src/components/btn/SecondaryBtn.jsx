function SecondaryBtn() {
  return (
    <button className="btn text-white md:text-[16px] text-[12px] md:font-bold font-semibold border border-white hover:border-primary   tracking-wide  rounded-full md:px-[25px] hover:cursor-pointer transition-all ease-in duration-150 bg-transparent  hover:text-primary  gap-2">
      <span className="btn__visible lg:px-[10px] px-[16px] lg:py-[14px] py-[8px]">
        Beispiele anzeigen
      </span>
      <span className="btn__invisible lg:px-[10px] px-[16px] lg:py-[14px] py-[8px]">
        Beispiele anzeigen
      </span>
    </button>
  );
}

export default SecondaryBtn;
