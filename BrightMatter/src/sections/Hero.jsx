import { useEffect } from "react";
import heroimg from "../assets/hero.png";
import backgroundimage from "../assets/hero_bg.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="hero"
      className="w-full h-auto flex lg:flex-row flex-col justify-between items-center lg:px-[80px] px-[20px] lg:pt-[150px] pt-[120px] lg:pb-[80px] pb-[60px] lg:gap-[60px] gap-[40px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="lg:w-1/2 w-full flex-col gap-[20px] item-start justify-center">
        <h1 data-aos='zoom-in' data-aos-delay='50' className="text-green-400 uppercase text-sm font-poppins">Seamless IT Services</h1>
        <h1 data-aos='zoom-in' data-aos-delay='100' className="text-white lg:text-[70px] text-[40px] capitalize font-poppins leading-[1.2em] font-poppins">Transforming Ideas into Digital Success</h1>
        <p data-aos='zoom-in' data-aos-delay='150' className="text-gray-300 text-md font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officiis delectus accusantium aspernatur similique. Error laboriosam aliquid ipsum repudiandae officiis dolore dolores tempore magni, minima, ea sequi possimus. Veritatis, molestiae!</p>
        <button data-aos='slide-up' data-aos-delay='200' className="bg-green-400/30 hover:bg-white hover:text-black py-4 px-6 text-black text-md font-semibold mt-5 rounded-md">EXPLORE SOLUTIONS</button>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <div data-aos='zoom-in' data-aos-delay='230' className="lg:w-[80%] w-full flex justify-center items-center px-5 pt-5 bg-green-400/30 z-10 rounded-md">
          <div className="opacity-100">
            <img src={heroimg} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};
