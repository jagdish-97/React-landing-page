import React, { useEffect } from "react";
import backgroundImage from '../assets/hero_bg.jpg';
import {projects} from '../export'
import Aos from "aos";
import 'aos/dist/aos.css'
export const Portfolio =()=>{
    useEffect(()=>{
        Aos.init({
            duration:800,
            delay:200,
            once:false,
        });
    });
    return(
        <div id="projects" className="w-full h-auto flex flex-col items-center justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[20px] bg-cover bg-center"style={{
  backgroundImage: `url(${backgroundImage})`,
}}>Portfolio</div>
    )
}
