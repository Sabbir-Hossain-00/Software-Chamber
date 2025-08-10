import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactButton } from "../../Components/ContactButton/ContactButton";
import { IconBox } from "../../Components/IconBox/IconBox";
import { SmarterIdea } from "../../Components/SmarterIdea/SmarterIdea";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const headlineRefs = useRef([]);
  const badgeRefs = useRef([]);

  // Do NOT reset these refs on each render
  // headlineRefs.current = [];
  // badgeRefs.current = [];

  const addHeadlineRef = (el) => {
    if (el && !headlineRefs.current.includes(el)) {
      headlineRefs.current.push(el);
    }
  };

  const addBadgeRef = (el) => {
    if (el && !badgeRefs.current.includes(el)) {
      badgeRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline fade-up sequentially on scroll
      gsap.from(headlineRefs.current, {
        scrollTrigger: {
          trigger: headlineRefs.current[0],
          start: "top 80%",
          toggleActions: "play reverse play reverse", // animate in & out on scroll
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
      });

      // Badge pop-in on scroll
      gsap.from(badgeRefs.current, {
        scrollTrigger: {
          trigger: badgeRefs.current[0],
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.22,
        ease: "back.out(1.7)",
        stagger: 0.12,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="container px-3 mx-auto bg-[url(images/frame.png)] md:pt-20 pt-10 flex justify-center items-center flex-col ">
      {/* Hero content */}
      <div className="bg-[url(images/vector_dot.png)] flex flex-col justify-center items-center gap-3 md:pb-15 pb-10 bricolage-grotesque">
        <div>
          <SmarterIdea />
        </div>
        <div>
          <h1
            ref={addHeadlineRef}
            className="md:text-6xl text-2xl font-semibold text-center mb-3 text-[#00FFE0]"
          >
            We are your Software
          </h1>
          <h1
            ref={addHeadlineRef}
            className="md:text-6xl text-2xl font-semibold text-center mb-3 flex items-center justify-center md:gap-4 gap-2 bg-gradient-to-b from-teal-400 to-white bg-clip-text text-transparent"
          >
            Development
            <IconBox ref={addBadgeRef} src="/images/man_icon.png" alt="Man Icon" />
            <IconBox ref={addBadgeRef} src="/images/content.png" alt="Content Icon" />
            Team
          </h1>
          <h1
            ref={addHeadlineRef}
            className="md:text-6xl text-2xl font-semibold text-center mb-3"
          >
            in The Cloud
          </h1>
        </div>
        <div className="md:mt-4">
          <ContactButton />
        </div>
      </div>

      {/* Hero image */}
      <div>
        <img src="/images/hero.png" alt="Hero" />
      </div>

      {/* Shadow backgrounds */}
      <div className="absolute top-0 left-0">
        <img src="/images/vector.png" alt="Vector" />
      </div>
      <div className="absolute top-80 -left-30">
        <img src="/images/vector.png" alt="Vector" />
      </div>
      <div className="absolute top-0 right-0">
        <img src="/images/vector-reverse.png" alt="Vector Reverse" />
      </div>
      <div className="absolute top-80 -right-50">
        <img src="/images/vector-reverse.png" alt="Vector Reverse" />
      </div>
    </div>
  );
};
