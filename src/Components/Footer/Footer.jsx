export const Footer = () => {
  return (
    <div className=" 2xl:max-w-[1760px] mx-auto px-3 xl:px-12 lg:px-10 md:px-6 pb-30 ">
      <div className=" flex flex-col md:flex-row justify-between gap-4 border-dashed border-t pt-10 border-t-gray-500">
        <p className=" 2xl:text-2xl text-[#A6A6A6] font-medium">
          2024 Software Chamber All Right Reserved
        </p>
        <div className=" flex flex-col">
          <a className=" 2xl:text-2xl text-[#A6A6A6] font-medium" href="#">
            Privacy Policy
          </a>
          <a className=" 2xl:text-2xl text-[#A6A6A6] font-medium" href="#">
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
};
