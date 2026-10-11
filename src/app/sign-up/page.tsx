'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const SignUpPage = () => {

    // form er data handler

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as { name: string,
             email: string,
              password: string,
             confirmPassword: string;
               image: string,
             }

        // Password validation
        if (user.password.length < 8) {
            toast.error("Password কমপক্ষে ৮ character হতে হবে");
            return;
        }

        // At least one uppercase letter
         if (!/[A-Z]/.test(user.password)) {
        toast.error("Password-এ কমপক্ষে একটি Uppercase letter (A-Z) থাকতে হবে");
    return;
}

        // Confirm password validation
        if (user.password !== user.confirmPassword) {
            toast.error("Password এবং Confirm Password একই হতে হবে");
            return;
        }
        // console.log('form er data',user)

        // todo: better auth

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            image: user.image,
            callbackURL: "/"
        })
        if (data) {
            toast.success('Sign Up Successfully')
            console.log(data)
            redirect("/")

        }
        if (error) {
            toast.error(error.message ?? 'Something Went Wrong')
            console.log(error)
        }

    }

     // todo: google sign up handle
    const handleGoogleSignUp = async()=>{
         const data = await authClient.signIn.social({
    provider: "google",

  });
  
        

    }
    return (
        <div>
            <div className="min-h-screen bg-[#F0F5F0] px-4 py-8 flex flex-col items-center">

  {/* Heading */}
  <div className="text-center mb-6">
    <h1 className="text-2xl font-bold text-[#26332B]">
      অ্যাকাউন্ট তৈরি করুন
    </h1>

    <p className="text-sm text-gray-500 mt-2">
      বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
    </p>
  </div>

  {/* Sign Up Card */}
  <div className="w-full max-w-md bg-[#FAFCFA] border border-[#DDE6DE] rounded-2xl p-6 sm:p-8">

    <form onSubmit={onSubmit}>
      <fieldset className="flex flex-col gap-3">

        {/* Name */}
        <label className="text-sm font-medium text-[#26332B]">
          নাম
        </label>

        <input
          name="name"
          type="text"
          className="input w-full bg-transparent border-[#DDE6DE] focus:outline-green-600"
          placeholder="যেমন: রহিম উদ্দিন"
          required
        />

        {/* Email */}
        <label className="text-sm font-medium text-[#26332B]">
          ইমেইল
        </label>

        <input
          name="email"
          type="email"
          className="input w-full bg-transparent border-[#DDE6DE] focus:outline-green-600"
          placeholder="you@example.com"
          required
        />

        {/* Password */}
        <label className="text-sm font-medium text-[#26332B]">
          পাসওয়ার্ড
        </label>

        <input
          name="password"
          type="password"
          className="input w-full bg-transparent border-[#DDE6DE] focus:outline-green-600"
          placeholder="কমপক্ষে ৮ অক্ষর"
          minLength={8}
          required
        />

        {/* Confirm Password */}
        <label className="text-sm font-medium text-[#26332B]">
          পাসওয়ার্ড নিশ্চিত করুন
        </label>

        <input
          name="confirmPassword"
          type="password"
          className="input w-full bg-transparent border-[#DDE6DE] focus:outline-green-600"
          placeholder="আবার লিখুন"
          minLength={8}
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="btn w-full bg-green-700 hover:bg-green-800 text-white border-0 mt-1 shadow-md"
        >
          অ্যাকাউন্ট তৈরি করুন
        </button>

      </fieldset>
    </form>

    {/* Divider */}
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-[2px] bg-gray-200" />

      <span className="text-sm text-gray-500">
        অথবা
      </span>

      <div className="flex-1 h-[2px] bg-gray-200" />
    </div>

    {/* Google Sign Up */}
    <button
      type="button"
      onClick={handleGoogleSignUp}
      className="btn w-full border border-[#DDE6DE] bg-transparent text-[#26332B] hover:bg-gray-100"
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google"
        className="w-4 h-4"
      />

      Google দিয়ে চালিয়ে যান
    </button>

    {/* Sign In Link */}
    <p className="text-center text-sm mt-4 text-[#26332B]">
      ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
      <Link
        href="/sign-in"
        className="text-green-600 hover:text-green-700"
      >
        সাইন ইন করুন
      </Link>
    </p>

  </div>

  {/* Back to Home */}
  <Link
    href="/"
    className="mt-6 text-sm text-gray-500 hover:text-green-700"
  >
    ← হোম পেজে ফিরে যান
  </Link>

</div>
        </div>
    );
};

export default SignUpPage;