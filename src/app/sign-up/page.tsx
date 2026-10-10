'use client'
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

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
    return (
        <div>
            <div className='flex  flex-col justify-center items-center '>
                <h1 className='text-2xl text-green-700 font-semibold p-5'>সাইন আপ</h1>
                <form onSubmit={onSubmit}>
                    <fieldset className="fieldset  border-base-300 rounded-box w-md  p-4 ">
                        <label className="label">নাম</label>
                        <input name="name" type="text" className="input w-md" placeholder="Name" />

                        <label className="label">ইমেইল</label>
                        <input name="email" type="email" className="input w-md" placeholder="Email" />

                        <label className="label">পাসওয়ার্ড</label>
                        <input
                            name="password"
                            type="password"
                            className="input w-md"
                            placeholder="Password"
                            minLength={8}
                            required
                        />

                        <label className="label">কনফার্ম পাসওয়ার্ড</label>
                        <input
                            name="confirmPassword"
                            type="password"
                            className="input w-md"
                            placeholder="Confirm Password"
                            minLength={8}
                            required
                        />

                        <button type='submit' className="btn bg-green-600 text-white mt-4">সাইন আপ করুন</button>
                    </fieldset>
                </form>
                <p><small>Or</small></p>
                <button className="btn bg-green-600 text-white m-2 "><small>Sign Up with google</small></button>
            </div>
        </div>
    );
};

export default SignUpPage;