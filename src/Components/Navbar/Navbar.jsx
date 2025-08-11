import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`
        transition-all duration-300
        ${isSticky ? "fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md shadow-lg" : ""}
      `}>
      <div className="flex justify-between items-center py-4 2xl:py-10  mx-auto px-3 2xl:max-w-[1760px]">
      <div>
        <img src="/images/logo.png" className="w-3/4 md:w-full" alt="" />
      </div>
      <div className="flex gap-3">
        <button className="backdrop-blur bg-gradient-to-l from-white/60 via-white/30 to-white/10 px-3 md:px-2.5 py-2 2xl:px-4 2xl:py-3 rounded-full flex items-center justify-center gap-2 shadow-md border border-gray-400 text-white ">
          <span className="hidden md:block 2xl:font-normal 2xl:text-2xl">Contact Us</span>
          <img src="/images/out.png" alt="" className="w-6 2xl:w-8 bg-white rounded-full p-1" />
        </button>
        <button className="backdrop-blur bg-gradient-to-l from-white/60 via-white/30 to-white/10 p-4 2xl:p-5 rounded-full flex items-center justify-center gap-2 shadow-md border border-gray-300 text-white">
          <img src="/images/menu.png" className="w-4 2xl:w-5" alt="" />
        </button>
      </div>
    </div>
    </div>
  );
};
