import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

export const Solutions = () => {
  const stats = [
    { count: "20", label: "Tech Partners" },
    { count: "1000", label: "Satisfied Customer" },
    { count: "150", label: "Project Completed" },
  ];

  const featuresData = [
    {
      step: "1",
      title: "Your Team in the cloud",
      description:
        "We hire best and brightest talents to build world class technology",
    },
    {
      step: "2",
      title: "Grow more with less",
      description: "We have a competitive pricing structure",
    },
    {
      step: "3",
      title: "Weekly sprint and reviews",
      description:
        "Our fast review and feedback loop is designed to keep you in the driver's seat",
    },
    {
      step: "4",
      title: "Communication First",
      description: "We use modern tools and services to collaborate",
    },
  ];

  // Refs for title lines fade-up animation
  const titleLinesRefs = useRef([]);
  titleLinesRefs.current = [];

  const addTitleLineRef = (el) => {
    if (el && !titleLinesRefs.current.includes(el)) {
      titleLinesRefs.current.push(el);
    }
  };

  // Ref for image zoom animation
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-up animation on title lines with stagger
      gsap.from(titleLinesRefs.current, {
        scrollTrigger: {
          trigger: titleLinesRefs.current[0],
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });

      // Image zoom-in animation on scroll
      gsap.to(imgRef.current, {
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
        scale: 1.02,
        duration: 0.5,
        ease: "power1.out",
      });
    }, [imgRef, titleLinesRefs]);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* services title */}
      <div className="flex flex-col justify-center items-center xl:pt-20 gap-4 mb-20 bricolage-grotesque font-medium">
        <div
          ref={addTitleLineRef}
          className=" flex justify-center items-start md:gap-2 gap-1"
        >
          <img
            src="/images/charming-vector.png"
            className=" xl:w-12 md:w-10 w-6 xl:mt-3 md:mt-1.5 mt-1.5"
            alt="Charming vector"
          />
          <h1 className="2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl text-center">
            At Software Chamber,{" "}
            <span className=" text-[#A5A5A5]">we specialize in</span>{" "}
          </h1>
        </div>
        <h1
          ref={addTitleLineRef}
          className="2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl text-center flex justify-center items-center"
        >
          turning complex challenges into elegant
        </h1>
        <h1
          ref={addTitleLineRef}
          className="text-[#A5A5A5] 2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl text-center flex justify-center items-center gap-2"
        >
          digital solutions
          <span>
            <img
              src="/images/up-vector.png"
              className="md:w-12 w-8 md:mt-3"
              alt="Up vector"
            />
          </span>
        </h1>
      </div>

      {/* services content */}
      <div className="flex justify-between items-start gap-10 2xl:gap-20 flex-col-reverse lg:flex-row md:pt-10">
        <div className=" flex flex-col gap-10 w-[350px]">
          {stats.map((stat, indx) => (
            <div key={indx}>
              <h1 className=" 2xl:text-6xl mb-3 text-5xl font-medium">
                <CountUp
                  delay={0}
                  end={stat.count}
                  duration={5}
                  enableScrollSpy={true}
                  scrollSpyDelay={0}
                  suffix="+"
                />
              </h1>
              <p className="2xl:text-4xl text-xl text-[#808080]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div>
          <img
            ref={imgRef}
            src="/images/peoples.png"
            className=" 2xl:h-124 xl:h-86 lg:h-90 h-full w-full"
            alt="People illustration"
          />
        </div>

        <div className=" space-y-4">
          {featuresData.map((feature, indx) => (
            <div
              key={feature.step}
              className={`flex items-start gap-4 pb-4 ${
                indx === featuresData.length - 1
                  ? ""
                  : "border-b border-b-[#00000033]"
              }`}
            >
              <div className="2xl:p-8 p-4 bg-[#27B4A3] flex justify-center items-center rounded-full">
                <span className=" bg-white 2xl:w-8 2xl:h-8  w-5 h-5 rounded-full text-xs 2xl:text-xl flex justify-center items-center">
                  {feature.step}
                </span>
              </div>
              <div>
                <h1 className="2xl:text-4xl text-xl font-medium 2xl:mb-4">{feature.title}</h1>
                <p className="text-xl text-[#666D80]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
