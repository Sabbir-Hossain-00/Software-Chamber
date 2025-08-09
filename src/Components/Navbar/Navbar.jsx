export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-4 container mx-auto px-3">
        <div>
          <img src="/images/logo.png" className="w-3/4 md:w-full" alt="" />
        </div>
        <div className=" flex gap-3">
          <button className="backdrop-blur bg-gradient-to-l from-white/60 via-white/30 to-white/10 px-3 md:2.5 py-2 rounded-full flex items-center justify-center gap-2 shadow-md border border-white text-white ">
            <span className=" hidden md:block">Contact Us</span>
            <img src="/images/out.png" alt="" className=" w-6 bg-white rounded-full p-1" />
          </button>
          <button className=" backdrop-blur bg-gradient-to-l from-white/60 via-white/30 to-white/10 p-4 rounded-full flex items-center justify-center gap-2 shadow-md border border-white text-white">
            <img src="/images/menu.png" className=" w-4" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
