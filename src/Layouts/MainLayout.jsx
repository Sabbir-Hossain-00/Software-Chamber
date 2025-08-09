import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Navbar/Navbar";
import { Home } from "../Pages/Home/Home";
import { Hero } from "../Sections/Hero/Hero";

export const MainLayout = () => {
  return (
    <>
      <section className=" bg-[#0E0E17] text-white overflow-x-hidden">
        <header className=" relative">
          <nav>
          <Navbar />
        </nav>
        <section>
          <Hero/>
        </section>
        </header>
        <main className=" min-h-screen">
          <Home/>
        </main>
        <footer>
          <Footer />
        </footer>
      </section>
    </>
  );
};
