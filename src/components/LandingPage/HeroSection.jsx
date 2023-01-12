import React from "react";
import Ellipse1 from "../../Assests/Ellipse 1.png";
import Frame4 from "../../Assests/Frame 4.png";
import Frame5 from "../../Assests/Frame 5.png";
import Ellipse from "../../Assests/Ellipse1.png";
const HeroSection = () => {
  return (
    <>
      {/* Parent Div */}
      <div className='flex items-center justify-evenly bg-black px-32 pt-24'>
        {/* DIV 1  */}
        <div>
          <h1 className='text-5xl text-[#EEEEEE] font-semibold leading-snug mb-8'>
            Streamline how <br />
            you manage
            <span className='text-[#66B8FF] font-semibold ml-4 absolute'>
              <img src={Ellipse} className='absolute  w-full' alt='' />
              ESOPs
            </span>
          </h1>
          <p className='text-[#9F9F9F] text-xl font-normal text-justify w-[40%] text-justify '>
            Incentiv offers an easy way for employers to issue ESOPs/grants, and
            allow employees to easily accept, track, exercise, and sell their
            granted shares.
          </p>
          <button className='flex items-start bg-gradient-to-r from-blue-700 to-blue-500 w-[60%] p-4 text-base font-medium rounded-xl text-center justify-center my-16 text-white w-[17rem]'>
            Request a Demo
          </button>
        </div>
        {/* IMG DIV */}
        <div className='flex items-start gap-6 mr-80'>
          <img className='absolute blur-3xl' src={Ellipse1} alt='' />
          <img src={Frame4} alt='' />
          <img src={Frame5} className='mt-24' alt='' />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
