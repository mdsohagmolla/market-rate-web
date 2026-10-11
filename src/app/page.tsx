import AllProductCard from "@/components/AllProductCard";
import DecreaseCard from "@/components/DecreaseCard";

import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";



export interface Ifilter {
  id: number,

  nameBn: string,

  categoryNameBn: string,

  unit: string,
  image: string,
  today: number,
  yesterday: number,


  change: {
    dir: string,
    pct: number
  },
}

export default async function Home() {

  // Data fething
  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products', {
    next: {
      revalidate: 3600,
    }
  })
  const data: Ifilter[] = await res.json();
  const filterData = data.filter((item) => item.change.dir === "up")
  const filterincrese = filterData.slice(0, 6)
  // আজ দাম কমেছে
  const filterdata = data.filter((item) => item.change.dir === "down")
  const filterdecrease = filterdata.slice(0, 6)
  // console.log('decrease data' , filterdecrease)




  return (
    <div>

      <HeroSection></HeroSection>

      {/* ohter section */}
      <h1 className="container mx-auto font-bold text-2xl m-4"><span className="text-red-500">▲</span>আজ দাম বেড়েছে</h1>
      <div className="container mx-auto grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
        {
          filterincrese.map(item => <div key={item.id}> <ProductCard item={item}></ProductCard></div>)
        }
      </div>
      {/* আজ দাম কমেছে */}
      <h1 className="container mx-auto font-bold text-2xl m-4"><span className="text-green-500">▼</span>আজ দাম কমেছে</h1>
      <div className="container mx-auto grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {
          filterdecrease.map(item => <div key={item.id}> <DecreaseCard item={item}></DecreaseCard></div>)

        }
      </div>

      {/* সব পণ্য */}
      <h1 className="font-bold text-2xl m-4 text-black"><span>🛒</span>সব পণ্য</h1>
      <div className="container mx-auto grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {
          data.map(item => <div key={item.id}><AllProductCard item={item}></AllProductCard></div>)
        }
      </div>
      {/* all product */}

     
      


    </div>

  );
}
