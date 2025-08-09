import { AwardAndPartern } from "../../Sections/AwardAndPartner/AwardAndPartner";
import { ContactForm } from "../../Sections/ContactForm/ContactForm";
import { ContactInfo } from "../../Sections/ContactInfo/ContactInfo";
import { Faq } from "../../Sections/FAQ/Faq";
import { Review } from "../../Sections/Review/Review";
import { ServicesAndSolutions } from "../../Sections/Services&Solutions/ServicesAndSolutions";
import { SoftwareDevelopment } from "../../Sections/SoftwareDevelopment/SoftwareDevelopment";
import { WhyChoseSoftwareChamber } from "../../Sections/WhyChoseSoftwareChamber/WhyChoseSoftwareChamber";

export const Home = () => {
  return (
    <>
      <section className="bg-[#FFFFFF] text-[#0C0C0C]">
        <ServicesAndSolutions />
      </section>
      <section >
        <SoftwareDevelopment />
      </section>
      <section className="bg-[#FFFFFF] text-[#0C0C0C]">
        <WhyChoseSoftwareChamber />
      </section>
      <section>
        <AwardAndPartern />
      </section>
      <section className="bg-[#FFFFFF] text-[#0C0C0C]">
        <Faq />
      </section>
      <section className="relative bg-[url('/images/award-glow-sec-right.png')] bg-no-repeat bg-[position:bottom_right] bg-contain">
        <Review />
      </section>
      <section className="bg-[#FFFFFF] text-[#0C0C0C]">
         <ContactForm/>
      </section>
      <section className=" relative">
        <ContactInfo/>
      </section>
    </>
  );
};

// className="bg-[url('/images/banner-glow-left.png'),_url('/images/banner-glow-right.png'),_url('/images/bg-dot-line.png'),_url('/images/bg-dot-line.png')] bg-no-repeat bg-[position:top_left,_top_right,top_left,_top_right] bg-contain"

// bg-[url('/images/review-glow-top.png'),url('/images/review-glow-bottom.png')] bg-no-repeat bg-[position:top_left,bottom_right] bg-contain
