import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CoursesSection() {
  return (
    <div>      
      {/* Core Courses */}
      <div className="flex flex-col mx-2 lg:mx-32 py-5 justify-center">
        <h1 className="text-[#044e83] text-3xl font-extrabold">Core Courses Sequence</h1>
        <div className="flex flex-wrap md:flex-nowrap flex-1 gap-6 md:gap-9 py-6">   
            <CourseCard src="/images/child_studying.jpg" alt="Programming Fundamentals" />
            <CourseCard src="/images/nextjs.jpg" alt="Web2 Using NextJS" />
            <CourseCard src="/images/person_studying.jpg" alt="Earn as You Learn" />
        </div>
      </div>

      {/* Advanced Courses */}
      <div className="flex flex-col mx-32 py-5">
        <h1 className="text-[#044e83] text-3xl font-extrabold">Advanced Courses</h1>
        <div className="flex flex-wrap md:flex-nowrap flex-1 gap-6 md:gap-9 py-6">
          <CourseCard src="/images/AI.jpg" alt="Artificial Intelligence" />
          <CourseCard src="/images/web3.jpg" alt="Web3 and Metaverse" />
          <CourseCard src="/images/cloud_computing.jpg" alt="Cloud Native Computing" />
          <CourseCard src="/images/ambient_computing.jpg" alt="Ambient Computing and IoT" />
        </div>
        <div className="flex flex-wrap md:flex-nowrap flex-1 gap-6 md:gap-9 py-6">   
          <CourseCard src="/images/genomics.jpg" alt="Genomics and Bioinformatics" />
          <CourseCard src="/images/network_programmability.jpg" alt="Network Programmability and Automation" />
      </div>
      </div>
    </div>
  );
}



interface CourseInfo {
    src: string;
    alt: string;
}

export function CourseCard({src, alt}: CourseInfo) {
    return (
    <div className="border rounded-2xl max-w-[300px]">
            <Link href="/">
            <Image className="" src= {src} width={300} height={300} alt=""  />
            <p className="font-bold text-center p-5 text-lg">{alt}</p>
            </Link>
    </div>
    );
}