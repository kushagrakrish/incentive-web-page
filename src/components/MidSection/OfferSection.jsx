import { PieChart } from "@mui/icons-material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
const OfferSection = () => {
  return (
    <>
      {/* Parent Div */}
      <div className='px-32 mx-auto py-4  bg-black h-[50rem] '>
        <h1 className='text-2xl font-semibold text-gray-300 mb-10'>
          What we Offer
        </h1>
        {/* Rounded Box */}
        <div className='mx-auto h-[600px] w-[1650px] absolute offer-gradient text-gray-200 flex justify-between rounded-3xl px-32 py-20 my-auto'>
          {/* Company Div */}
          <div className=''>
            <div className='flex items-center justify-center border-gray-300 border gap-4 bg-black rounded-2xl p-4 w-[185px] mb-6 hover:bg-gradient-to-r from-blue-700 to-blue-600 hover:transition ease-in-out delay-75  hover:-translate-y-0 hover:scale-110 duration-300'>
              <h1 className='text-xl font-semibold text-[#DDDDDD]'>Company</h1>
              <PieChart />
            </div>
            {/* Li Desc */}
            <div className='flex items-center justify-start bg-black border border-gray-300 rounded-2xl flex-col px-12 gap-6 py-10 text-[#DDDDDD] hover:bg-gradient-to-r from-blue-700 to-blue-600 hover:transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110  duration-300'>
              {/* <div className='w-[20rem] text-[18px] font-normal'> */}
              <li className='w-[20rem] text-[18px] font-normal'>
                This is an example of a benefit for the employer.
              </li>
              <li className='w-[20rem] text-[18px] font-normal'>
                This is an example of a benefit for the employer.
              </li>
              <li className='w-[20rem] text-[18px] font-normal'>
                This is an example of a benefit for the employer.
              </li>
              <li className='w-[20rem] text-[18px] font-normal'>
                This is an example of a benefit for the employer.
              </li>
              {/* </div> */}
            </div>
          </div>
          {/* Employee Div */}
          <div>
            <div className='flex items-center justify-center border-gray-300 border gap-4 bg-black rounded-2xl p-4 w-[185px] mb-6 hover:bg-gradient-to-r from-blue-700 to-blue-600 hover:transition ease-in-out delay-75  hover:-translate-y-0 hover:scale-110 duration-300'>
              <h1 className='text-xl font-semibold text-[#DDDDDD]'>Employee</h1>
              <PersonIcon />
            </div>
            {/* Li Desc */}
            <div className='flex items-center justify-start bg-black border border-gray-300 rounded-2xl flex-col px-12 gap-6 py-10 text-[#DDDDDD] hover:bg-gradient-to-r from-blue-700 to-blue-600 hover:transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110  duration-300'>
              {/* <div className='w-[20rem] text-[18px] font-normal'> */}
              <li className='w-[20rem] text-[18px] font-normal'>
                This is an example of a benefit for the employer.
              </li>
              <li className='w-[20rem] text-[18px] font-normal'>
                This is an example of a benefit for the employer.
              </li>
              <li className='w-[20rem] text-[18px] font-normal'>
                This is an example of a benefit for the employer.
              </li>
              <li className='w-[20rem] text-[18px] font-normal'>
                This is an example of a benefit for the employer.
              </li>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferSection;
