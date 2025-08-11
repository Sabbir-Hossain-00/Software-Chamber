import { useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const arrowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up cards on scroll with 100ms stagger
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current[0], 
          start: "top 85%", 
          toggleActions: "play reverse play reverse", 
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1, 
      });

    });

    return () => ctx.revert();
  }, []);

  // Arrow hover handlers for sliding right 6px on hover
  const handleArrowMouseEnter = () => {
    gsap.to(arrowRef.current, {
      x: 6,
      duration: 0.18,
      ease: "power1.out",
    });
  };
  const handleArrowMouseLeave = () => {
    gsap.to(arrowRef.current, {
      x: 0,
      duration: 0.18,
      ease: "power1.out",
    });
  };

  // Card hover animation handled with inline GSAP on events
  const handleCardMouseEnter = (e) => {
    const card = e.currentTarget;
    const icon = card.querySelector("span > svg");

    gsap.to(card, {
      y: -8,
      boxShadow: "0 15px 25px rgba(39, 180, 163, 0.4)",
      duration: 0.18,
      ease: "power1.out",
    });
    if (icon) {
      gsap.to(icon, {
        y: -6,
        duration: 0.18,
        ease: "power1.out",
      });
    }
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    const icon = card.querySelector("span > svg");

    gsap.to(card, {
      y: 0,
      boxShadow: "none",
      duration: 0.18,
      ease: "power1.out",
    });
    if (icon) {
      gsap.to(icon, {
        y: 0,
        duration: 0.18,
        ease: "power1.out",
      });
    }
  };

  return (
    <div>
      {/* title */}
      <div className="flex justify-between items-center md:mt-6">
        <div className="flex items-center md:gap-4 gap-2">
          <h1 className="2xl:text-9xl xl:text-8xl lg:text-6xl md:text-5xl text-3xl font-bold bricolage-grotesque">Services</h1>
          <img
            src="/images/charming-vector.png"
            className="md:w-12 w-8 "
            alt="Charming vector"
          />
        </div>
        <button
          className="flex justify-center items-center gap-3"
          onMouseEnter={handleArrowMouseEnter}
          onMouseLeave={handleArrowMouseLeave}
        >
          <p className="2xl:text-2xl font-medium text-[#808080]">All Services</p>
          <span
            ref={arrowRef}
            className="p-2 2xl:p-3 bg-[#F3F3F3] rounded-full inline-block"
            style={{ display: "inline-flex" }}
          >
            <FaArrowRightLong />
          </span>
        </button>
      </div>

      {/* content */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:mt-20 mt-10 2xl:mb-10">
        {/* card-1 */}
        <div
          ref={addCardRef}
          className="bg-[#F3F3F3] md:p-12 p-5 rounded-3xl flex flex-col gap-6 2xl:gap-10 cursor-pointer"
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        >
          <h1 className="2xl:text-5xl text-3xl font-medium">Web & Mobile App Development</h1>
          <p className="2xl:text-2xl text-[#808080]">
            Software Chamber specializes in creating powerful, scalable, and
            secure e-
          </p>
          <span className="bg-white 2xl:p-6 p-4 w-fit rounded-full shadow-2xl inline-flex">
            <GoArrowUpRight size={26}/>
          </span>
        </div>

        {/* card-2 */}
        <div
          ref={addCardRef}
          className="bg-[#27B4A3] text-white md:p-12 p-5 rounded-3xl flex flex-col gap-6 2xl:gap-10 cursor-pointer"
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        >
          <h1 className="2xl:text-5xl text-3xl font-medium">
            Application Software Services
          </h1>
          <p className="2xl:text-2xl ">
            Software Chamber specializes in creating powerful, scalable, and
            secure e-
          </p>
          <span className="bg-white text-black 2xl:p-6 p-4 w-fit rounded-full shadow-2xl inline-flex">
            <GoArrowUpRight size={26}/>
          </span>
        </div>

        {/* card-3 */}
        <div
          ref={addCardRef}
          className="bg-[#F3F3F3] md:p-12 p-5 rounded-3xl flex flex-col gap-6 2xl:gap-10 cursor-pointer"
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        >
          <h1 className="2xl:text-5xl text-3xl font-medium">
            Software Coding & Optimization
          </h1>
          <p className="2xl:text-2xl text-[#808080]">
            Software Chamber specializes in creating powerful, scalable, and
            secure e-
          </p>
          <span className="bg-white 2xl:p-6 p-4 w-fit rounded-full shadow-2xl inline-flex">
            <GoArrowUpRight size={26}/>
          </span>
        </div>
      </div>
    </div>
  );
};
