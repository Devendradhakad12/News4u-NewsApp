import React  from 'react'
import WMDx from '../../assets/WMDx.gif'
const Spinner = ()=>{
    return (
   
        <div className='  bg-slate-900 w-[100%]  h-[100vh]  text-center  flex justify-center items-center '  >
          <img src={WMDx} alt="Loading....." style={{height : '70px' , width :'70px'}}/> 
        </div>
        
      
      )
}
export default Spinner  