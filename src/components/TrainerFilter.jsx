import { useState, useContext } from "react";
import TrainerCard from "./TrainerCard";
import { UserContext } from "../utils/UserContext";

const CrossfitNutrition = () => {
  const { trainers } = useContext(UserContext);

  const [genderFilter, setGenderFilter] = useState(null);
  const [cityFilter, setCityFilter] = useState(null);
  const [ratingFilter, setRatingFilter] = useState(null);

  const filteredTrainers = trainers.filter((trainer) => {
    if (genderFilter && trainer.gender !== genderFilter) {
      return false;
    }
    if (cityFilter && trainer.location !== cityFilter) {
      return false;
    }
    if (ratingFilter && trainer.rating < ratingFilter) {
      return false;
    }
    return true;
  });

  const handleGenderChange = (e) => {
    setGenderFilter(e.target.value);
  };

  const handleCityChange = (e) => {
    setCityFilter(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
  };

  const clearFilters = () => {
    setGenderFilter(null);
    setCityFilter(null);
    setRatingFilter(null);
  };

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
              <button
                className=" border rounded-lg px-8 py-2 text-lg"
                onClick={clearFilters}
              >
                Clear all filters
              </button>
              <div className="w-[10.938rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[1rem_0rem]">
                  <div className="relative tracking-[0.1px] leading-[1.25rem] font-medium mq450:text-[1rem] mq450:leading-[1rem]">
                    Rating
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <label>
                      <input
                        type="radio"
                        name="rating"
                        value="4"
                        onChange={handleRatingChange}
                      />
                      ⭐⭐⭐⭐ & up
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="rating"
                        value="3"
                        onChange={handleRatingChange}
                      />
                      ⭐⭐⭐ & up
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="rating"
                        value="2"
                        onChange={handleRatingChange}
                      />
                      ⭐⭐ & up
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="rating"
                        value="1"
                        onChange={handleRatingChange}
                      />
                      ⭐ & up
                    </label>
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
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleGenderChange}
                      />{" "}
                      Male
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleGenderChange}
                      />{" "}
                      Female
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
                    <input
                      type="radio"
                      name="city"
                      value="Bangalore"
                      onChange={handleCityChange}
                    />{" "}
                    Bangalore
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="city"
                      value="Chennai"
                      onChange={handleCityChange}
                    />{" "}
                    Chennai
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="city"
                      value="Hyderabad"
                      onChange={handleCityChange}
                    />{" "}
                    Hyderabad
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="city"
                      value="Mumbai"
                      onChange={handleCityChange}
                    />{" "}
                    Mumbai
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="city"
                      value="Pune"
                      onChange={handleCityChange}
                    />{" "}
                    Pune
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="city"
                      value="Ahmedabad"
                      onChange={handleCityChange}
                    />{" "}
                    Ahmedabad
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
              <TrainerCard trainers={filteredTrainers} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CrossfitNutrition;
