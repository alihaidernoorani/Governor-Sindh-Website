import React from "react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="relative w-full overflow-hidden">
        {/* Background Image with Grey Overlay */}
        <div className="absolute inset-0 z-0 w-full h-full bg-[url('/images/bg_house.jpg')] bg-cover bg-opacity-75">
          <div className="absolute inset-0 w-full h-full bg-zinc-100 bg-opacity-80"></div>
        </div>
      
        {/* Content */}
        <div className="relative z-10 m-auto flex flex-col items-center lg:items-start lg:flex-row mx-32 pt-8 lg:pt-48">
          <div className="h-fit w-full text-center lg:text-left md:w-1/2">
            <h1 className="whitespace-nowrap text-[#044e83] text-[2rem] font-extrabold leading-10 tracking-wider text-main sm:text-5xl lg:text-6xl">
              Governor Sindh
            </h1>
            <h1 className="text-[1.5rem] font-normal leading-[2rem] tracking-wider text-main sm:text-4xl lg:text-[2.5rem]">
              Kamran Khan Tessori
            </h1>
            <h1 className="text-[#2eb6e8] mt-5 text-[1.5rem] font-semibold leading-[2rem] tracking-wider sm:text-4xl lg:text-[2.5rem]">
              Certified Cloud <br />
              Applied Generative AI <br />
              Engineer (GenEng)
            </h1>
            <p className="text-[#044e83] text-lg md:text-2xl font-extrabold mt-6">
              Earn up to $5,000/month
            </p>
            <p className="text-[#044e83] text-lg md:text-2xl font-extrabold mt-4">
              Now admissions are open in <br />Hyderabad
            </p>
            <div className="flex flex-col md:flex-row mt-6 md:mt-10 items-center md:items-start">
              <button className="bg-[#044e83] text-white px-6 md:px-9 py-2 rounded mb-4 md:mb-0 md:mr-4">
                Apply Now
              </button>
              <div className="text-center md:text-left">
                <p className="text-blue-800 font-bold text-2xl md:text-3xl">562,143</p>
                <p className="text-blue-800">Accepted Applications</p>
              </div>
            </div>
          </div>
          
          {/* Governor Photo */}
          <div className="relative  mt-7 flex  w-full items-end justify-center md:m-auto md:justify-end">
            <Image
              src="/images/governor.png"
              alt="Photo of Governor Sindh, Kamran Khan Tessori"
              width={1000}
              height={1000}
              className="object-cover  md:ml-40 h-auto min-w-[900px] lg:w-[600px]"
            />
          </div>
        </div>
      </div>
    )
}