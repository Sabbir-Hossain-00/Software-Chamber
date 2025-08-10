import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TbArrowUpRight } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

export const ContactForm = () => {
  const sectionRef = useRef(null);
  const headlineRefs = useRef([]);
  const imageRef = useRef(null);
  const inputRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline animation
      gsap.from(headlineRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      });

      // Image + inputs animation
      gsap.from([imageRef.current, ...inputRefs.current], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto px-3 py-20">
      {/* Heading */}
      <h1 className="text-center md:text-6xl text-2xl font-bold bricolage-grotesque">
        <span ref={(el) => (headlineRefs.current[0] = el)}>
          Let’s talk about your next
        </span>
        <br />
        <span ref={(el) => (headlineRefs.current[1] = el)}>
          project.{" "}
          <span className="text-gray-400 font-medium">We’re here to help.</span>
        </span>
      </h1>
      <p
        className="text-center mt-4 text-gray-500"
        ref={(el) => (headlineRefs.current[2] = el)}
      >
        Deliver personalized experiences to your customers <br /> with
        AI-powered recommendation engines and <br /> dynamic content generation.
      </p>

      {/* Image + Form */}
      <div className="mt-20 grid md:grid-cols-2 grid-cols-1 gap-10 items-start">
        {/* Left Image */}
        <div className="flex h-[580px]" ref={imageRef}>
          <img
            src="/images/man-2.png"
            alt="Smiling person"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>

        {/* Right Form */}
        <div className="flex h-auto">
          <form className="w-full flex flex-col bg-white">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 rounded-lg bg-gray-100 mb-3"
              ref={(el) => (inputRefs.current[0] = el)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 rounded-lg bg-gray-100 mb-3"
              ref={(el) => (inputRefs.current[1] = el)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-100 mb-3"
              ref={(el) => (inputRefs.current[2] = el)}
            />
            <select
              className="col-span-1 p-3 rounded-lg bg-gray-100 mb-3"
              ref={(el) => (inputRefs.current[3] = el)}
            >
              <option>+1</option>
              <option>+44</option>
              <option>+880</option>
            </select>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 rounded-lg bg-gray-100 mb-3"
              ref={(el) => (inputRefs.current[4] = el)}
            />
            <input
              type="text"
              placeholder="Job Title"
              className="w-full p-3 rounded-lg bg-gray-100 mb-3"
              ref={(el) => (inputRefs.current[5] = el)}
            />
            <textarea
              placeholder="Your message"
              className="w-full p-3 rounded-lg bg-gray-100 h-32 mb-5"
              ref={(el) => (inputRefs.current[6] = el)}
            ></textarea>
            <button
              type="submit"
              className="flex gap-7 w-fit items-center  px-4 py-2.5 text-base md:text-xl rounded-full bg-gradient-to-r from-teal-400 to-teal-500 text-white font-medium justify-between "
              ref={(el) => (inputRefs.current[7] = el)}
            >
              Submit <span className="bg-[#E9E9E9] rounded-full text-black p-2 md:p-3">
                          <TbArrowUpRight size={24}/>
                        </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
