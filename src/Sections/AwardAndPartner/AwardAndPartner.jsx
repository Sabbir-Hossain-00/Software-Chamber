import React, { useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { ContactButton } from "../../Components/ContactButton/ContactButton";
import { SmarterIdea } from "../../Components/SmarterIdea/SmarterIdea";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  // Company cards data including position classes
  const companies = [
    {
      src: "/images/sopify.png",
      label: "Sopify",
      positionClass: "relative left-0 md:left-0",
    },
    {
      src: "/images/talentqi.png",
      label: "TalentQI",
      positionClass: "relative left-0 md:left-0",
    },
    {
      src: "/images/dropbox.png",
      label: "DropBox",
      positionClass: "relative right-0 md:right-17",
    },
    {
      src: "/images/fliqpay.png",
      label: "FliqPay",
      positionClass: "relative right-0 md:right-17",
    },
    {
      src: "/images/slack.png",
      label: "Slack",
      positionClass: "relative left-0 md:left-0",
    },
  ];

  // Refs for animation targets
  const companyHeadingRefs = useRef([]);
  const companyCardRefs = useRef([]);
  const contactHeadingRefs = useRef([]);
  const contactButtonRef = useRef(null);

  // Helpers to add refs
  companyHeadingRefs.current = [];
  companyCardRefs.current = [];
  contactHeadingRefs.current = [];

  const addCompanyHeadingRef = (el) => {
    if (el && !companyHeadingRefs.current.includes(el)) {
      companyHeadingRefs.current.push(el);
    }
  };

  const addCompanyCardRef = (el) => {
    if (el && !companyCardRefs.current.includes(el)) {
      companyCardRefs.current.push(el);
    }
  };

  const addContactHeadingRef = (el) => {
    if (el && !contactHeadingRefs.current.includes(el)) {
      contactHeadingRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Animate companies section heading + cards
    const ctx = gsap.context(() => {
      gsap.from(
        [...companyHeadingRefs.current, ...companyCardRefs.current],
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: companyHeadingRefs.current[0],
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Animate contact section headings + button
      gsap.from([...contactHeadingRefs.current, contactButtonRef.current], {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactHeadingRefs.current[0],
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="2xl:max-w-[1760px]  mx-auto xl:px-12 lg:px-10 md:px-6 px-3 py-20">
      {/* companies */}
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-4 2xl:py-10">
        <div className="relative">
          <h1
            ref={addCompanyHeadingRef}
            className="2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl font-medium text-[#E9E9E9] bricolage-grotesque z-10 relative"
          >
            Our Stack Powers of <br /> the{" "}
            <span className="text-[#A5A5A5]">World’s</span> Most <br />{" "}
            <span className="text-[#A5A5A5]">Beloved Companies</span>
          </h1>
          <img className=" absolute -top-30 2xl:-top-56" src="images/review-glow.png" alt="" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {companies.map(({ src, label, positionClass }, i) => (
            <div
              key={i}
              ref={addCompanyCardRef}
              className={`${positionClass} flex justify-center items-center gap-4 bg-gradient-to-t from-[#2CCEBA0D]  to-[#2CCEBA] w-fit p-2 md:px-3 md:py-3 xl:px-6 xl:py-5 rounded-full`}
            >
              <img
                className="w-8 md:w-9 md:h-9 xl:w-12 xl:h-12 p-2 xl:p-3 bg-white rounded-full"
                src={src}
                alt={label}
              />
              <p className="text-[#E9E9E9] font-medium mr-3 text-base xl:text-xl">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* contact */}
      <div className="mt-20 bg-gradient-to-t from-[#D387FF00]  to-[#22C1AD99] rounded-4xl p-[1px]">
        <div
          className="bg-[#090B0F] bg-[url('/images/award-glow-center.png'),_url('/images/award-glow-left.png'),_url('/images/award-glow-right.png'),_url('/images/award-glow-sec-right.png')] bg-no-repeat bg-[position:top_left,_bottom_left,bottom_right,_bottom_right] bg-contain flex justify-center items-center flex-col md:gap-10 gap-3  rounded-4xl md:p-20 p-10"
        >
          <div className="mb-6 2xl:mb-10">
            <SmarterIdea />
          </div>
          <div>
            <img
              className="p-5 bg-white rounded-4xl 2xl:mb-10"
              src="/images/logo-2.png"
              alt="Main Logo"
            />
          </div>
          <h1
            ref={addContactHeadingRef}
            className="text-center 2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl font-medium text-[#E9E9E9] bricolage-grotesque"
          >
            Uncover the Design and Development
          </h1>
          <h1
            ref={addContactHeadingRef}
            className="text-center xl:text-7xl lg:text-5xl md:text-4xl text-2xl font-medium text-[#E9E9E9] bricolage-grotesque 2xl:mb-10"
          >
            Projects <span className="text-[#A5A5A5]">That Set Us Apart</span>
          </h1>
          <div className="mt-6" ref={contactButtonRef}>
            <ContactButton />
          </div>
        </div>
      </div>

      {/* stories with marquee */}
      <div className="flex flex-col justify-center items-center gap-10 md:pt-20 pt-10">
        <div className="md:mb-10 2xl:mt-6">
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
          <div className="flex gap-10 items-center 2xl:mb-10">
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
