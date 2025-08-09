export const Footer = () => {
  return (
    <div className=" container mx-auto px-3 md:px-0 pt-10 pb-30">
      <div className=" flex flex-col md:flex-row justify-between gap-4">
        <p className=" text-[#A6A6A6] font-medium">
          2024 Software Chamber All Right Reserved
        </p>
        <div className=" flex flex-col">
          <a className=" text-[#A6A6A6] font-medium" href="#">
            Privacy Policy
          </a>
          <a className=" text-[#A6A6A6] font-medium" href="#">
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
};
