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
      <div>Hero Left</div>
      <div>Hero Right</div>
    </div>
  );
};
