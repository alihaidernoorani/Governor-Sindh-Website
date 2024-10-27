import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative max-h-screen bg-cover bg-clip-border pt-24 w-screen bg-[url('/images/bg_house.jpg')]">
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/50"></div>

      {/* Banner Content */}
      <div className="relative flex flex-col pt-4 w-[85%] mx-auto z-20">
        <div className="flex flex-col py-8 md:py-16">
          <h1 className="text-blue-800 text-4xl md:text-7xl font-extrabold">Governor Sindh</h1>
          <h1 className="text-blue-800 text-3xl md:text-5xl mt-4">Kamran Khan Tessori</h1>
          <h1 className="font-extrabold text-3xl md:text-5xl text-[#2EB6E8] mt-6">
            Certified Cloud <br />
            Applied Generative AI <br />
            Engineer (GenEng)
          </h1>
          <p className="text-[#044e83] text-lg md:text-2xl font-extrabold mt-6">Earn up to $5,000/month</p>
          <p className="text-[#044e83] text-lg md:text-2xl font-extrabold mt-4">Now admissions are open in <br />Hyderabad</p>
          <div className="flex flex-col md:flex-row mt-6 md:mt-10 items-start md:items-center">
            <button className="bg-[#044e83] text-white px-6 md:px-9 py-2 rounded">Apply Now</button>
            <div className="text-center mt-4 md:mt-0 md:ml-4">
              <p className="text-blue-800 font-bold text-2xl md:text-3xl">562,143</p>
              <p className="text-blue-800">Accepted Applications</p>
            </div>
          </div>
        </div>
        <div className=" absolute  md:pt-12  md:right-10">
          <Image
            src="/images/governor.png"
            alt=""
            width={400} // increased for small screens
            height={400} // increased for small screens
            className="w-[90%] md:w-auto h-auto mx-auto" // center on small screens
          />
        </div>
      </div>
      </div>
      <section className="flex flex-col w-[85%] mt-20 mx-auto">
        
        {/* Generative AI Intro */}
        <h1 className="text-[#044e83] text-3xl font-extrabold text-center pb-14">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>
        <p className="text-justify text-lg leading-7 tracking-widest">
          The pace of technological change is accelerating. Big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
        </p>
        <div className="flex flex-wrap md:flex-nowrap flex-1 gap-6 md:gap-9 py-6 mx-auto">
          <Image
            className="drop-shadow rounded-xl"
            src="/images/money.jpg"
            width={400}
            height={400}
            alt="Representation of financial growth"
          />
          <Image
            className="drop-shadow-sm rounded-xl"
            src="/images/solopreneur.jpg"
            width={400}
            height={400}
            alt="Solopreneurship concept"
          />
          <Image
            className="drop-shadow-sm rounded-xl"
            src="/images/IT class.jpg"
            width={400}
            height={400}
            alt="IT class in session"
          />
        </div>
      </section>
      <hr />
      <div className="flex flex-row w-[85%]  py-10 sm:mx-auto gap-6 md:gap-9">
        <Image className="" src="/images/governor-in chair.jpg" width={700} height={700} alt=""  />
        <Image className="" src="/images/auditorium.jpg" width={700} height={700} alt=""  />
      </div>
      
      {/* Core Courses */}
      <div className="flex flex-col w-[85%] py-5 mx-auto">
        <h1 className="text-[#044e83] text-3xl font-extrabold">Core Courses Sequence</h1>
        <div className="flex flex-wrap md:flex-nowrap flex-1 gap-6 md:gap-9 py-6"> 
          <div className="border rounded-2xl">
            <Link href="/">
            <Image className="" src="/images/child_studying.jpg" width={300} height={300} alt=""  />
            <p className="font-bold text-center p-5 text-lg">Programming Fundamentals</p>
            </Link>
          </div>
          <div className="border rounded-2xl">
            <Link href="/">
            <Image className="Web2 Using NextJS" src="/images/nextjs.jpg" width={300} height={300} alt=""  />
            <p className="font-bold text-center p-5 text-lg">Web2 Using NextJS</p>
            </Link>
          </div>
          <div className="border rounded-2xl">
            <Link href="/">
            <Image className="" src="/images/person_studying.jpg" width={300} height={300} alt=""  />
            <p className="font-bold text-center p-5 text-lg">Earn as You Learn</p>
            </Link>
          </div>
          </div>
      </div>

      {/* Advanced courses */}
      <div className="flex flex-col w-[85%] py-5 mx-auto">
        <h1 className="text-[#044e83] text-3xl font-extrabold">Advanced Courses</h1>
        <div className="flex flex-wrap md:flex-nowrap flex-1 gap-6 md:gap-9 py-6"> 
          <div className="border rounded-3xl hover:scale-110 transition-transform duration-300">
            <Link href="/">
              <Image className="" src="/images/AI.jpg" width={300} height={300} alt=""  />
              <p className="font-bold text-center p-5 text-lg">Artificial Intelligence</p>
            </Link>
          </div>
          <div className="border rounded-3xl hover:scale-110 transition-transform duration-300">
            <Link href="/">
              <Image className="Web2 Using NextJS" src="/images/web3.jpg" width={300} height={300} alt=""  />
              <p className="font-bold text-center p-5 text-lg">Web3 and Metaverse</p>
            </Link>
          </div>
          <div className="border rounded-3xl hover:scale-110 transition-transform duration-300">
            <Link href="/">
              <Image className="" src="/images/cloud_computing.jpg" width={300} height={300} alt=""  />
              <p className="font-bold text-center p-5 text-lg">Cloud Native Computing</p>
            </Link>
          </div>
          <div className="border rounded-3xl hover:scale-110 transition-transform duration-300">
            <Link href="/">
              <Image className="" src="/images/ambient_computing.jpg" width={300} height={300} alt=""  />
              <p className="font-bold text-center p-5 text-lg">Ambient Computingand IoT</p>
            </Link>
          </div>
          
        </div>
        <div className="flex flex-wrap md:flex-nowrap flex-1 gap-6 md:gap-9 py-6">
          <div className="border rounded-3xl hover:scale-110 transition-transform duration-300">
              <Link href="/">
                <Image className="" src="/images/genomics.jpg" width={300} height={300} alt=""  />
                <p className="font-bold text-center p-5 text-lg">Genomics and Bioinformatics</p>
              </Link>
            </div>
            <div className="border rounded-3xl hover:scale-110 transition-transform duration-300">
              <Link href="/">
                <Image className="" src="/images/network_programmability.jpg" width={300} height={300} alt=""  />
                <p className="font-bold text-center p-5 text-lg">Network Programmability <br />and Automation</p>
              </Link>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
