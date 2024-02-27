// import ImageContainer from "../components/ImageContainer";
import CrossfitNutrition from "../components/CrossfitNutrition";
import Navbar from "./Navbar";

const FindTrainers = () => {
  return (
    <div className="w-full relative [background:linear-gradient(108.87deg,_#00101c,_#00101c,_#29000f)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start pt-[3.813rem] pb-[3.875rem] pr-[3.438rem] pl-[1.25rem] box-border gap-[2.688rem_0rem] tracking-[normal] mq750:gap-[2.688rem_0rem] mq1275:pr-[1.688rem] mq1275:box-border">
      <div style={{ marginTop: "-2.5rem" }}>
        <Navbar />
      </div>
      <CrossfitNutrition />
    </div>
  );
};

export default FindTrainers;
