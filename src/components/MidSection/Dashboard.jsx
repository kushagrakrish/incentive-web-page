import React, { useState } from "react";
import DashboardImg from "../../Assests/Dashboard.png";
import DashImg from "../../Assests/dash.png";
import Fade from "react-reveal/Fade";

const Dashboard = () => {
  const [show, setShow] = useState(1);

  const handleClick = () => {
    switch (show) {
      case 1:
        return setShow(2);
      case 2:
        return setShow(1);
      default:
    }
  };
  return (
    <>
      {/* Parent div */}
      <div className='flex items-center justify-evenly bg-gradient px-32 py-32 flex-wrap '>
        {/* Image DIv */}
        <div
          onClick={handleClick}
          className='flex flex-col items-center justify-center'
        >
          <img src={DashboardImg} alt='' />
          <Fade bottom when={show === 1}>
            <img className='absolute mt-10' src={DashImg} alt='' />
          </Fade>
        </div>
        {/* Text Div */}
        <div>
          <h1 className='text-2xl text-blue-400 font-bold mb-4'>
            Intuitive Dashboards
          </h1>

          {show === 1 ? (
            <Fade cascade>
              <p
                onClick={handleClick}
                className='w-[22rem] text-gray-400 font-semibold text-lg text-justify'
              >
                Allows employers to easily track employee option pool, vesting
                schedules, options outstanding, exercises etc and take action
                accordingly.
              </p>
            </Fade>
          ) : show === 2 ? (
            <Fade top>
              <p
                onClick={handleClick}
                className='w-[22rem] 
             text-gray-400 font-semibold text-lg text-justify'
              >
                Allows employees to accept grants, exercise and sell options
                with just a few clicks and help them visualize the real monetary
                value of their option.
              </p>
            </Fade>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
