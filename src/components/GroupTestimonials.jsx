import { useCallback } from "react";
import { Button } from "@mui/material";
import GroupComponent from "./CardComponent";
import TestimonialsCarousel from "./TestimonialsCards";
import t1 from "../assets/t1.jpg"
import t2 from "../assets/t2.jpg"
import t3 from "../assets/t3.jpg"
import t4 from "../assets/t4.jpg"
import { Link } from "react-router-dom";

const FrameComponent1 = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onGroupContainer2Click = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onGroupButtonClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-[3.5rem_0rem] max-w-full text-left text-[2.813rem] text-white font-alata mq800:gap-[3.5rem_0rem]">
      <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.688rem] pl-[0rem] mq450:max-w-[calc(100%_-_27px)]">
        <h1 className="m-0 relative text-inherit font-normal font-inherit mq450:text-[1.688rem] mq800:text-[2.25rem]">
          Star Trainers
        </h1>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center pt-[0rem] px-[0rem] pb-[1.188rem] gap-[0rem_1.188rem] text-[0.938rem] text-black font-rubik">
        <GroupComponent
          star={t1}
          prop="5 ⭐"
          onGroupContainerClick={onGroupContainerClick}
        />
        <GroupComponent
          star={t3}
          prop="4 ⭐"
          propWidth="15.625rem"
          propAlignSelf="unset"
          onGroupContainerClick={onGroupContainer1Click}
        />
        <GroupComponent
          star={t4}
          prop="4 ⭐"
          propWidth="15.625rem"
          propAlignSelf="unset"
          onGroupContainerClick={onGroupContainer2Click}
        />
        <div className="flex-1 flex flex-col items-end justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border gap-[1.125rem_0rem] min-w-[10.125rem]">
          <GroupComponent
            star={t2}
            prop="5 ⭐"
            propWidth="unset"
            propAlignSelf="stretch"
            onGroupContainerClick={onGroupContainer3Click}
          />
          <Link to="/trainers">
            <Button
              className="w-[10.5rem] h-[2.5rem] cursor-pointer"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "20",
                background: "#fff",
                borderRadius: "10px",
                "&:hover": { background: "#fff" },
                width: 168,
                height: 40,
              }}
              onClick={onGroupButtonClick}
            >
              More Trainers
            </Button>
          </Link>
        </div>
      </div>
      <TestimonialsCarousel  /> 
    </div>
  );
};

export default FrameComponent1;
