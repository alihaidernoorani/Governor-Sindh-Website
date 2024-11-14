import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-[#f4f4f5]">
        <div className="flex flex-col md:flex-row justify-between gap-6 leading-9 max-w-screen h-auto mx-2 md:mx-32 py-20">
        <div>
          <h1 className="font-bold">Core Courses</h1>
          <ul>
            <li>
              <Link href="#">Programming Fundamentals</Link>
            </li>
            <li>
              <Link href="#">Web2 Using NextJS</Link>
            </li>
            <li>
              <Link href="#">Earn as You Learn</Link>
            </li>
          </ul>
        </div>
            <div>
                <h1 className="font-bold">Advanced Courses</h1>
                <ul>
                    <li>
                        <Link href="#">Web 3 and Metaverse</Link>
                    </li>
                    <li>
                        <Link href="#">Cloud-Native Computing</Link>
                    </li>
                    <li>
                        <Link href="#">Artificial Intelligence (AI) and Deep Learning</Link>
                    </li>
                    <li>
                        <Link href="#">Ambient Computing and IoT</Link>
                    </li>
                    <li>
                        <Link href="#">Genomics and Bioinformatics</Link>
                    </li>
                    <li>
                        <Link href="#">Network Programmability and Automation</Link>
                    </li>
                </ul>
            </div>
            <div>
            <h2 className="font-bold">Social Links</h2>
            <div className="flex flex-1 gap-3" >
                <Link href="https://facebook.com" target="_blank">< FaFacebook className="text-blue-500"/></Link>
                <Link href="https://youtube.com" target="_blank"><FaYoutube className="text-red-600"/></Link>
                <Link href="https://twitter.com" target="_blank"><FaTwitter className="text-blue-500"/></Link>
                <Link href="https://instagram.com" target="_blank"><FaInstagram/></Link>
                <Link href="https://tiktok.com" target="_blank"><FaTiktok/></Link>
            </div>
           <div>
                <Link href="mailto:education@governorsindh.com">
                    education@governorsindh.com
                </Link>
            </div> 

            </div>
        </div>
        </div>
    );
}