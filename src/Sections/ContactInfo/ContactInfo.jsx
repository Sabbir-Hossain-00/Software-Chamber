import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowUp } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

export const ContactInfo = () => {
  const containerRef = useRef(null);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up animation for the grid columns together
      gsap.fromTo(
        containerRef.current.querySelectorAll(".fade-up-col"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, containerRef);

    // Back to top button visibility on scroll
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll to top on button click
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="2xl:max-w-[1760px] mx-auto px-3 py-24 border-dashed border-b" ref={containerRef}>
      <h1 className="2xl:text-9xl xl:text-8xl lg:text-6xl md:text-5xl text-3xl font-medium text-[#E9E9E9] bricolage-grotesque">LET’S TALK</h1>
      <div className="grid md:grid-cols-3 gap-10 2xl:gap-75 xl:gap-45 lg:gap-15 md:gap-10 mt-20">
        {/* Left column */}
        <div className="space-y-20 fade-up-col">
          <p className="2xl:text-2xl text-[#A6A6A6] font-medium">
            A new era of energy, elegance, and elite competition begins here. Where passion meets performance on the court like never before.
          </p>
          <div className="space-y-5">
            <h2 className="2xl:text-3xl text-2xl font-medium text-[#E9E9E9]">Social media</h2>
            <div className="grid grid-cols-3 gap-3">
              {["Instagram", "Twitter", "Tiktok", "Facebook", "LinkedIn", "Youtube"].map((platform) => (
                <div className="flex justify-center items-center gap-2 min-w-fit">
                  <a
                  key={platform}
                  href="#"
                  className="2xl:text-2xl text-[#A6A6A6] font-medium transform transition-transform duration-300 hover:rotate-8 hover:scale-105"
                >
                  {platform}
                </a>
                <GoArrowUpRight />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle column */}
        <div className="space-y-10 fade-up-col">
          <div className="space-y-4">
            <h2 className="2xl:text-3xl text-xl font-medium">ADDRESS</h2>
            <p className="2xl:text-2xl text-[#A6A6A6]">1901 thornridge Cir, <br /> Shiloh, Hawaii 81063</p>
          </div>
          <div className="space-y-4">
            <h2 className="2xl:text-3xl text-xl font-medium">PHONE</h2>
            <p className="2xl:text-2xl text-[#A6A6A6]">[+1] 872-298-3989</p>
          </div>
          <div className="space-y-4">
            <h2 className="2xl:text-3xl text-xl font-medium">EMAIL</h2>
            <p className="2xl:text-2xl text-[#A6A6A6]">hello@tranzit.com</p>
          </div>
        </div>

        {/* Right column */}
        <div className="fade-up-col ">
          <img className="relative z-10 " src="/images/peoples-2.png" alt="" />
        </div>
      </div>

      <div className="absolute left-0 -bottom-46">
        <img className="w-3/4" src="/images/contact-glow-left.png" alt="" />
      </div>
      <div className="absolute top-0 right-0">
        <img src="/images/banner-glow-right.png" alt="" />
      </div>

      {/* Back to top button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 flex justify-center items-center md:right-10 right-4 z-50 bg-teal-400 hover:bg-teal-500 text-white rounded-full w-10 h-10 shadow-lg transition-opacity duration-300"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};
