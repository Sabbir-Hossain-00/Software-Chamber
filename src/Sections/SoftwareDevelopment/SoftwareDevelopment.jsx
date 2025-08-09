import { ContactButton } from "../../Components/ContactButton/ContactButton";
import { SmarterIdea } from "../../Components/SmarterIdea/SmarterIdea";

export const SoftwareDevelopment = () => {
  return (
    <div>
      <div className="bg-[url('/images/banner-glow-left.png'),_url('/images/banner-glow-right.png'),_url('/images/bg-dot-line.png'),_url('/images/bg-dot-line.png')] bg-no-repeat bg-[position:top_left,_top_right,top_left,_top_right] bg-contain">
        <div className=" flex flex-col justify-center items-center container mx-auto px-3 md:pt-20 pt-10">
          <div className="flex flex-col justify-center items-center pb-20 gap-4">
            <div>
              <SmarterIdea />
            </div>
            <h1 className="md:text-6xl text-3xl">Our Software </h1>
            <h1 className=" text-[#A5A5A5] md:text-6xl text-3xl">
              Development Process
            </h1>
            <p className="text-center text-[#808080]">
              Deliver personalized experiences to your customers with AI-powered
              recommendation <br /> engines and dynamic content generation.
            </p>
            <div>
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center container mx-auto px-3 ">
        <img className="" src="/images/earth-group.png" alt="" />
      </div>
    </div>
  );
};
