import dumbbelldoorLogo from "../assets/dumbbelldoorLogo.png";

const ImageContainer = () => {
  return (
    <header className="w-[76.875rem] flex flex-row items-center justify-start py-[0rem] pr-[0.563rem] pl-[0rem] box-border max-w-full text-left text-[1.125rem] text-white font-rubik">
      <div className="flex-1 flex flex-row items-center justify-start relative max-w-full">
        <div className="w-[73.25rem] flex flex-row items-center justify-start gap-[0rem_16.25rem] max-w-full mq750:gap-[0rem_16.25rem] mq450:gap-[0rem_16.25rem] mq1100:gap-[0rem_16.25rem]">
          <div className="h-[4.625rem] w-[25.875rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border max-w-full">
            <img
              className="mt-[-0.437rem] self-stretch h-[5.063rem] relative max-w-full overflow-hidden shrink-0 object-cover cursor-pointer"
              loading="eager"
              alt=""
              src={dumbbelldoorLogo}
            />
          </div>
          <div className="w-[23.563rem] flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem] box-border max-w-full mq1275:w-[0rem]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[1.813rem] mq1275:hidden">
              <div className="flex-1 relative whitespace-nowrap">
                Find Trainers
              </div>
              <div className="flex-1 relative">Testimonials</div>
              <div className="relative whitespace-nowrap">Contact Us</div>
              <div className="w-[7.813rem] relative hidden shrink-0 whitespace-nowrap">
                <p className="m-0">Login/Sign Up</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[8.788rem] absolute my-0 mx-[!important] right-[0.025rem] bottom-[1.444rem] inline-block whitespace-nowrap z-[1]">
          My Profile
        </div>
      </div>
      <img
        className="h-[2.5rem] w-[2.5rem] relative ml-[-3.062rem]"
        loading="eager"
        alt=""
        src="/-icon-profile-circle.svg"
      />
    </header>
  );
};

export default ImageContainer;
