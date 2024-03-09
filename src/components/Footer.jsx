import { useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/dumbbelldoorLogo.png"
import whatsApp from "../assets/whatsapp.svg"

const FrameComponent = () => {
  const navigate = useNavigate();
  
  const onFindTrainersText1Click = useCallback(() => {
    navigate('/trainers');
  }, [navigate]);

  const onOurOfferingsText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='ourOfferingsText']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTestimonialsText2Click = useCallback(() => {
    const anchor = document.getElementById('testimonials');
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);


  return (
    <footer className="w-[75rem] flex flex-row items-start justify-start pt-[0rem] pb-[7.188rem] pr-[2.25rem] pl-[1.25rem] box-border max-w-full text-left text-[1.875rem] text-white font-alata">
      <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq1125:flex-wrap">
        <div className="w-[24.938rem] flex flex-col items-start justify-start gap-[2.125rem_0rem] max-w-full text-[0.75rem] text-gray-200 font-rubik mq450:gap-[2.125rem_0rem]">
          <img
            className="self-stretch h-[4.438rem] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src={logo}
          />
          <div className="w-[23.125rem] flex flex-row items-start justify-start py-[0rem] px-[1.25rem] box-border max-w-full  text-stone-400">
            <div className="flex-1 relative inline-block max-w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-[0rem] px-[1rem] text-[1.125rem] text-white font-lato">
            <div className="relative leading-[145%]">
              <p className="m-0">
                <span className="capitalize">
                  <span>
                    <span className="font-black">Call :</span>
                  </span>
                </span>
              </p>
              <p className="m-0 text-stone-300">
                <span className="capitalize">
                  <span>
                    <span className="font-medium">01234 987654</span>
                  </span>
                </span>
              </p>
              <p className="m-0 text-stone-300">
                <span className="capitalize">
                  <span>
                    <span className="font-medium">098765 34621</span>
                  </span>
                </span>
              </p>
              <p className="m-0 text-blue">
                <span className="capitalize">
                  <span className="font-black">
                    <span>&nbsp;</span>
                  </span>
                </span>
              </p>
              <p className="m-0 text-silver">
                <span className="capitalize">
                  <span className="font-black">
                    <span className="text-white">Mail</span>
                    <span className="text-blue">{` `}</span>
                    <span className="text-white">:</span>
                  </span>
                  <span className="font-medium">
                    <span>{` `}</span>
                  </span>
                </span>
              </p>
              <p className="m-0 text-stone-300">
                <span className="font-medium">
                  <span>contact@dumbbelldoor.com</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[17.188rem] flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[0rem] box-border">
          <div className="flex flex-col items-start justify-start gap-[1.313rem_0rem]">
            <h1 className="m-0 relative text-inherit leading-[145%] capitalize font-normal font-inherit mq450:text-[1.125rem] mq450:leading-[1.625rem] mq800:text-[1.5rem] mq800:leading-[2.188rem]">
              Utility Pages
            </h1>
            <div className="w-[10.063rem] flex flex-col items-start justify-start gap-[0.875rem_0rem] text-[1.25rem] text-stone-400 font-light">
              <h1 className="m-0 h-[1.438rem] relative text-inherit leading-[145%] capitalize inline-block shrink-0 cursor-pointer mq450:text-[1rem] mq450:leading-[1.438rem] hover:text-gray-500">
                <p className="m-0">Home</p>
              </h1>
              <h1
                className="m-0 h-[1.438rem] relative text-inherit leading-[145%] capitalize inline-block shrink-0 cursor-pointer mq450:text-[1rem] mq450:leading-[1.438rem]  hover:text-gray-500"
                onClick={onFindTrainersText1Click}
              >
                <p className="m-0">Find Trainers</p>
              </h1>
              <h1
                className="m-0 self-stretch h-[1.438rem] relative text-inherit leading-[145%] capitalize inline-block shrink-0 cursor-pointer mq450:text-[1rem] mq450:leading-[1.438rem]  hover:text-gray-500"
                onClick={onOurOfferingsText1Click}
              >
                <p className="m-0">Our offerings</p>
              </h1>
              <h1
                className="m-0 h-[1.438rem] relative text-inherit leading-[145%] capitalize inline-block shrink-0 cursor-pointer mq450:text-[1rem] mq450:leading-[1.438rem]  hover:text-gray-500"
                onClick={onTestimonialsText2Click}
              >
                <p className="m-0">Testimonials</p>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[11rem] flex flex-col items-start justify-start pt-[2.25rem] px-[0rem] pb-[0rem] box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem_0rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.188rem]">
              <h1 className="m-0 relative text-inherit leading-[145%] capitalize font-normal font-inherit mq450:text-[1.125rem] mq450:leading-[1.625rem] mq800:text-[1.5rem] mq800:leading-[2.188rem]">
                Follow Us
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.063rem_0rem] text-[1.25rem] text-stone-400 font-lato">
              <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_1.125rem]">
                <svg
                  className="h-[3.106rem] w-[3.119rem] relative cursor-pointer"
                  svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3895 11.1075C22.3895 5.2371 17.4429 0.477173 11.3424 0.477173C5.24182 0.477173 0.295288 5.2371 0.295288 11.1075C0.295288 16.4132 4.33438 20.811 9.61627 21.6093V14.1813H6.81061V11.1075H9.61627V8.76552C9.61627 6.10176 11.2659 4.62918 13.789 4.62918C14.9978 4.62918 16.2623 4.83704 16.2623 4.83704V7.45334H14.8686C13.4971 7.45334 13.068 8.27244 13.068 9.11433V11.1075H16.1316L15.6424 14.1813H13.0685V21.6102C18.3504 20.8125 22.3895 16.4146 22.3895 11.1075Z" fill="white"/>
                </svg>
                <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem]">
                  <h1 className="m-0 self-stretch h-[1.438rem] relative text-inherit leading-[145%] capitalize font-semibold font-inherit inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.438rem] cursor-pointer  hover:text-gray-500">
                    Facebook
                  </h1>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_1.125rem]">
                <svg
                  className="h-[3.125rem] w-[3.119rem] relative cursor-pointer"
                  loading="eager"
                  width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8509 2.1849C17.0707 2.1884 18.2394 2.65622 19.1019 3.48618C19.9644 4.31613 20.4506 5.44079 20.4542 6.61452V15.4728C20.4506 16.6466 19.9644 17.7712 19.1019 18.6012C18.2394 19.4311 17.0707 19.8989 15.8509 19.9025H6.64535C5.42561 19.8989 4.25686 19.4311 3.39436 18.6012C2.53187 17.7712 2.04571 16.6466 2.04207 15.4728V6.61452C2.04571 5.44079 2.53187 4.31613 3.39436 3.48618C4.25686 2.65622 5.42561 2.1884 6.64535 2.1849H15.8509ZM15.8509 0.41333H6.64535C3.10091 0.41333 0.20105 3.2038 0.20105 6.61452V15.4728C0.20105 18.8836 3.10091 21.674 6.64535 21.674H15.8509C19.3954 21.674 22.2952 18.8836 22.2952 15.4728V6.61452C22.2952 3.2038 19.3954 0.41333 15.8509 0.41333Z" fill="white"/>
                  <path d="M17.2318 6.61462C16.9587 6.61462 16.6917 6.53669 16.4647 6.39068C16.2376 6.24467 16.0606 6.03714 15.9561 5.79433C15.8515 5.55153 15.8242 5.28435 15.8775 5.02659C15.9308 4.76883 16.0623 4.53206 16.2554 4.34623C16.4485 4.16039 16.6946 4.03384 16.9624 3.98256C17.2303 3.93129 17.508 3.95761 17.7603 4.05818C18.0126 4.15875 18.2283 4.32907 18.38 4.54759C18.5317 4.76611 18.6127 5.02301 18.6127 5.28582C18.6131 5.46043 18.5777 5.63339 18.5084 5.79478C18.4391 5.95616 18.3374 6.1028 18.2091 6.22626C18.0808 6.34973 17.9284 6.44759 17.7607 6.51423C17.593 6.58088 17.4133 6.61499 17.2318 6.61462ZM11.2482 7.50016C11.9765 7.50016 12.6885 7.70799 13.2941 8.09737C13.8996 8.48675 14.3716 9.04018 14.6504 9.68769C14.9291 10.3352 15.002 11.0477 14.8599 11.7351C14.7178 12.4225 14.3671 13.0539 13.8521 13.5495C13.3371 14.0451 12.6809 14.3826 11.9666 14.5193C11.2522 14.656 10.5118 14.5858 9.83891 14.3176C9.16602 14.0494 8.59089 13.5952 8.18625 13.0125C7.78161 12.4297 7.56563 11.7446 7.56563 11.0438C7.56667 10.1043 7.95499 9.20351 8.64537 8.53917C9.33575 7.87483 10.2718 7.50117 11.2482 7.50016ZM11.2482 5.7286C10.1557 5.7286 9.08778 6.04033 8.17944 6.62437C7.2711 7.2084 6.56313 8.03852 6.14507 9.00974C5.727 9.98096 5.61762 11.0497 5.83075 12.0807C6.04387 13.1118 6.56994 14.0588 7.34242 14.8022C8.1149 15.5455 9.0991 16.0517 10.1706 16.2568C11.242 16.4619 12.3526 16.3566 13.3619 15.9543C14.3712 15.5521 15.2339 14.8708 15.8408 13.9967C16.4478 13.1226 16.7717 12.095 16.7717 11.0438C16.7717 9.6341 16.1898 8.28216 15.1539 7.28538C14.118 6.28859 12.7131 5.7286 11.2482 5.7286Z" fill="white"/>
                </svg>
                <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.188rem]">
                  <h1 className="m-0 self-stretch h-[1.438rem] relative text-inherit leading-[145%] capitalize font-semibold font-inherit inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.438rem] cursor-pointer  hover:text-gray-500">
                    Instagram
                  </h1>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_1.125rem]">
                <img
                  className="h-[3.125rem] w-[3.119rem] relative cursor-pointer"
                  loading="eager"
                  alt=""
                  src={whatsApp}
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem]">
                  <h1 className="m-0 self-stretch h-[1.438rem] relative text-inherit leading-[145%] capitalize font-semibold font-inherit inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.438rem] cursor-pointer  hover:text-gray-500">
                    Whatsapp
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
