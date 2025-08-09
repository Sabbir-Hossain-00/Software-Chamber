export const ContactForm = () => {
  const formHeight = "500px"; // easy to change in one place

  return (
    <div className="container mx-auto px-3 py-20">
      {/* Heading */}
      <h1 className="text-center md:text-6xl text-2xl font-bold leading-tight">
        Let’s talk about your next <br /> project.{" "}
        <span className="text-gray-400 font-medium">We’re here to help.</span>
      </h1>
      <p className="text-center mt-4 text-gray-500">
        Deliver personalized experiences to your customers <br /> with
        AI-powered recommendation engines and <br /> dynamic content generation.
      </p>

      {/* Image + Form */}
      <div className="mt-20 grid md:grid-cols-2 grid-cols-1 gap-10 items-start">
        {/* Left Image */}
        <div className="flex" style={{ height: formHeight }}>
          <img
            src="/images/man-2.png"
            alt="Smiling person"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>

        {/* Right Form */}
        <div className="flex" style={{ height: formHeight }}>
          <form className="w-full flex flex-col bg-white">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 rounded-lg bg-gray-100 mb-3 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 rounded-lg bg-gray-100 mb-3 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition duration-160"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-100 mb-3 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition duration-160"
            />
            <div className="grid grid-cols-4 gap-3 mb-3">
              <select className="col-span-1 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition duration-160">
                <option>+1</option>
                <option>+44</option>
                <option>+880</option>
              </select>
              <input
                type="tel"
                placeholder="Phone"
                className="col-span-3 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition duration-160"
              />
            </div>
            <input
              type="text"
              placeholder="Job Title"
              className="w-full p-3 rounded-lg bg-gray-100 mb-3 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition duration-160"
            />
            <textarea
              placeholder="Your message"
              className="w-full p-3 rounded-lg bg-gray-100 h-32 mb-5 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition duration-160"
            ></textarea>

            <button
              type="submit"
              className="flex w-fit items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-teal-500 text-white font-medium"
            >
              Submit
              <span className="ml-2">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
