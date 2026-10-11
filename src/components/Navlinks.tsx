import Link from 'next/link';


interface InavData{
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}

const Navlinks = async() => {
     // data fething 
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories',{
        next:{
            revalidate:3600,
        }
    })

    
    const navData:InavData[] = await res.json();
    // console.log('nav er data', navData)
    
    

    console.log('nav er data', navData)
    

    return (
        <div className='flex justify-center gap-4 mt-5 border border-gray-200 p-3'>
            
           <Link href={'/'}>🏠︎হোম</Link> 
          
          
           
             {
                navData.map(data => <Link href={`/category/${data.slug}`} key={data.id}>{data.icon}{data.nameBn}</Link>)
            }
         
          
        </div>
    );
};

export default Navlinks;