import { useMemo } from "react";
import line from "../assets/line-1.svg"
import Insta from "../assets/insta.svg"
import fb from "../assets/fb.svg"

const GroupComponent = ({
  star,
  prop,
  propWidth,
  propAlignSelf,
  onGroupContainerClick,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className="w-[15.625rem] flex flex-col items-center justify-end pt-[2.813rem] px-[0rem] pb-[0.063rem] box-border cursor-pointer text-left text-[0.938rem] text-black font-rubik"
      onClick={onGroupContainerClick}
      style={groupDivStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start relative">
        <img
          className="h-[10.35rem] w-[10.125rem] absolute !m-[0] top-[-2.812rem] right-[2.775rem] rounded-[50%] object-cover z-[1]"
          loading="eager"
          alt=""
          src={star}
        />
        <div className="flex-1 rounded-3xs [background:linear-gradient(180deg,_rgba(236,_236,_236,_0),_#ececec)] flex flex-col items-center justify-start pt-[9.563rem] pb-[1.688rem] pr-[1rem] pl-[1.063rem] gap-[1.125rem_0rem]">
          <div className="w-[15.5rem] h-[18.944rem] relative rounded-3xs [background:linear-gradient(180deg,_rgba(236,_236,_236,_0),_#ececec)] hidden" />
          <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.063rem] gap-[0.563rem_0rem]">
            <div className="self-stretch h-[1.438rem] flex flex-row items-start justify-between gap-[1.25rem]">
              <h3 className="m-0 self-stretch w-[7.088rem] relative text-inherit font-medium font-inherit inline-block shrink-0 z-[1]">
                David Rogan
              </h3>
              <div className="self-stretch w-[2.181rem] relative font-medium inline-block shrink-0 z-[1]">
                {prop}
              </div>
            </div>
            <img
              className="w-[13.163rem] h-[0.081rem] relative object-contain z-[1]"
              alt=""
              src={line}
            />
            <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[1.188rem] pl-[0rem] text-[0.625rem]">
              <div className="w-[5.919rem] relative leading-[145%] capitalize inline-block z-[1]">{`Specializations : `}</div>
              <div className="self-stretch relative leading-[145%] capitalize font-light z-[1]">{`Crossfit Expoort, Nutrition & Rehab`}</div>
            </div>
          </div>
          <div className="self-stretch h-[1.75rem] flex flex-row items-center justify-between gap-[1.25rem]">
            <div className="flex flex-row items-start justify-start gap-[0rem_1.188rem]">
              <img
                className="h-[1.331rem] w-[1.381rem] relative min-h-[1.313rem] z-[1]"
                loading="eager"
                alt=""
                src={Insta}
              />
              <img
                className="h-[1.319rem] w-[1.381rem] relative min-h-[1.313rem] z-[1]"
                alt=""
                src={fb}
              />
            </div>
            <button className="cursor-pointer [border:none] pt-[0.313rem] pb-[0.25rem] pr-[0.563rem] pl-[1.375rem] bg-white w-[7rem] rounded-3xs flex flex-row items-center justify-end box-border whitespace-nowrap z-[1] hover:bg-gainsboro">
              <div className="h-[1.669rem] w-[7.013rem] relative rounded-3xs bg-white hidden" />
              <div className="h-[1.113rem] flex-1 relative text-[0.625rem] leading-[145%] capitalize font-rubik text-black text-left inline-block z-[1]">
                Check profile
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
