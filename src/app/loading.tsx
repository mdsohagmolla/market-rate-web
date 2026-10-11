import { FaLeaf } from "react-icons/fa";


const loadingPage = () => {
    return (
       <div className="min-h-screen bg-[#F0F5F0] flex items-center justify-center px-4">

      <div className="text-center">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
            <FaLeaf className="text-3xl text-green-700" />
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="flex justify-center mb-5">
          <div className="w-12 h-12 rounded-full border-4 border-green-200 border-t-green-700 animate-spin" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-green-800">
          লোড হচ্ছে...
        </h1>

        {/* Description */}
        <p className="text-gray-500 mt-3 text-sm">
          অনুগ্রহ করে অপেক্ষা করুন, তথ্য সংগ্রহ করা হচ্ছে।
        </p>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-5">
          <span className="w-2 h-2 rounded-full bg-green-600 animate-bounce [animation-delay:0ms]" />
          <span className="w-2 h-2 rounded-full bg-green-600 animate-bounce [animation-delay:150ms]" />
          <span className="w-2 h-2 rounded-full bg-green-600 animate-bounce [animation-delay:300ms]" />
        </div>

      </div>

    </div>
    );
};

export default loadingPage;