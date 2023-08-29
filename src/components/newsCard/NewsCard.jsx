import React from 'react'

function NewsCard({ar}) {
  return (
    <div key={ar.url}>
    <div className=" bg-slate-300 sm:h-[500px] h-[600px] sm:w-[400px] rounded-xl">
<div className='h-[230px]'>
 <img
   src={ar.urlToImage?ar.urlToImage:"https://c.ndtvimg.com/2023-08/6j12tl88_neptune_625x300_27_August_23.jpg"}
   alt=""
   className=" rounded-t-xl w-[100%] h-[100%] object-cover"
 />
</div>

<div className="px-5 sm:py-4 py-6">
 <h2 className="text-[20px] font-[600]">
{ar.title?ar.title.slice(0,44):"........."}...{" "} <br />
  
 </h2>
</div>

<div className="px-5 h-[130px] ">
 <p>
  {ar.description?ar.description.slice(0,180):"Data Not Available"}{".......  "}
 </p>
</div>

<div className="px-5 sm:pt-0 pt-12 flex justify-between">
 <p>
   <span className=" font-[600]"> Date :</span> Sun 27 2023
 </p>
 <a
 target='_blank'
   href={ar.url}
   className=" bg-blue-800 text-[15px] px-3 py-1 rounded-sm text-white font-[400]"
 >
   Read More
 </a>
</div>

 
</div>
</div>
  )
}

export default NewsCard
