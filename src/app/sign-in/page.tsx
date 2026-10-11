'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';

const SignInPage = () => {

    // form er data handler

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as {
            name: string,
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


        // console.log('form er data',user)

        // todo: better auth
        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
            callbackURL: "/"
        })


        if (data) {
            toast.success('Sign In Successfully')
            console.log(data)
        }
        if (error) {
            toast.error(error?.message || "something went wrong")
            console.log(error)
        }
    }


// todo: google sign up handle
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",

        });



    }

    const handleGithubSignIn = async()=>{
        toast.error("Google দিয়ে চালিয়ে যান")

    }




    return (
        <div>
            <div className="min-h-screen bg-[#F0F5F0] px-4 py-8 flex flex-col items-center">

  {/* Heading */}
  <div className="text-center mb-6">
    <h1 className="text-2xl font-bold text-[#26332B]">
      সাইন ইন
    </h1>

    <p className="text-sm text-gray-500 mt-1">
      বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
    </p>
  </div>

  {/* Sign In Card */}
  <div className="w-full max-w-md bg-[#FAFCFA] border border-[#DDE6DE] rounded-2xl p-6 sm:p-8">

    <form onSubmit={onSubmit} className="flex flex-col gap-3">

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
      <label className="text-sm font-medium text-[#26332B] mt-1">
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

      {/* Sign In Button */}
      <button
        type="submit"
        className="btn w-full bg-green-700 hover:bg-green-800 text-white border-0 mt-1 shadow-md"
      >
        সাইন ইন
      </button>

    </form>

    {/* Divider */}
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-[2px] bg-gray-200"></div>
      <span className="text-sm text-gray-500">অথবা</span>
      <div className="flex-1 h-[2px] bg-gray-200"></div>
    </div>

    {/* Social Login Buttons */}
    <div className="grid grid-cols-2 gap-2">

      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="btn btn-outline border-[#DDE6DE] bg-transparent text-[#26332B] hover:bg-gray-100 hover:border-gray-300 px-2"
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google"
          className="w-4 h-4"
        />
        <span className="text-xs sm:text-sm">
          Google দিয়ে চালিয়ে যান
        </span>
      </button>

      <button
        type="button"
        onClick={handleGithubSignIn}
        className="btn btn-outline border-[#DDE6DE] bg-transparent text-[#26332B] hover:bg-gray-100 hover:border-gray-300 px-2"
      >
       

        <span className="text-xs sm:text-sm">
          GitHub দিয়ে চালিয়ে যান
        </span>
      </button>

    </div>

    {/* Sign Up Link */}
    <p className="text-center text-sm mt-4 text-[#26332B]">
      অ্যাকাউন্ট নেই?{" "}
      <Link
        href="/sign-up"
        className="text-green-600 hover:text-green-700"
      >
        সাইন আপ করুন
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

export default SignInPage;