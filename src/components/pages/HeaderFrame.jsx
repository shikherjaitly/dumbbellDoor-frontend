
import FrameComponent1 from "../GroupTestimonials";
import FrameComponent from "../Footer";
import one from "../../assets/1.png"
import two from "../../assets/2.png"
import three from "../../assets/3.png"
import four from "../../assets/4.png"
import five from "../../assets/5.png"
import footerImage from "../../assets/footer-image.png"


const HeaderFrame = () => {
  return (
    <div className="w-full h-[180.25rem] relative overflow-hidden tracking-[normal] mq450:h-auto mq450:min-h-[3828]">
      <main className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] [background:linear-gradient(108.87deg,_#00101c,_#29000f,_#00101c)] overflow-hidden flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[1.438rem] box-border gap-[2.938rem_0rem] max-w-full text-left text-[1.25rem] text-dimgray-100 font-lato mq800:gap-[2.938rem_0rem]">   
        <section className="w-[66.125rem] flex flex-row items-start justify-start pt-[0rem] pb-[2.375rem] pr-[0rem] pl-[0.688rem] box-border max-w-full text-left text-[2.813rem] text-white font-alata mq1125:max-w-[calc(100%_-_11px)]">
          <div className="flex-1 flex flex-col items-center justify-start gap-[3.875rem_0rem] max-w-full mq800:gap-[3.875rem_0rem] mq1125:gap-[3.875rem_0rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.438rem] pl-[0rem] mq450:max-w-[calc(100%_-_23px)]">
              <h1
                className="m-0 relative text-inherit font-normal font-inherit mq450:text-[1.688rem] mq800:text-[2.25rem] mt-6"
                data-scroll-to="ourOfferingsText"
              >
                Our Offerings
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_2.5rem] max-w-full text-[1.563rem] font-inter mq800:gap-[0rem_2.5rem] mq1125:flex-wrap">
              <div className="h-[29.75rem] w-[29.938rem] relative min-w-[29.938rem] max-w-full mq800:min-w-full mq1125:flex-1">
                <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
                  <img
                    className="absolute top-[0rem] left-[0rem] w-[12.5rem] h-[12.5rem] object-cover"
                    alt=""
                    src={four}
                  />
                  <img
                    className="absolute top-[17.25rem] left-[0rem] w-[12.5rem] h-[12.5rem] object-cover"
                    alt=""
                    src={one}
                  />
                  <img
                    className="absolute top-[0rem] left-[17.438rem] w-[12.5rem] h-[12.5rem] object-cover"
                    loading="eager"
                    alt=""
                    src={five}
                  />
                  <img
                    className="absolute top-[17.25rem] left-[17.438rem] w-[12.5rem] h-[12.5rem] object-cover"
                    loading="eager"
                    alt=""
                    src={three}
                  />
                  <img
                    className="absolute top-[6.25rem] left-[6.25rem] w-[18.25rem] h-[17.25rem] object-cover z-[1]"
                    alt=""
                    src={two}
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border min-w-[21.438rem] max-w-full mq450:min-w-full">
                <div className="self-stretch h-[11.875rem] relative inline-block shrink-0 mq450:text-[1rem]">
                  <p className="m-0">
                    <span>
                      <span className="font-black">{`Elevate Your Fitness, Ignite Your Potential. `}</span>
                    </span>
                  </p>
                  <p className="m-0">
                    <span>
                      <span className="font-black">
                        Welcome to DUMBBELL DOOR.
                      </span>
                    </span>
                  </p>
                  <p className="m-0">
                    <span>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className="m-0 text-[1.25rem]">
                    <span>
                      <span>
                        Empowering fitness journeys with personalized training
                        and a supportive community. Join us at Dumbbell Door for
                        a healthier, stronger you.
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0rem] box-border max-w-full text-left text-[2.5rem] text-white font-inter">
          <div className="w-[104.063rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border max-w-[116%] shrink-0">
            <div className="w-[127.375rem] bg-yellowgreen flex flex-row items-center justify-start py-[1.313rem] px-[16.25rem] box-border max-w-[122%] shrink-0 mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq800:pl-[4.063rem] mq800:pr-[4.063rem] mq800:box-border mq1325:pl-[8.125rem] mq1325:pr-[8.125rem] mq1325:box-border">
              <div className="h-[5.375rem] w-[127.375rem] relative bg-yellowgreen hidden max-w-full" />
              <marquee>
                <h1 className="m-0 relative text-inherit tracking-[0.35em] leading-[110%] font-bold font-inherit z-[1] mq450:text-[1.5rem] mq450:leading-[1.625rem] mq800:text-[2rem] mq800:leading-[2.188rem]">
                  <span className="whitespace-pre-wrap">{`FOCUS ON YOUR `}</span>
                  <span className="text-black">FITNESS</span>
                  <span className="whitespace-pre-wrap"> NOT YOUR LOSS</span>
                </h1>
              </marquee>
            </div>
          </div>
        </section>
        <section className="w-[66.625rem] flex flex-row items-start justify-start pt-[0rem] pb-[5.625rem] pr-[0rem] pl-[0.938rem] box-border max-w-full mq1125:max-w-[calc(100%_-_15px)]">
          <FrameComponent1 />
        </section>
        <section className="self-stretch flex flex-row items-start justify-end pt-[0rem] pb-[0.438rem] px-[0rem] box-border max-w-full">
          <div className="w-[100.813rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border max-w-[112%] shrink-0">
            <img
              className="h-[17.388rem] w-[106.75rem] relative object-cover max-w-[106%] shrink-0"
              loading="eager"
              alt=""
              src={footerImage}
              data-scroll-to="backgroundImage"
            />
          </div>
        </section>
        <FrameComponent />
        <div className="w-[30rem] flex flex-row items-start justify-start py-[rem] px-[1.25rem] box-border max-w-full -mt-12">
          <h1 className="m-0 relative text-inherit leading-[242.5%] capitalize font-inherit mq450:text-[1rem] mq450:leading-[2.438rem]">
            <span className="font-medium">{`Copyright © `}</span>
            <b className="text-yellowgreen">
              <span>Dumbbell</span>
              <span className="text-blueviolet">{` `}</span>
              <span className="text-deepskyblue">Door</span>
              <span className="text-blueviolet">{` `}</span>
            </b>
            <span className="font-medium">| 2024 - India</span>
          </h1>
        </div>
      </main>
    </div>
  );
};

export default HeaderFrame;
