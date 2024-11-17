"use client";

import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Div to color bar full width
    <div className="fixed top-0 w-screen z-30 bg-[#044e83]">
      <div className="text-white flex h-16 items-center justify-around md:h-20 mx-2 md:mx-20">
        {/* Logo Section */}
        <div className="mt-14 w-[70px] sm:mt-20 sm:w-[80px]">
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        </div>
        
        {/* Heading Section */}
        <div className="flex items-center text-center md:text-left">
          <h1 className="text-[#b8d8f3] text-xl md:text-2xl font-bold">
            <span className="block lg:hidden">Tuition Free Program</span>
            <span className="hidden lg:block">Tuition Free Education Program on Latest Technologies</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <ul className="flex space-x-4 md:space-x-10">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/apply">Apply</Link></li>
            <li><Link href="/jobs">Jobs</Link></li>
            <li><Link href="/result">Result</Link></li>
            <li><Link href="/">Courses</Link></li>
          </ul>
        </nav>
        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden sm:block items-center">
          <button onClick={clickHandler}>
            <FaBars color="white" />
          </button>
        </div>
        

        {/* Mobile Navigation (Full-screen Dropdown) */}
        <nav className={`fixed top-0 left-0 right-0 bottom-0 bg-[#044e83] p-6 ${isOpen ? "flex" : "hidden"} flex-col  md:hidden`}>
         {/* Mobile Menu Toggle Button */}
         <div className="flex justify-end">
            <button onClick={clickHandler}>
              <FaTimes color="white" />
            </button>
          </div>
          <ul className="flex flex-col gap-8 text-white border-white">
            <li onClick={() => setIsOpen(false)}><Link href="/">Home</Link></li>
            <li onClick={() => setIsOpen(false)}><Link href="/apply">Apply</Link></li>
            <li onClick={() => setIsOpen(false)}><Link href="/jobs">Jobs</Link></li>
            <li onClick={() => setIsOpen(false)}><Link href="/result">Result</Link></li>
            <li onClick={() => setIsOpen(false)}><Link href="/courses">Courses</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
