import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Items = [
  "Al trademarks and logos or registered trademarks and logos found on this Site or mentioned herein belong to their respective owners and are solely being used for informational purposes.",

  "Information provided herein has been gathered from public sources. Fincentiv Solutions Pvt. Ltd. disclaims any and all responsibility in connection with veracity of this data Information presented on this website is for educational purposes only and should not be treated as legal, financial, or any other form of advice. Fincentiv Solutions Pvt. Ltd. is not liable for financial or any other form of loss incurred by the user or any affiliated party on the basis of information provided herein.",

  " Fincentiv Solutions Pvt. Ltd. is neither a stock exchange nor does it intend to get recognized as a stock exchange under the Securities Contracts Regulation Act, 1956. Fincentiv Solutions Pvt. Ltd. is not authorised by the capital markets regulator to solicit investments. The securities traded on these platforms are not traded on any regulated exchange. Fincentiv Solutions Pvt. Ltd. also provides that it does not facilitate any online or offline buying, selling, or trading of securities.",

  "Investing in private companies may be considered highly speculative and involves a high degree of risk, including the risk of substantial loss of investment Investors must be able to afford the loss of their entire investment",
];
const Footer = () => {
  return (
    <>
      {/* Main DIv */}
      <div className='bg-[#0D1329] px-36 pt-10 pb-32 flex flex-col gap-12'>
        {/* First div */}
        <h1 className='text-2xl text-blue-400 font-bold mb-4'>incentive.</h1>
        <div className='flex items-start justify-between  '>
          <div>
            <p className='w-[22rem] text-gray-400 font-semibold text-lg text-justify'>
              Incentiv's ESOP management platform (name undecided) will offer an
              easy way for "employers" to issue ESOPs/grants to their employees,
              and allow employees to easily accept, track, exercise, and sell
              their granted shares.
            </p>
          </div>
          {/* Contact Div */}
          <div>
            <h1 className='text-xl text-blue-400 font-bold mb-5'>Contacts</h1>
            <div className='flex items-center gap-4 my-4'>
              <EmailIcon className='text-blue-400' />
              <p className='text-gray-400 font-semibold text-lg'>
                support@incentive.in
              </p>
            </div>
            <div className='flex items-start gap-4'>
              <LocationOnIcon className='text-blue-400' />
              <p className='text-gray-400 font-semibold text-lg'>
                Beginest Harbour 4, Indiranagar,
                <br />
                Bangalore, Karnataka 560038
              </p>
            </div>
          </div>
          {/* Fine Print */}
          <div>
            <h1 className='text-xl text-blue-400 font-bold mb-5'>Fine Print</h1>
            <h1 className=' text-gray-400 font-semibold text-lg my-4'>
              Privacy & Policy
            </h1>
            <h1 className=' text-gray-400 font-semibold text-lg'>
              Terms and Condition
            </h1>
          </div>
        </div>
        {/* SECOND BULLET POINT DIV */}
        <div>
          <h1 className='text-xl text-blue-400 font-bold mb-6'>
            Legal Disclaimer
          </h1>
          <div className='flex flex-col gap-4 '>
            {Items?.map((item, i) => (
              <li className='text-gray-400 text-sm leading-[1.8rem]'>{item}</li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
