import React from "react";
import hero from "../../Assests/hero.jpeg";
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
        <div className='w-[25rem]'>
          <img src={hero} alt='' />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
