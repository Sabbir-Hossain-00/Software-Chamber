import React from "react";
import Marquee from "react-fast-marquee";
import { ContactButton } from "../../Components/ContactButton/ContactButton";
import { SmarterIdea } from "../../Components/SmarterIdea/SmarterIdea";

export const AwardAndPartern = () => {
  // Logo data (you can expand/change this if you want)
  const logos = [
    { src: "/images/image-1.png", label: "Health Care" },
    { src: "/images/image-2.png", label: "Developers" },
    { src: "/images/image-3.png", label: "Software" },
    { src: "/images/image-4.png", label: "Entertainment" },
    { src: "/images/image-5.png", label: "Manufacturing" },
    { src: "/images/image-6.png", label: "Energy" },
    { src: "/images/image-7.png", label: "Auto Motive" },
  ];

  return (
    <div className="container mx-auto px-3 py-20">
      {/* companies */}
      <div className=" relative flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className=" md:text-6xl text-2xl font-medium text-[#E9E9E9]">
            Our Stack Powers of <br /> the{" "}
            <span className=" text-[#A5A5A5]">World’s</span> Most <br />{" "}
            <span className=" text-[#A5A5A5]">Beloved Companies</span>
          </h1>
        </div>
        <div className=" grid grid-cols-2 gap-4">
          <div className="relative left-8 md:left-0 flex justify-center items-center gap-4 bg-[#2CCEBA] w-fit py-2 px-2 rounded-full">
            <img
              className=" w-8 p-2 bg-white rounded-full"
              src="/images/sopify.png"
              alt=""
            />
            <p>Sopify</p>
          </div>
          <div className=" relative left-8 md:left-0 flex justify-center items-center gap-4 bg-[#2CCEBA] w-fit py-2 px-2 rounded-full">
            <img
              className=" w-8 p-2 bg-white rounded-full"
              src="/images/sopify.png"
              alt=""
            />
            <p>Sopify</p>
          </div>
          <div className="relative right-8 md:right-17 flex justify-center items-center gap-4 bg-[#2CCEBA] w-fit py-2 px-2 rounded-full">
            <img
              className=" w-8 p-2 bg-white rounded-full"
              src="/images/sopify.png"
              alt=""
            />
            <p>Sopify</p>
          </div>
          <div className="relative right-8 md:right-17 flex justify-center items-center gap-4 bg-[#2CCEBA] w-fit py-2 px-2 rounded-full">
            <img
              className=" w-8 p-2 bg-white rounded-full"
              src="/images/sopify.png"
              alt=""
            />
            <p>Sopify</p>
          </div>
          <div className="relative left-8 md:left-0 flex justify-center items-center gap-4 bg-[#2CCEBA] w-fit py-2 px-2 rounded-full">
            <img
              className=" w-8 p-2 bg-white rounded-full"
              src="/images/sopify.png"
              alt=""
            />
            <p>Sopify</p>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className="bg-[url('/images/award-glow-center.png'),_url('/images/award-glow-left.png'),_url('/images/award-glow-right.png'),_url('/images/award-glow-sec-right.png')] bg-no-repeat bg-[position:top_left,_bottom_left,bottom_right,_bottom_right] bg-contain flex justify-center items-center flex-col md:gap-10 gap-3 mt-20 border border-[#22C1AD99] rounded-4xl md:p-20 p-10">
        <div className="mb-6">
          <SmarterIdea />
        </div>
        <div>
          <img
            className="p-5 bg-white rounded-full"
            src="/images/logo-2.png"
            alt="Main Logo"
          />
        </div>
        <h1 className="text-center md:text-6xl text-2xl font-medium text-[#E9E9E9]">
          Uncover the Design and Development
        </h1>
        <h1 className="text-center md:text-6xl text-2xl font-medium text-[#E9E9E9]">
          Projects <span className="text-[#A5A5A5]">That Set Us Apart</span>
        </h1>
        <div className="mt-6">
          <ContactButton />
        </div>
      </div>

      {/* stories with marquee */}
      <div className="flex flex-col justify-center items-center gap-10 md:pt-20 pt-10">
        <div className="md:mb-10">
          <SmarterIdea />
        </div>

        {/* Marquee 1 */}
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          direction="left"
          className="w-full"
        >
          <div className="flex gap-10 items-center">
            {logos.map(({ src, label }, i) => (
              <React.Fragment key={`m1-${i}`}>
                <img
                  className="w-20 md:w-40 filter grayscale transition duration-250 ease-in-out cursor-pointer hover:filter-none"
                  src={src}
                  alt={label}
                />
                <p className="text-lg md:text-2xl font-medium text-white">{label}</p>
              </React.Fragment>
            ))}
          </div>
        </Marquee>

        {/* Marquee 2 (reverse direction for variety) */}
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          direction="left"
          className="w-full"
        >
          <div className="flex gap-10 items-center">
            {logos
              .slice()
              .reverse()
              .map(({ src, label }, i) => (
                <React.Fragment key={`m2-${i}`}>
                  <p className="text-lg md:text-2xl font-medium text-white">{label}</p>
                  <img
                    className="w-20 md:w-40 filter grayscale transition duration-250 ease-in-out cursor-pointer hover:filter-none"
                    src={src}
                    alt={label}
                  />
                </React.Fragment>
              ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};
