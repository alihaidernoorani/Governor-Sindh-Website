import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CoursesSection() {
  return (
    <div className="w-full">
  {/* Core Courses */}
  <div className="flex flex-col mx-2 md:mx-32 py-5 justify-center">
    <h1 className="text-[#044e83] text-3xl font-extrabold">Core Courses Sequence</h1>
    <div className="flex flex-wrap md:flex-nowrap flex-1 gap-6 md:gap-9 py-6">
      <CourseCard src="/images/child_studying.jpg" alt="Programming Fundamentals" />
      <CourseCard src="/images/nextjs.jpg" alt="Web2 Using NextJS" />
      <CourseCard src="/images/person_studying.jpg" alt="Earn as You Learn" />
    </div>
  </div>


      {/* Advanced Courses */}
      <div className="flex flex-col mx-2 md:mx-32 py-5 justify-center">
        <h1 className="text-[#044e83] text-3xl font-extrabold">Advanced Courses</h1>
        <div className="flex flex-wrap md:flex-nowrap flex-1 gap-6 md:gap-9 py-6">
          <CourseCard src="/images/AI.png" alt="Artificial Intelligence" />
          <CourseCard src="/images/web3.png" alt="Web3 and Metaverse" />
          <CourseCard src="/images/cloud_computing.png" alt="Cloud Native Computing" />
          <CourseCard src="/images/ambient_computing.png" alt="Ambient Computing and IoT" />
        </div>
        <div className="flex flex-wrap md:flex-nowrap flex-1 gap-6 md:gap-9 py-6 md:w-1/2">   
          <CourseCard src="/images/genomics.png" alt="Genomics and Bioinformatics" />
          <CourseCard src="/images/network_programmability.pg" alt="Network Programmability and Automation" />
      </div>
      </div>
    </div>
  );
}



interface CourseInfo {
    src: string;
    alt: string;
}

export function CourseCard({ src, alt }: CourseInfo) {
  return (
    <div className="border rounded-2xl w-full hover:scale-105 shadow-lg">
      <Link href="/">
        <Image
          className="object-cover object-center w-full h-full"
          src={src}
          alt=""
          layout="responsive"
          width={300}
          height={300}
        />
        <p className="font-bold text-center p-5 text-lg">{alt}</p>
      </Link>
    </div>
  );
}