import React from "react";
import star from "../assets/star-1.svg"
import test1 from "../assets/test1.png"
import test2 from "../assets/test2.png"
import test3 from "../assets/test3.png"

const Testimonial = ({ name, rating, comment, imageSrc }) => {
  return (
    <div className="w-[16.688rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
      <div className="self-stretch rounded-xl bg-white shadow-[0px_12px_12px_rgba(0,_0,_0,_0.16)] flex flex-col items-center justify-start py-[1.5rem] px-[1.125rem] relative gap-[1.125rem_0rem]">
        <img
          className="w-[3.125rem] h-[3.125rem] relative rounded-[50%] object-cover"
          loading="eager"
          alt=""
          src={imageSrc}
        />
        <div className="flex flex-row items-center justify-start gap-[0rem_0.313rem]">
          <img
            className="h-[1.944rem] w-[1.944rem] relative"
            loading="eager"
            alt=""
            src={star}
          />
          <div className="relative leading-[1.388rem] font-extrabold mq450:text-[1.125rem] mq450:leading-[1.125rem]">
            {rating}
          </div>
        </div>
        <h1 className="m-0 relative text-[1.5rem] leading-[1.875rem] font-bold font-inherit text-dimgray-200 mq450:text-[1.188rem] mq450:leading-[1.5rem]">
          {name}
        </h1>
        <h2 className="m-0 self-stretch relative text-[1.125rem] leading-[1.688rem] font-normal font-inherit text-gray-100 text-center">
          {comment}
        </h2>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div id="testimonials" className="w-[51.438rem] flex flex-row items-start justify-start py-[0rem] pr-[0.938rem] pl-[0rem] box-border max-w-full mq1125:max-w-[calc(100%_-_15px)]">
      <div className="flex-1 flex flex-col items-center justify-start gap-[5.875rem_0rem] max-w-full mq450:gap-[5.875rem_0rem] mq1125:gap-[5.875rem_0rem]">
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.813rem] pl-[0rem] mq450:max-w-[calc(100%_-_29px)]">
          <h1 className="m-0 relative text-inherit font-normal font-inherit mq450:text-[1.688rem] mq800:text-[2.25rem]">
            Testimonials
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[1.388rem] text-gray-300 font-manrope mq800:flex-wrap">
          <Testimonial
            name="Elias Watsica"
            rating={5.0}
            comment="Super recommended product. You have to try!"
            imageSrc={test1}
          />
          <Testimonial
            name="Wade Warren"
            rating={4.75}
            comment="Awesome website and funnel for your business"
            imageSrc={test2}
          />
          <Testimonial
            name="Nicole Champlin"
            rating={4.95}
            comment="Couldn’t agree more to this product!"
            imageSrc={test3}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
