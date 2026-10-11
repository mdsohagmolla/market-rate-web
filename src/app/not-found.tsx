import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaLeaf } from "react-icons/fa";

const NotFound = () => {
    return (
       <div className="min-h-screen bg-[#F0F5F0] flex items-center justify-center px-4">

      <div className="w-full max-w-xl text-center">

        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
            <FaLeaf className="text-3xl text-green-700" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-8xl sm:text-9xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-4 leading-7">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি নেই
          অথবা সরিয়ে ফেলা হয়েছে।
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-green-800 hover:shadow-lg"
          >
            <FaArrowLeft />
            হোম পেজে ফিরে যান
          </Link>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-400 mt-10">
          ভুল পথে চলে এসেছেন? চলুন আবার শুরু করি 🌿
        </p>

      </div>
    </div>
    );
};

export default NotFound;