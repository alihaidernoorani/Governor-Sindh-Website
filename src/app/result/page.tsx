import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Result() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-[#044e83] text-3xl font-bold text-center mb-8">Grand Entrance Exam Result</h1>
        <form className="flex flex-col w-full max-w-md">
          <label htmlFor="registration" className="block mb-2">
            Registration Number*
          </label>
          <input
            type="text"
            id="registration"
            className="border border-gray-300 p-2 w-full"
            placeholder="Enter Registration Number"
          />

          <label htmlFor="cnic" className="block mt-6 mb-2">
            CNIC or B-Form Number*
          </label>
          <input
            type="text"
            id="cnic"
            className="border border-gray-300 p-2 w-full"
            placeholder="Enter CNIC or B-Form Number"
          />

          <button
            type="submit"
            className="bg-[#044e83] hover:bg-blue-700 text-white font-bold py-4 px-6 rounded mt-6 w-40 mx-auto"
          >
            Get Result
          </button>
        </form>   

      </div>
      <Footer />
    </div>
  );
}