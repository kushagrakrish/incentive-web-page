import Hamburger from "hamburger-react";
import React, { useState } from "react";

const Items = ["Features", "About Us", "Pricing", "Login"];

const Navbar = () => {
  const [showList, setshowList] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleShow = () => setshowList(!showList);

  return (
    <>
      <div className='flex items-center justify-between px-32 mx-auto py-6 sticky top-0 left-0 right-0 bg-black text-white z-[5] max-[500px]:px-5 '>
        <div className='md:justify-start'>
          <h1 className='text-3xl text-[#676767] font-bold cursor-pointer hover:text-[#b8b8b8] transition-all duration-100 ease-in'>
            incentive.
          </h1>
        </div>
        <div className='flex list-none items-center '>
          <div
            onClick={handleShow}
            className='hidden md:block lg:hidden sm:block max-[640px]:block'
          >
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>{" "}
          {Items?.map((item, i) => (
            <li className='mx-10 md:hidden sm:hidden lg:flex max-[640px]:hidden text-xl font-medium hover:text-[#676767] transition-all duration-100 ease-in cursor-pointer'>
              {item}
            </li>
          ))}
        </div>
      </div>
      {showList ? (
        <div className='flex flex-col w-screen h-96 bg-black text-white justify-evenly items-center'>
          {Items?.map((item, i) => (
            <li className='mx-10 list-none text-lg font-medium cursor-pointer hover:text-[#676767] transition-all duration-100 ease-in'>
              {item}
            </li>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
