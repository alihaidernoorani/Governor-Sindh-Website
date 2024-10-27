import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bg-[#f4f4f5] flex flex-1 justify-between gap-32 leading-9 w-screen h-auto px-32 py-20">
            <div>
                <h1 className="font-bold">Core Courses</h1>
                <ul>
                    <li>Programming Fundamentals</li>
                    <li>Web2 Using NextJS</li>
                    <li>Earn as You Learn</li>
                </ul>
            </div>
            <div>
                <h1 className="font-bold">Advanced Courses</h1>
                <ul>
                    <li>Web 3 and Metaverse</li>
                    <li>Cloud-Native Computing</li>
                    <li>Artificial Intelligence (AI) and Deep Learning</li>
                    <li>Ambient Computing and IoT</li>
                    <li>Genomics and Bioinformatics</li>
                    <li>Network Programmability and Automation</li>
                </ul>
            </div>
            <div>
            <h2 className="font-bold">Social Links</h2>
            <div className="flex flex-1 gap-3" >
                <a href="https://facebook.com" target="_blank">< FaFacebook className="text-blue-500"/></a>
                <a href="https://youtube.com" target="_blank"><FaYoutube className="text-red-600"/></a>
                <a href="https://twitter.com" target="_blank"><FaTwitter className="text-blue-500"/></a>
                <a href="https://instagram.com" target="_blank"><FaInstagram/></a>
                <a href="https://tiktok.com" target="_blank"><FaTiktok/></a>
            </div>
           <div>
                <a className="" href="mailto:education@governorsindh.com">
                    education@governorsindh.com
                </a>
            </div> 

            </div>
        </div>
    );
}