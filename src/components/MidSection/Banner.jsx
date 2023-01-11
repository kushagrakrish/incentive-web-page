import React, { useState } from "react";
import hero from "../../Assests/hero.jpeg";
import Fade from "react-reveal/Fade";

const Banner = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      {/* Parent Div */}
      <div className='flex items-start justify-evenly bg-black px-32 py-32'>
        {/* DIv 1 */}
        <div>
          <h1 className='text-3xl text-gray-400 font-semibold my-20'>
            Why Incentive
          </h1>
          <div
            onClick={handleClick}
            className='cursor-pointer'
            style={styles.block}
          >
            <div className='ml-11'>
              <Fade top when={show}>
                <div>
                  <h1 className='text-3xl text-purple-800 font-bold my-10'>
                    Manage the complete <br />
                    ESOP{" "}
                  </h1>
                  <p className='w-[25rem] text-gray-300'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minus vitae iusto ducimus vel. Ipsa consequuntur excepturi
                    harum! Cumque voluptatibus ea blanditiis recusandae sit.
                  </p>
                </div>
              </Fade>
              <Fade top when={show}>
                <h1 className='text-3xl text-purple-800 font-bold my-10'>
                  Manage the complete <br />
                  ESOP{" "}
                </h1>
                <p className='w-[25rem] text-gray-300'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus vitae iusto ducimus vel. Ipsa consequuntur excepturi
                  harum! Cumque voluptatibus ea blanditiis recusandae sit.
                </p>
              </Fade>
              <Fade top when={show}>
                <h1 className='text-3xl text-purple-800 font-bold my-10'>
                  Manage the complete <br />
                  ESOP{" "}
                </h1>
                <p className='w-[25rem] text-gray-300'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus vitae iusto ducimus vel. Ipsa consequuntur excepturi
                  harum! Cumque voluptatibus ea blanditiis recusandae sit.
                </p>
              </Fade>
            </div>
          </div>
        </div>
        {/* IMG DIV */}
        <div>
          <img src={hero} className='w-[30rem]' alt='' />
        </div>
      </div>
    </>
  );
};
const styles = {
  block: {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    // width: "1100%",
    height: "100%",
    background: "#000",
    borderLeft: "2px solid purple",
  },
  title: {
    textAlign: "center",
    fontSize: 100,
    color: "#fff",
    fontFamily: "Lato, sans-serif",
    fontweight: 100,
  },
};

export default Banner;
