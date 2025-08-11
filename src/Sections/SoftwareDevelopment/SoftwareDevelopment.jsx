import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactButton } from "../../Components/ContactButton/ContactButton";
import { SmarterIdea } from "../../Components/SmarterIdea/SmarterIdea";

gsap.registerPlugin(ScrollTrigger);

export const SoftwareDevelopment = () => {
  const containerRef = useRef(null);
  const headlineRefs = useRef([]);
  const buttonRef = useRef(null);
  const smarterIdeaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate headline lines, SmarterIdea, button, and image sequentially
      gsap.from(
        [
          ...headlineRefs.current,
          smarterIdeaRef.current,
          buttonRef.current,
          imageRef.current,
        ],
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "restart none none none",
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="bg-[url('/images/banner-glow-left.png'),_url('/images/banner-glow-right.png'),_url('/images/bg-dot-line.png'),_url('/images/bg-dot-line.png')] bg-no-repeat bg-[position:top_left,_top_right,top_left,_top_right] bg-contain">
        <div className="flex flex-col justify-center items-center 2xl:max-w-[1760px] mx-auto px-3 md:pt-20 pt-10">
          <div className="flex flex-col justify-center items-center pb-20 gap-4">
            <div className="2xl:mb-6" ref={smarterIdeaRef}>
              <SmarterIdea />
            </div>
            <h1
              ref={(el) => (headlineRefs.current[0] = el)}
              className="2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl bricolage-grotesque"
            >
              Our Software
            </h1>
            <h1
              ref={(el) => (headlineRefs.current[1] = el)}
              className="text-[#A5A5A5] 2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl bricolage-grotesque 2xl:mb-6"
            >
              Development Process
            </h1>
            <p
              ref={(el) => (headlineRefs.current[2] = el)}
              className="2xl:text-2xl text-center text-[#808080] 2xl:mb-6"
            >
              Deliver personalized experiences to your customers with AI-powered
              recommendation <br /> engines and dynamic content generation.
            </p>
            <div ref={buttonRef}>
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center container mx-auto px-3 ">
        <img
          ref={imageRef}
          className=""
          src="/images/earth-group.png"
          alt="Earth Group"
        />
      </div>
    </div>
  );
};
