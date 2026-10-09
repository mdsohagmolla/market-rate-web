import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navlinks from './Navlinks';
import Marquee from './Marquee';

const Header = () => {
    const today = new Date()
    return (
        <header className='bg-white'>

             <div className='flex justify-between items-center container mx-auto p-3'>
            <div className='flex items-center gap-2'>
                <div>
                    <Image src={'/logo-icon.png'}
                        alt='logo'
                        width={50}
                        height={50} className='bg-green-600 p-4 rounded-2xl'></Image>
                </div>
                <div>
                    <h1 className='font-bold text-black text-xl'>বাজার দর</h1>
                    <p className='text-sm text-black'>
                        {today.toLocaleDateString("bn-BD", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>

                </div>
            </div>
            <div className='flex gap-2'>
               <Link href={'/'}> <button className='bg-base-200 rounded-md px-3 py-2 text-md'>সাইন ইন</button></Link>
                <Link href={'/'}><button className='rounded-md bg-green-700 px-4 py-2 text-md font-semibold text-white hover:bg-red-700'>সাইন আপ</button></Link>
            </div>
        </div>
        <Navlinks></Navlinks>
        <Marquee></Marquee>
        </header>
       
        
    );
};

export default Header;