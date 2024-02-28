import TrainerCard from "./TrainerCard";

const CrossfitNutrition = () => {
  return (
    <main className="w-[66.875rem] flex flex-row items-start justify-end max-w-full">
      <section className="w-[64.188rem] flex flex-col items-center justify-start gap-[1.125rem_0rem] max-w-full text-left text-[2.188rem] text-white font-alata">
        <div className="w-[27.375rem] flex flex-row items-start justify-start max-w-full">
          <h2 className="m-0 relative text-inherit font-normal font-inherit mq750:text-[1.75rem] mq450:text-[1.313rem]">
            Meet Our Fitness Guides
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_2rem] max-w-full text-center text-[1.25rem] font-rubik mq750:gap-[0rem_2rem]">
          <div className="w-[12.625rem] flex flex-col items-start justify-start pt-[0.938rem] px-[0rem] pb-[0rem] box-border mq750:hidden">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.875rem_0rem]">
              <div className="w-[10.938rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[1rem_0rem]">
                  <div className="relative tracking-[0.1px] leading-[1.25rem] font-medium mq450:text-[1rem] mq450:leading-[1rem]">
                    Rating
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-center justify-start cursor-pointer">
                      ⭐⭐⭐⭐ & up
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start cursor-pointer">
                      ⭐⭐⭐ & up
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start cursor-pointer">
                      ⭐⭐ & up
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start cursor-pointer">
                      ⭐ & up
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[6.25rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border">
                <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem] gap-[0.875rem_0rem]">
                  <div className="relative tracking-[0.1px] leading-[1.25rem] font-medium mq450:text-[1rem] mq450:leading-[1rem]">
                    Gender
                  </div>

                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.313rem_0rem]">
                    <label>
                      <input type="radio" name="gender" /> Male
                    </label>

                    <label>
                      <input type="radio" name="gender" /> Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0rem] pb-[0.375rem] pr-[0.063rem] pl-[0rem] gap-[1rem_0rem]">
                <div className="relative tracking-[0.1px] leading-[1.25rem] font-medium mq450:text-[1rem] mq450:leading-[1rem]">
                  City
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.313rem_0rem] text-left">
                  <label>
                    <input type="radio" name="city" /> Bangalore
                  </label>
                  <label>
                    <input type="radio" name="city" /> Chennai
                  </label>
                  <label>
                    <input type="radio" name="city" /> Hyderabad
                  </label>
                  <label>
                    <input type="radio" name="city" /> Mumbai
                  </label>
                  <label>
                    <input type="radio" name="city" /> Pune
                  </label>
                  <label>
                    <input type="radio" name="city" /> Ahmedabad
                  </label>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0rem] pb-[0.375rem] pr-[0.063rem] pl-[0rem] gap-[1rem_0rem]">
                <div className="relative tracking-[0.1px] leading-[1.25rem] font-medium mq450:text-[1rem] mq450:leading-[1rem]">
                  Specialization
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.313rem_0rem] text-left">
                  <label>
                    <input type="checkbox" name="specialization" /> Nutrition
                    Training
                  </label>
                  <label>
                    <input type="checkbox" name="specialization" /> Muscle
                    Building
                  </label>
                  <label>
                    <input type="checkbox" name="specialization" /> Weight Loss
                  </label>
                  <label>
                    <input type="checkbox" name="specialization" /> Functional
                    Training
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[49rem] flex flex-col items-start justify-start py-[0rem] pr-[1.625rem] pl-[0rem] box-border mq750:hidden">
            <div className="w-[0.001rem] flex-1 relative box-border border-r-[1px] border-solid border-gray-100" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.938rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_293px)] text-left text-[0.875rem] text-black mq750:max-w-full">
            <div>
              <TrainerCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CrossfitNutrition;
