import React from "react";
import formImg from "../../Assests/form.png";
const Form = () => {
  return (
    <>
      <div className='bg-[#060606] flex items-center justify-around text-white  h-[40rem]'>
        {/* Description */}
        <div>
          <h1 className='text-3xl font-semibold capitalize '>
            Are you ready for better way <br /> to manage your ESOPs?
          </h1>
          <h3 className='text-2xl font-semibold text-gray-400 mt-5 mb-11'>
            Get in touch for a quich Demo
          </h3>
          <form className='flex flex-col gap-5 justify-start'>
            <input
              placeholder='Full Name'
              className='p-3 text-lg rounded-xl bg-gray-800 border-none text-gray-200'
              type='text'
            />
            <input
              placeholder='Company Email id'
              className='p-3 text-lg rounded-xl bg-gray-800 border-none text-gray-200'
              type='text'
            />
            <input
              placeholder='Phone Number'
              className='p-3 text-lg rounded-xl bg-gray-800 border-none text-gray-200'
              type='text'
            />
            <button className='flex items-start bg-gradient-to-r from-blue-700 to-blue-500 w-[60%] p-4 text-base font-medium rounded-xl text-center justify-center mt-2'>
              Request a Demo
            </button>
          </form>
        </div>
        <div>
          <img className='w-[30rem]' src={formImg} alt='' />
        </div>
      </div>
    </>
  );
};

export default Form;
