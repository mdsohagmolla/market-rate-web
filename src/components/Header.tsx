import Image from 'next/image';

import React from 'react';
import Navlinks from './Navlinks';
import Marquee from './Marquee';
import UserInfo from './UserInfo';

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
            <UserInfo></UserInfo>
            
        </div>
        <Navlinks></Navlinks>
        <Marquee></Marquee>
        </header>
       
        
    );
};

export default Header;