import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SmarterIdea } from "../../Components/SmarterIdea/SmarterIdea";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    quote:
      "Working with this team has transformed our product. Their expertise and dedication are unmatched. Highly recommend!",
    avatar: "/images/man.png",
    name: "Alex Larkins",
    position: "Art Director at Airbnb",
    logo: "/images/logo-3.png",
  },
  {
    quote:
      "The professionalism and creativity shown throughout the project exceeded our expectations. We’re thrilled with the results.",
    avatar: "/images/man.png",
    name: "Jessica Morgan",
    position: "CEO at Tech Solutions",
    logo: "/images/logo-3.png",
  },
  {
    quote:
      "Their attention to detail and timely delivery made a huge difference. We look forward to future collaborations.",
    avatar: "/images/man.png",
    name: "Michael Chen",
    position: "Product Manager at FinCorp",
    logo: "/images/logo-3.png",
  },
];

export const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const quoteRef = useRef(null);
  const avatarRef = useRef(null);
  const starsRef = useRef(null);
  const shineRef = useRef(null);
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  useEffect(() => {
    if (shineRef.current) {
      gsap.to(shineRef.current, {
        opacity: 0.15,
        duration: 0.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    }
  }, []);

  useEffect(() => {
    function playQuoteAnimation() {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power1.out" }
      );

      gsap.fromTo(
        [avatarRef.current, starsRef.current],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.06,
          delay: 0.3,
        }
      );
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        onEnter: () => playQuoteAnimation(),
        onEnterBack: () => playQuoteAnimation(),
      });
    }, containerRef);

    playQuoteAnimation();

    return () => ctx.revert();
  }, [currentIndex]);

  useEffect(() => {
    // Headline fade-up with staggered lines
    if (headlineRef.current) {
      const lines = headlineRef.current.querySelectorAll(".headline-line");
      gsap.fromTo(
        lines,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12, // 120ms delay
          ease: "power2.out",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  const review = reviews[currentIndex];

  return (
    <div
      ref={containerRef}
      className="2xl:max-w-[1760px] mx-auto px-3 md:py-30 py-10 flex flex-col gap-10 justify-center items-center z-10"
    >
      <div>
        <SmarterIdea />
      </div>

      {/* Headline with lines for stagger */}
      <div ref={headlineRef} className="text-center">
        <h1 className=" 2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl font-medium text-[#E9E9E9] leading-tight bricolage-grotesque">
          <span className="headline-line block">Don’t just take our word for it.</span>
          <span className="headline-line block">
            Hear what <span className="text-[#A5A5A5]">our clients say</span>
          </span>
        </h1>
      </div>

      <div className="z-10 bg-[#090B0F] flex flex-col gap-16 md:mt-24 mt-6 shadow-[0_2px_20px_rgba(44,206,186,0.3)] rounded-2xl md:py-20 md:px-30 p-4 relative">
        <div
          ref={shineRef}
          className="absolute top-2 left-4 text-[6rem] text-[#00FFE0] opacity-10 pointer-events-none select-none"
        >
          “
        </div>

        <h1
          ref={quoteRef}
          className="font-medium 2xl:text-4xl md:text-2xl text-lg md:w-[80%] relative z-10 2xl:mb-10"
          key={currentIndex}
        >
          "{review.quote}"
        </h1>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              ref={avatarRef}
              className="w-12 2xl:w-14"
              src={review.avatar}
              alt={review.name}
            />
            <div>
              <h2 className="2xl:text-2xl text-lg font-medium">{review.name}</h2>
              <p className="2xl:text-lg text-xs">{review.position}</p>
            </div>
          </div>
          <div>
            <img
              ref={starsRef}
              className="w-40 2xl:w-60"
              src={review.logo}
              alt={`${review.name} company logo`}
            />
          </div>
        </div>
      </div>

      <div className="absolute -top-120 -left-10">
        <img src="/images/review-glow-top.png" alt="" />
      </div>
    </div>
  );
};
