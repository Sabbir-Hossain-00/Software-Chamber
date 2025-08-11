import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactButton } from "../../Components/ContactButton/ContactButton";
import { IconBox } from "../../Components/IconBox/IconBox";
import { SmarterIdea } from "../../Components/SmarterIdea/SmarterIdea";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const headlineRefs = useRef([]);
  const badgeRefs = useRef([]);
  const cardStackRef = useRef(null);
  const cardRefs = useRef([]);
  const [currentTopIndex, setCurrentTopIndex] = useState(0);

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

  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline fade-up on scroll
      gsap.from(headlineRefs.current, {
        scrollTrigger: {
          trigger: headlineRefs.current[0],
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
      });

      // Badge pop-in
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

      // Parallax effect for card stack
      const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 10;
        const y = (e.clientY / innerHeight - 0.5) * 10;
        gsap.to(cardRefs.current, {
          x,
          y,
          duration: 0.4,
          ease: "power2.out",
        });
      };
      window.addEventListener("mousemove", handleMouseMove);

      // Card swap animation every 4s
      const swapInterval = setInterval(() => {
        const nextIndex = (currentTopIndex + 1) % cardRefs.current.length;
        const currentCard = cardRefs.current[currentTopIndex];
        const nextCard = cardRefs.current[nextIndex];

        gsap.to(currentCard, {
          y: -50,
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
            currentCard.style.zIndex = 0;
            nextCard.style.zIndex = 1;
            gsap.fromTo(
              nextCard,
              { y: 50, opacity: 0, scale: 0.95 },
              { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
            );
            setCurrentTopIndex(nextIndex);
          },
        });
      }, 4000);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        clearInterval(swapInterval);
      };
    });

    return () => ctx.revert();
  }, [currentTopIndex]);

  return (
    <div className="2xl:max-w-[1760px] px-3 mx-auto bg-[url(images/frame.png)] md:pt-20 pt-10 flex justify-center items-center flex-col">
      {/* Hero content */}
      <div className="bg-[url(images/vector_dot.png)] flex flex-col justify-center items-center gap-3 md:pb-15 pb-10 bricolage-grotesque">
        <div>
          <SmarterIdea />
        </div>
        <div>
          <h1
            ref={addHeadlineRef}
            className="2xl:text-9xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl font-semibold text-center mb-3 text-[#00FFE0]"
          >
            We are your Software
          </h1>
          <h1
            ref={addHeadlineRef}
            className="2xl:text-9xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl font-semibold text-center mb-3 flex items-center justify-center md:gap-4 gap-2 bg-gradient-to-b from-teal-400 to-white bg-clip-text text-transparent"
          >
            Development
            <IconBox
              ref={addBadgeRef}
              src="/images/man_icon.png"
              alt="Man Icon"
            />
            <IconBox
              ref={addBadgeRef}
              src="/images/content.png"
              alt="Content Icon"
            />
            Team
          </h1>
          <h1
            ref={addHeadlineRef}
            className="2xl:text-9xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl font-semibold text-center mb-3"
          >
            in The Cloud
          </h1>
        </div>
        <div className="md:mt-4">
          <ContactButton />
        </div>
      </div>

      {/* Hero cards with animations */}
      <div className="mb-20 mt-20">
        <div></div>
        <div className="relative" ref={cardStackRef}>
          <div
            ref={addCardRef}
            className=" flex justify-center items-center gap-6 bg-white/3 backdrop-blur-md rounded-4xl p-6 z-[1]"
          >
            <img className="w-100" src="/images/hero-card-3.png" alt="" />
            <div className="flex flex-col justify-center items-start gap-6 pr-16">
              <h1 className="text-lg font-medium text-white">
                Software Service <br /> Solutions
              </h1>
              <p className="text-[#F8F8F8B2]">
                Plan, track, and <br /> manage projects with <br /> precision
                tools.
              </p>
              <button className="bg-[#282828B2] px-6 py-3 rounded-full text-[#F8F8F8B2] font-medium">
                Discover
              </button>
            </div>
          </div>
          <div
            ref={addCardRef}
            className="absolute top-0 flex justify-center items-center gap-6 bg-white/3 backdrop-blur-md rounded-4xl p-6"
          >
            <img className="w-110" src="/images/hero-card-2.png" alt="" />
            <div className="flex flex-col justify-center items-start gap-6 pr-16">
              <h1 className="text-lg font-medium text-white">
                Our Professional <br /> Trainig Platform
              </h1>
              <p className="text-[#F8F8F8B2]">
                Plan, track, and <br /> manage projects with <br /> precision
                tools.
              </p>
              <button className="bg-[#282828B2] px-6 py-3 rounded-full text-[#F8F8F8B2] font-medium">
                Discover
              </button>
            </div>
          </div>
          <div
            ref={addCardRef}
            className="absolute top-0 flex justify-center items-center gap-6 bg-white/3 backdrop-blur-md rounded-4xl p-6"
          >
            <img className="w-100" src="/images/hero-card.png" alt="" />
            <div className="flex flex-col justify-center items-start gap-6 pr-16">
              <h1 className="text-lg font-medium text-white">
                Software Service <br /> Solutions
              </h1>
              <p className="text-[#F8F8F8B2]">
                Plan, track, and <br /> manage projects with <br /> precision
                tools.
              </p>
              <button className="bg-[#282828B2] px-6 py-3 rounded-full 2xl:text-2xl text-[#F8F8F8B2] font-medium">
                Discover
              </button>
            </div>
          </div>
        </div>
        <div></div>
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
