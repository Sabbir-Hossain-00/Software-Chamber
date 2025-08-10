export const ContactButton = () => {
  return (
    <>
      <button className="backdrop-blur bg-gradient-to-l from-white/60 via-white/30 to-white/10 px-3 md:2.5 py-3 rounded-full flex items-center justify-center gap-2 shadow-md border md:text-xl border-gray-500 text-white space-x-6">
        <span>Contact Us</span>
        <img
          src="/images/out.png"
          alt=""
          className=" w-8 bg-white rounded-full p-2"
        />
      </button>
    </>
  );
};
