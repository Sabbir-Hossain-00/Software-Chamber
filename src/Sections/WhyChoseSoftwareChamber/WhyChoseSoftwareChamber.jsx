import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { TbArrowUpRight } from "react-icons/tb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const WhyChoseSoftwareChamber = () => {
  const swiperRef = useRef(null);

  // Refs for cards and icons
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const iconsRef = useRef([]);
  iconsRef.current = [];

  // Refs for heading lines and button for animation
  const headingRefs = useRef([]);
  headingRefs.current = [];

  // Helper to add refs to headingRefs array
  const addHeadingRef = (el) => {
    if (el && !headingRefs.current.includes(el)) {
      headingRefs.current.push(el);
    }
  };

  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const addIconRef = (el) => {
    if (el && !iconsRef.current.includes(el)) {
      iconsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Animate heading lines on scroll with fade-up and stagger
    const ctx = gsap.context(() => {
      gsap.from(headingRefs.current, {
        scrollTrigger: {
          trigger: headingRefs.current[0], // first heading line triggers animation
          start: "top 80%",
          toggleActions: "restart none none none",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Scroll-trigger fade + rotate animation on cards
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, rotate: 1, y: 20 },
        {
          opacity: 1,
          rotate: 0,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  // Hover handlers for cards
  const handleCardMouseEnter = (index) => {
    const card = cardsRef.current[index];
    const icon = iconsRef.current[index];
    if (card) {
      gsap.to(card, {
        y: "-=6",
        boxShadow: "0 8px 20px rgba(39,180,163,0.3)",
        outline: "none",
        duration: 0.25,
        ease: "power1.out",
      });
    }
    if (icon) {
      gsap.to(icon, {
        rotate: 8,
        duration: 0.25,
        ease: "power1.out",
      });
    }
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };

  const handleCardMouseLeave = (index) => {
    const card = cardsRef.current[index];
    const icon = iconsRef.current[index];
    if (card) {
      gsap.to(card, {
        y: 0,
        boxShadow: "none",
        outline: "none",
        duration: 0.25,
        ease: "power1.out",
      });
    }
    if (icon) {
      gsap.to(icon, {
        rotate: 0,
        duration: 0.25,
        ease: "power1.out",
      });
    }
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };

  const features = [
    {
      title: "Efficiency",
      icon: "/images/feature-1.png",
      description:
        "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    },
    {
      title: "Precision",
      icon: "/images/feature-2.png",
      description:
        "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    },
    {
      title: "Adaptability",
      icon: "/images/feature-3.png",
      description:
        "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    },
    {
      title: "Scalability",
      icon: "/images/feature-4.png",
      description:
        "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    },
    {
      title: "Precision",
      icon: "/images/feature-1.png",
      description:
        "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    },
    {
      title: "Scalability",
      icon: "/images/feature-3.png",
      description:
        "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    },
  ];

  return (
    <div className="2xl:max-w-[1760px] mx-auto px-7 2xl:py-30 md:py-20 py-10">
      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center gap-6 text-center md:mb-10">
        <h1
          ref={addHeadingRef}
          className="2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl font-medium bricolage-grotesque"
        >
          Why Choose <br /> Softwarechamber
        </h1>
        <p ref={addHeadingRef} className="2xl:text-2xl text-[#494949]">
          Deliver personalized experiences to your customers with AI-powered{" "}
          <br />
          recommendation engines and dynamic content generation.
        </p>
        <button
          ref={addHeadingRef}
          className="bg-gradient-to-r from-[#16AD71]  to-[#2CCEBA] px-2 py-2 md:px-5 md:py-4 rounded-full text-[#E9E9E9] font-medium flex justify-center text-base md:text-xl items-center gap-6"
        >
          Let’s Discuss{" "}
          <span className="bg-[#E9E9E9] rounded-full text-black p-2 md:p-3">
            <TbArrowUpRight size={24} />
          </span>
        </button>
      </div>

      {/* Carousel */}
      <div className="relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="flex justify-center py-7 mt-16">
              <div
                ref={addCardRef}
                onMouseEnter={() => handleCardMouseEnter(index)}
                onMouseLeave={() => handleCardMouseLeave(index)}
                className={`w-full  p-6 2xl:pb-12 2xl:p-10 rounded-3xl bg-[#F3F3F3] transition-all duration-300 ease-in-out 2xl:gap-10 flex flex-col justify-between min-h-[260px] ${
                  index % 2 === 0 ? "relative bottom-12" : ""
                }`}
              >
                <div className="border-b border-b-[#A5A5A5] pb-4 2xl:pb-6 flex justify-between items-center">
                  <h1 className="2xl:text-4xl text-2xl font-medium bricolage-grotesque">
                    {feature.title}
                  </h1>
                  <img
                    ref={addIconRef}
                    className="bg-[#2CCEBA] p-3 2xl:p-4 rounded-full w-10 2xl:w-14"
                    src={feature.icon}
                    alt={feature.title}
                  />
                </div>
                <p className="2xl:text-2xl text-[#494949]">{feature.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrow Navigation */}
        <div className="absolute inset-y-0 -left-5 flex items-center z-10">
          <button className="prev-btn bg-black text-white p-3 rounded-full shadow hover:bg-[#2CCEBA]">
            <IoArrowBackSharp size={20} />
          </button>
        </div>
        <div className="absolute inset-y-0 -right-5 flex items-center z-10">
          <button className="next-btn bg-black p-3 rounded-full shadow text-white hover:bg-[#2CCEBA]">
            <IoArrowForwardSharp size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
