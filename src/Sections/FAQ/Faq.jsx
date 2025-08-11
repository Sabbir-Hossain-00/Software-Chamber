import { FaChevronUp, FaChevronDown, FaArrowRight } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowRight } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

export const Faq = () => {
  const faqs = [
    {
      question: "What software development services does your company offer?",
      answer:
        "We offer a wide range of software development services including web and mobile application development, UI/UX design, custom software solutions, API development, cloud integration, and ongoing maintenance and support.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in various industries including e-commerce, logistics, healthcare, education, fintech, and social platforms. Our flexible team can adapt to the needs of both startups and established businesses.",
    },
    {
      question: "What sets your company apart from the competition?",
      answer:
        "Our company stands out due to our client-first approach, transparent communication, on-time delivery, and a dedicated team of skilled developers and designers. We prioritize scalable, secure, and future-proof solutions tailored to each client’s goals.",
    },
    {
      question: "Is my project idea and information kept confidential?",
      answer:
        "Absolutely. We take confidentiality very seriously. We’re happy to sign a Non-Disclosure Agreement (NDA) to ensure your idea and project details remain secure and protected throughout our collaboration.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);
  const headlineRefs = useRef([]);
  const containerRef = useRef(null);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const getHeightByBreakpoint = () => {
    if (window.innerWidth >= 1600) return "80px";
    if (window.innerWidth >= 1024) return "105px";
    if (window.innerWidth >= 768) return "110px";
    return "250px";
  };

  useEffect(() => {
    // Accordion open/close animation
    answerRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === openIndex) {
        gsap.to(el, {
          height: getHeightByBreakpoint,
          opacity: 1,
          paddingTop: 16,
          paddingBottom: 16,
          duration: 0.28,
          ease: "power1.out",
          clearProps: "height",
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          paddingTop: 0,
          paddingBottom: 0,
          duration: 0.28,
          ease: "power1.out",
        });
      }
    });
  }, [openIndex]);

  useEffect(() => {
    if (!headlineRefs.current.length) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(
          headlineRefs.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.12,
          }
        );
      },
      onEnterBack: () => {
        gsap.fromTo(
          headlineRefs.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.12,
          }
        );
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="2xl:max-w-[1760px] mx-auto px-3 2xl:py-30 py-20 relative z-10"
    >
      {/* Title */}
      <div className="space-y-6 relative z-10 bricolage-grotesque">
        <h1
          ref={(el) => (headlineRefs.current[0] = el)}
          className="2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl text-center font-medium"
        >
          Comprehensive Answers to the Most
        </h1>
        <div
          ref={(el) => (headlineRefs.current[1] = el)}
          className="flex justify-center items-start md:gap-3"
        >
          <img className="2xl:w-16 2xl:mt-2 md:w-13 w-8" src="/images/charming-vector.png" alt="" />
          <h1 className="2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl text-center font-medium">
            Common Questions <span className="text-[#A5A5A5]">About Our</span>
          </h1>
        </div>
        <div
          ref={(el) => (headlineRefs.current[2] = el)}
          className="flex justify-center items-center gap-3"
        >
          <h1 className="2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl text-center font-medium">
            <span className="text-[#A5A5A5]">Service</span>s and How We{" "}
            <span className="text-[#A5A5A5]">Work</span>
          </h1>
          <img className="2xl:w-16 md:w-13 w-8" src="/images/up-vector.png" alt="" />
        </div>
      </div>

      {/* Faq heading */}
      <div className="flex justify-between items-center my-20 py-10 2xl:pb-20 border-b border-gray-400  border-dashed">
        <h1 className="2xl:text-9xl xl:text-8xl lg:text-6xl md:text-5xl text-3xl font-bold bricolage-grotesque">FAQ</h1>
        <div className="2xl:text-3xl text-xl font-medium flex justify-center items-center gap-4">
          <p>ALL FAQ</p>
          <FaArrowRight className=" bg-[#2CD6C6] w-10 h-10 2xl:w-13 2xl:h-13 p-3 2xl:p-4 rounded-full"/>
        </div>
      </div>

      {/* Accordion */}
      <div className="space-y-2 mt-10 relative z-10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`cursor-pointer relative z-10 border-b border-gray-200 ${
                isOpen ? "pb-4" : "pb-0"
              }`}
              onClick={() => toggleIndex(index)}
            >
              <div className="2xl:text-4xl flex justify-between w-full text-left md:text-3xl text-lg font-semibold text-black py-6">
                {faq.question}
                <span
                  className={`h-fit 2xl:p-6 md:p-4 p-3 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? "bg-[#2CD6C6]" : "bg-black"
                  }`}
                >
                  {isOpen ? (
                    <FaChevronUp className="w-4 h-4 text-white 2xl:w-6 2xl:h-6" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 text-white 2xl:w-6 2xl:h-6" />
                  )}
                </span>
              </div>

              <div
                ref={(el) => (answerRefs.current[index] = el)}
                className="2xl:text-2xl font-medium text-gray-700 w-[80%] overflow-hidden"
                style={{
                  height: 0,
                  opacity: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
