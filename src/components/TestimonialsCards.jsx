import React, { useState, useEffect } from 'react';
// import star from "../assets/star-1.svg";
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";

const TestimonialsCarousel = () => {
  const [activePage, setActivePage] = useState(0);

  const handlePageClick = (pageIndex) => {
    setActivePage(pageIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePage((prevPage) => (prevPage + 1) % 4); // Adjust 4 to match the total number of pages
    }, 5000); // Adjust 5000 to set the interval time (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="testimonials" className="w-[51.438rem] flex flex-row items-start justify-start py-[0rem] pr-[0.938rem] pl-[0rem] box-border max-w-full mq1125:max-w-[calc(100%_-_15px)]">
      <div className="flex-1 flex flex-col items-center justify-start gap-[5.875rem_0rem] max-w-full mq450:gap-[5.875rem_0rem] mq1125:gap-[5.875rem_0rem]">
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.813rem] pl-[0rem] mq450:max-w-[calc(100%_-_29px)]">
          <h1 className="m-0 relative text-inherit font-normal font-inherit mq450:text-[1.688rem] mq800:text-[2.25rem]">
            Testimonials
          </h1>
        </div>
        <section className="-py-20 -mt-12">
          <div className="container max-w-xl mx-auto">
            <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-neutral-300 text-neutral-700">
              {/* Replace with dynamic image URL based on activePage */}
              <img src={
                activePage === 0 ? test1 :
                activePage === 1 ? test2 :
                activePage === 2 ? test3 :
                activePage === 3 ? `https://source.unsplash.com/random/100x100?${activePage + 1}` : ''
              } alt="" className="w-20 h-20 rounded-full dark:bg-gray-100" />
              {/* Replace with dynamic quote based on activePage */}
              <blockquote className="max-w-lg text-lg italic font-medium text-center">
                {activePage === 0 && `"Dumbbelldoor is hands down the best app for finding the perfect trainer for you!"`}
                {activePage === 1 && `"I like the way dumbbelldoor takes the care of your health"`}
                {activePage === 2 && `"You can stay fit at the comfort of your home through Dumbbelldoor's online sessions"`}
                {activePage === 3 && `"I found some of the best folks in the fitness industry on Dumbbelldoor"`}
              </blockquote>
              {/* Replace with dynamic name and title based on activePage */}
              <div className="text-center dark:text-gray-800">
                {activePage === 0 && (
                  <>
                    <p>Andrew Tate</p>
                    <p>Influencer</p>
                  </>
                )}
                {activePage === 1 && (
                  <>
                    <p>John Doe</p>
                    <p>Fitness Freak</p>
                  </>
                )}
                {activePage === 2 && (
                  <>
                    <p>Jane Smith</p>
                    <p>A Housewife</p>
                  </>
                )}
                {activePage === 3 && (
                  <>
                    <p>Alice Johnson</p>
                    <p>Businessman</p>
                  </>
                )}
              </div>
              <div className="flex space-x-2">
                {[...Array(4).keys()].map((index) => {
                  let buttonClass;
                  if (activePage === index) {
                    buttonClass = "w-2 h-2 rounded-full bg-gray-50";
                  } else {
                    buttonClass = "w-2 h-2 rounded-full bg-gray-600";
                  }

                  return (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Page ${index + 1}`}
                      className={buttonClass}
                      onClick={() => handlePageClick(index)}
                    ></button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div> 
  )
};

export default TestimonialsCarousel;
