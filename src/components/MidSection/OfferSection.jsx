import { PieChart } from "@mui/icons-material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";

const Items = [
  {
    id: 1,
    title: "Company",
    icon: <PieChart />,
    desc: "This is an example of a benefit for the employer.",
  },
  {
    id: 2,
    title: "Employee",
    icon: <PersonIcon />,
    desc: "This is an example of a benefit for the employer.",
  },
];

const LiItem = ({ item }) => {
  return <li className='w-[20rem] text-[18px] font-normal'>{item.desc}</li>;
};

const OfferSection = () => {
  return (
    <>
      {/* Parent Div */}
      <div className='flex flex-col px-32 py-32 bg-black '>
        <h1 className='text-2xl font-semibold text-gray-300 mb-10'>
          What we Offer
        </h1>
        {/* Rounded Box */}
        <div className=' offer-gradient text-gray-200 flex justify-between rounded-3xl px-32 py-20 flex-wrap '>
          {/* Company Div */}
          {Items?.map((item, i) => (
            <div>
              <div className='flex items-center justify-center border-gray-300 border gap-4 bg-black rounded-2xl p-4 w-[185px] mb-6 hover:bg-gradient-to-r from-blue-700 to-blue-600 hover:transition ease-in-out delay-75  hover:-translate-y-0 hover:scale-105 duration-300'>
                <h1 className='text-xl font-semibold text-[#DDDDDD]'>
                  {item.title}
                </h1>
                {item.icon}
              </div>
              <div className='flex items-center justify-start bg-black border border-gray-300 rounded-[26px] flex-col px-12 gap-6 py-10 text-[#DDDDDD] hover:bg-gradient-to-r from-blue-700 to-blue-600 hover:transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-105  duration-300'>
                <LiItem item={item} />
                <LiItem item={item} />
                <LiItem item={item} />
                <LiItem item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OfferSection;
