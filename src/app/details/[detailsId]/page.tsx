
import { Product } from '@/app/type';
import { notFound } from 'next/navigation';


import React from 'react';



const DetailsPage = async ({ params }: { params: { detailsId: string } }) => {
    const { detailsId } = await params
    // console.log('details er param',detailsId)

    // data fething 
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${detailsId}`,{
      next:{
        revalidate: 3600,
      }
    })
    const data:Product = await res.json();
    
    const newData = data.id
    if(!newData){
      notFound()
    }

    // gpt section

    // const average = (data.markets.reduce( (sum, market) => sum + (market.min + market.max) / 2, 0 ) / data.markets.length);
    //  const lowest = Math.min(...data.markets.map((market) => market.min)); const highest = Math.max(...data.markets.map((market) => market.max)); 
     
     const formatPrice = (price: number) => price.toLocaleString("bn-BD", { maximumFractionDigits: 2, });
    
    // const unitBn = data.unit === "kg" ? "কেজি" : data.unit === "liter" ? "লিটার" : data.unit === "piece" ? "টি" : data.unit;
    

    return (
        <div>
            <div className="m-3 flex items-center gap-3 rounded-2xl border border-[#E1E9E1] bg-[#FAFCFA] p-4"> {/* Left side: Product Image */} <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F0F5F0]"> <span className="text-3xl">{data.image}</span> </div> {/* Middle: Product Details */} <div className="min-w-0 flex-1"> <h1 className="text-xl font-bold text-[#202820] sm:text-2xl"> {data.nameBn} </h1> <p className="mt-1 text-xs text-gray-500"> প্রতি {data.unit === "kg" ? `কেজি · ${data.categoryNameBn}` : data.unit} </p> {/* Price Difference */} <p className="mt-2 text-xs text-[#354035]"> {data.today > data.yesterday ? `গতকালের তুলনায় আজ দাম বেড়েছে : ${Math.abs(data.today - data.yesterday)} টাকা` : data.today < data.yesterday ? `গতকালের তুলনায় আজ দাম কমেছে : ${Math.abs(data.today - data.yesterday)} টাকা` : "গতকালের তুলনায় আজ দাম অপরিবর্তিত রয়েছে"} </p> </div> {/* Right Side: Today's Price Card */} <div className="flex w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-[#F0F5F0] px-2 py-3 sm:w-24 sm:py-4"> <p className="text-[10px] text-gray-500 sm:text-xs"> আজকের দাম </p> <h2 className="mt-1 text-2xl font-bold text-[#202820] sm:text-3xl"> {data.today} </h2> <p className="mt-1 text-[10px] text-gray-500 sm:text-xs"> টাকা / {data.unit === "kg" ? "কেজি" : data.unit} </p> {/* Price Change Percentage */} {(() => { const difference = data.today - data.yesterday; const percentage = data.yesterday ? (difference / data.yesterday) * 100 : 0; return ( <p className={`mt-1 flex items-center gap-1 text-[10px] font-bold sm:text-xs ${ difference > 0 ? "text-red-500" : difference < 0 ? "text-green-600" : "text-gray-500" }`} > {difference > 0 ? "▲" : difference < 0 ? "▼" : "—"} {Math.abs(percentage).toFixed(1)}% </p> ); })()} </div> </div>


            {/* details card */}


           <div className="overflow-x-auto rounded-2xl border border-[#E1E9E1]">
  <table className="w-full min-w-162.5 border-collapse text-left text-xs sm:text-sm">
    <thead className="bg-[#FAFCFA] text-gray-500">
      <tr>
        <th className="px-3 py-3 font-medium">
          বাজার
        </th>
        <th className="px-3 py-3 font-medium">
          বিভাগ
        </th>
        <th className="px-3 py-3 text-right font-medium">
          সর্বনিম্ন
        </th>
        <th className="px-3 py-3 text-right font-medium">
          সর্বোচ্চ
        </th>
        <th className="px-3 py-3 text-right font-medium">
          গড়
        </th>
      </tr>
    </thead>

    <tbody>
      {data.markets.map((market, index) => {
        const marketAverage = (market.min + market.max) / 2;

        return (
          <tr
            key={`${market.market}-${index}`}
            className={`border-t border-[#D7DED7] ${
              index % 2 === 1
                ? "bg-[#F0F5F0]"
                : "bg-[#FAFCFA]"
            }`}
          >
            <td className="px-3 py-3 text-[#283329]">
              {market.market}
            </td>

            <td className="px-3 py-3 text-[#283329]">
              {market.division}
            </td>

            <td className="px-3 py-3 text-right text-[#283329]">
              {formatPrice(market.min)} টাকা
            </td>

            <td className="px-3 py-3 text-right text-[#283329]">
              {formatPrice(market.max)} টাকা
            </td>

            <td className="px-3 py-3 text-right font-bold text-[#283329]">
              {formatPrice(marketAverage)} টাকা
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

        </div>

        
    );
};

export default DetailsPage;