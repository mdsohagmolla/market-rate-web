'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const Userinfo = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user

    

    return (
        <div>
            {
                user ? <div className='flex items-center justify-center gap-9'>
                    <div className="flex flex-col justify-end items-center gap-2">
                        {/* user log profile */}

                        <Link href={'/profile'}>
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                                    <img src={user?.image || "/avatar img.jpg"}
                                        alt='image'


                                    ></img>

                                </div>




                            </div>
                        </Link>
                        <h2 className='text-green-700 font-semibold'>{user?.name}</h2>



                    </div>
                    
                </div> : <div className='flex gap-2'>
                    <Link href={'/sign-in'}> <button className='bg-base-200 rounded-md px-3 py-2 text-md'>সাইন ইন</button></Link>
                    <Link href={'/sign-up'}><button className='rounded-md bg-green-700 px-4 py-2 text-md font-semibold text-white hover:bg-red-700'>সাইন আপ</button></Link>
                </div>
            }
        </div>
    );
};

export default Userinfo;