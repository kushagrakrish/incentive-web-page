import React from "react";
import Ellipse1 from "../../Assests/Ellipse 1.png";
import Frame4 from "../../Assests/Frame 4.png";
import Frame5 from "../../Assests/Frame 5.png";
const HeroSection = () => {
  return (
    <>
      {/* Parent Div */}
      <div className='flex items-center justify-evenly bg-black px-32 py-20'>
        {/* DIV 1  */}
        <div>
          <h1 className='text-5xl text-gray-400 font-semibold leading-snug mb-8'>
            Streamline how <br />
            you manage <span className='text-white font-semibold'>ESOPs</span>
          </h1>
          <p className='text-gray-400 text-xl w-[40%] text-justify tracking-wide'>
            Incentiv offers an easy way for employers to issue ESOPs/grants, and
            allow employees to easily accept, track, exercise, and sell their
            granted shares.
          </p>
          <button className='flex items-start bg-gradient-to-r from-blue-700 to-blue-500 w-[60%] p-4 text-base font-medium rounded-xl text-center justify-center my-16 text-white w-[17rem]'>
            Request a Demo
          </button>
        </div>
        {/* IMG DIV */}
        <div className='flex items-start gap-6 mr-56'>
          <img src={Frame4} alt='' />
          <img src={Frame5} className='mt-24' alt='' />
        </div>
        <img className='absolute ml-[40rem] blur-3xl' src={Ellipse1} alt='' />
      </div>
    </>
  );
};

export default HeroSection;
