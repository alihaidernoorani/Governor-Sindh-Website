import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaFacebook } from "react-icons/fa";

export default function Jobs() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center pt-40 mb-20 h-96">
        <div className="flex flex-col border my-20 p-32 w-1/2 items-center">
          <h1 className="text-4xl text-[#044e83] text-center">Before continuing to the application please subscribe on these social media platforms.</h1><br />
          <FaFacebook className="text-blue-600 text-3xl" />
        </div>
      </div>
      <Footer />
    </div>
  );
}