import React, { useEffect } from "react";
import { reviews } from "../export";
import { FaStar } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css'

export const Reviews = () => {
    useEffect(() => {
        Aos.init({
            duration: 800,
            delay: 200,
            once: false,
        });
    }, []);
    return (
        <div id="testimonials" className="w-full h-auto flex flex-col items-center justify-center lg:px-[80px] px-[20] lg:py-[80px] py-[60px] gap-[20px]">
            <h1 className="text-green-400 text-sm font-poppins">Client Voice</h1>
            <h1 className="text-black lg:text-[45px] text-[30px] capitalize leading-[1.2em] font-poppins lg:w-[50%] w-full text-center">Stories of Success From Our Clients</h1>
            <p className="text-gray-500 text-md font-poppins lg:w-[60%] w-full text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam a laborum totam iusto, natus animi labore impedit, fuga praesentium quasi at repudiandae quae minima, ducimus explicabo magni beatae? Neque, totam?</p>
            <div className="w-full grid lg:grid-cols-4 grid-cols-2 justify-center items-center lg:gap-6 gap-3 mt-6">
                {reviews.map((review, index) => (
                    <div key={index} className="flex flex-col justify-center items-start gap-4 bg-gray-100 hover:bg-green-100 lg:py-12 py-5 lg:px-8 px-4 rounded-md cursor-pointer h-full">
                        <button className="flex justify-center items-center gap-1 bg-white py-2 px-4 rounded-full">{review.rating}<FaStar className="text-yellow-500" /></button>
                        <p className="text-gray-500 text-sm font-poppins text-left">{review.about}</p>
                        <div className="mt-5">
                            <h1 className="text-green-400 text-md font-poppins text-left">{review.name}</h1>
                            <h1 className="text-gray-700 font-semibold tect-sm font-poppins text-left capitalize">{review.role}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
