import React, { useEffect } from "react";
import aboutimg from '../assets/about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'
export const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: false,
        });
    }, []);
    return (
        <div id="about" className="w-full h-auto flex flex-col items-center justify-between lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] gap-[60px]">
            <div id="top-box" className="w-full flex flex-row flex-col items-center justify-between gap-[60px]">
                <div className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-[10px]">
                    <h1 data-aos='zoom-in' data-aos-delay='50' className=" text-green-400 uppercase text-sm font-poppins">Who We Are</h1>
                    <h1 data-aos='zoom-in' data-aos-delay='100' className="text-black text-[45px] capitalize leading-[1.2em] font-poppins">Delivering Excellence in IT Solutions</h1>
                    <p data-aos='zoom-in' data-aos-delay='150' className="text-gray-500 text-md font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio cumque saepe fugit earum in esse corporis inventore beatae dolorem, reprehenderit amet, itaque deserunt omnis tempora incidunt praesentium aperiam pariatur ipsam?</p>
                </div>
                <div className="lg:w-[40%] w-full flex lg:justify-end justify-end items-center">
                    <button data-aos='slide-up' data-aos-delay='200' className="bg-green-400/30 hover:bg-black hover:text-white py-4 px-6 text-black text-md font-semibold mt-5 rounded-md">LEARN MORE</button>
                </div>
            </div>
            <div id="bottom-box" className="w-full flex lg:flex-row flex-col justify-between items-center gap-[80px]">
                <div id="img-box" className="lg:w-[40%] w-full">
                    <img data-aos='zoom-in' data-aos-delay='200' src={aboutimg} alt="About" className="w-full bg-cover bg-center" />
                </div>
                <div id="content-box" className="lg:w-[60%] w-full flex flex-col items-start justify-between gap-[60px]">
                    <div data-aos='slide-up' data-aos-delay='220' className="flex flex-col items-start justify-center gap-3">
                        <h1 className="text-black text-[35px] capitalize leading-[1.2em] font-poppins">Expertise</h1>
                        <p className="text-gray-500 text-md font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsum dolorum, placeat harum labore corporis porro! Ipsam, eum minima explicabo cumque itaque debitis necessitatibus assumenda, cupiditate ex similique repellat ab.</p>
                        <div data-aos='slide-up' data-aos-delay='250' className="flex flex-col items-start justify-center gap-3">
                            <h1 className="text-black text-[35px] capitalize leading-[1.2em] font-poppins">Security</h1>
                            <p className="text-gray-500 text-md font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsum dolorum, placeat harum labore corporis porro! Ipsam, eum minima explicabo cumque itaque debitis necessitatibus assumenda, cupiditate ex similique repellat ab.</p>
                        </div>
                        <div data-aos='slide-up' data-aos-delay='270' className="flex flex-col items-start justify-center gap-3">
                            <h1 className="text-black text-[35px] capitalize leading-[1.2em] font-poppins">Scalability</h1>
                            <p className="text-gray-500 text-md font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsum dolorum, placeat harum labore corporis porro! Ipsam, eum minima explicabo cumque itaque debitis necessitatibus assumenda, cupiditate ex similique repellat ab.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}