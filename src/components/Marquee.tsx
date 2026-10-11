import Link from 'next/link';

import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface ImarqueeData{
    nameBn: string,
      image: string,
      id: number,
      today: number,
       change: {
      dir: string,
      pct: number,}
}

const Marquee = async() => {

    // Data fetching

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products', {
    next: {
      revalidate: 3600,
    },
  })
    const data = await res.json();
    const marqueeData:ImarqueeData[] = data.slice(0,10)
    // console.log("marque er data", marqueeData)
    return (
        <div className='my-3 border border-gray-200 p-1'>
            <MarqueeText direction='right' duration={30}>
           
            {
                marqueeData.map(data => <Link href={`/details/${data.id}`} className='hover:underline decoration-gray-400'  key={data.id} >
                <span key={data.id}><span className='mx-3'>{data.image}{data.nameBn} {data.today} টাকা/কেজি <span>{data.change.dir==="up"? <span className='text-red-600'>▲{data.change.pct}%</span>:<span className='text-green-500'>▼{data.change.pct}%</span>}</span></span></span>
                </Link>)
            }
           
            </MarqueeText>
        </div>
    );
};

export default Marquee;