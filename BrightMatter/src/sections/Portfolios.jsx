import React, { useEffect } from "react";
import backgroundImage from '../assets/hero_bg.jpg';
import { projects } from '../export'
import Aos from "aos";
import 'aos/dist/aos.css'
export const Portfolio = () => {
    useEffect(() => {
        Aos.init({
            duration: 800,
            delay: 200,
            once: false,
        });
    });
    return (
        <div id="projects" className="w-full h-auto flex flex-col items-center justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[20px] bg-cover bg-center" style={{
            backgroundImage: `url(${backgroundImage})`,
        }}><h1 data-aos="zoom-in" data-aos-delay='50' className="text-green-400 uppercase text-sm font-poppins">OUR Portfolio</h1>
            <h1 data-aos='zoom-in' data-aos-delay='100' className="text-white lg:text-[45px] text-[30px] capitalize font-poppins leading-[1.2em]vlg:w-[50%] w-full text-center">Explore Our Portfolios and Showcase our best work</h1>
            <p data-aos="zoom-in" data-aos-delay='150' className="text-gray-300 text-md font-poppins lg:w-[60%] w-full text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti debitis harum officia, ipsam alias. Fugiat nobis animi saepe eos dolorum, distinctio nesciunt laboriosam, modi ipsum autem voluptate iure ea.</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10 mt-8">
                {projects.map((projects, index)=>(
                    <div key={index} className="flex flex-col justify-center items-center">
                        <img src={projects.img} alt="" className="w-full bg-cover bg-center"/>
                        <div className="bg-gray-600 p-8 flex flex-col justify-center items-center gap-4">
                            <h1 className="text-white lg:text-[25px] text-[22px] capitalize leading-[1.2em] font-poppins text-left">{projects.title}</h1>
                            <p className="text-gray-300 text-sm font-poppins text-left">{projects.para}</p>
                            <button className=" text-green-400 hover:text-white text-sm font-semibold mt-5 cursor-pointer text-left">View More</button>
                        </div>
                    </div>
                ))}
            </div>
            </div>
    )
}
