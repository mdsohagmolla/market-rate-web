import { Ifilter } from '@/app/page';
import AllProductCard from '@/components/AllProductCard';
import React from 'react';

const Category = async({params}:{params:{categoriId:string}}) => {
    const {categoriId}= await params
    
    // Data fething
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${categoriId}`)
     const data:Ifilter[] = await res.json();
     const categoryData = data.slice(0,1)
     console.log('slice er data', categoryData)
    return (
        <div className='container mx-auto'>
            
            
            <div className='flex items-center bg-white p-4 m-3 rounded-2xl'>
                <div className=''>
                    <h1 className='text-5xl'> {data[0].image}</h1>
                  
                   
                </div>
                <div>
                      <h1 className='text-2xl font-bold'>{data[0].categoryNameBn}</h1>
                      <h1>{`${data.length} টি পণ্যের আজকের দাম ও পরিবর্তন`}</h1>
                </div>
                
                    
                
            </div>
            {/* Sorting button */}
            <div className='flex justify-between bg-white p-3 m-2 rounded-2xl'>
                {/* empty div */}
                <div></div>
                <div className='flex gap-1'>
                    <button className='btn '>সাজান</button>
                    <button className='btn bg-amber-50 rounded-md'>ডিফল্ট</button>
                </div>
            </div>
            {/* map  */}
            <div className='gcontainer mx-auto grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map(item => <AllProductCard key={item.id} item={item}></AllProductCard>)
                }
            </div>
        </div>
    );
};

export default Category;