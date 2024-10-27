"use client";

import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when resizing to desktop view
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
    <div className="fixed w-screen z-30 bg-[#044e83] text-white flex justify-between h-24 top-0 px-32 gap-4">
    {/* Logo Section */}
    <div className="py-10">
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
          <li><Link href="/courses">Courses</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden p-2">
        <button onClick={clickHandler}>
          <FaBars color="white" />
        </button>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      <nav className={`absolute flex items-center top-20 left-0 right-0 bg-[#044e83] p-4 ${isOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="flex flex-col gap-4 items-center font-semibold text-lg">
          <li onClick={() => setIsOpen(false)}>Home</li>
          <li onClick={() => setIsOpen(false)}>Apply</li>
          <li onClick={() => setIsOpen(false)}>Jobs</li>
          <li onClick={() => setIsOpen(false)}>Result</li>
          <li onClick={() => setIsOpen(false)}>Courses</li>
        </ul>
      </nav>
    </div>
  );
}
