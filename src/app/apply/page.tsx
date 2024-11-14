import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaFacebook } from "react-icons/fa";

export default function Jobs() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-40 mb-36 h-96">
        <div className="flex flex-col border my-20 p-6 md:py-20 md:px-32 w-full md:w-1/2 items-center shadow-lg">
          <h1 className="text-3xl text-[#044e83] text-center">Before continuing to the application please subscribe on these social media platforms.</h1><br />
          <FaFacebook className="text-blue-600 text-3xl" />
          <button className="bg-[#044E83] text-white px-16 w-[208px] h-[56px] m-6">CONTINUE</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}