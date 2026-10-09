import Link from 'next/link';


interface InavData{
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}

const Navlinks = async() => {

    // data fething 
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')

    if(!res.ok){
        throw new Error(`API Error: ${res.status}`);
    }
    const navData:InavData[] = await res.json();
    // console.log('nav er data', navData)
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