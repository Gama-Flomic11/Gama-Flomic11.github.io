'use client'
import { useState } from "react";

export default function Home() {
  const [invispanel, visiblepanel] = useState([false, false, false, false])

  const handleClick = (a: number) => {
    visiblepanel(
      [
        Boolean(Number(invispanel[0]) + Number(a==0)), 
        Boolean(Number(invispanel[1]) + Number(a==1)),
        Boolean(Number(invispanel[2]) + Number(a==2)), 
        Boolean(Number(invispanel[3]) + Number(a==3))
      ]
    );
  }
  
  return (
    <>
    <div className="grid grid-cols-5 gap-5 p-10 z-index-0">
      {<div className="bg-green-500 opacity-100 rounded-lg p-2 z-index-5" onClick={() => handleClick(0)}>
        You enter a dream, cold and dark <div className='flex'><div className='flex w-100'/><img className='flex' src='image.png' width='40'/></div> </div>}
      {invispanel[0] && (
            <div className="bg-green-400 rounded-lg p-2" onClick={() => handleClick(1)}>
                Words 
                <div className='flex'><div className='flex w-100'/><img className='flex' src='image.png' width='40'/></div>
            </div>
            
      )}
      {invispanel[1] && (
            <div className="bg-green-400 rounded-lg p-2">
                Words
            </div>
            
      )}
    </div>
    
    </>


  /* //   <h1 className="text-3xl font-bold underline" 
  //     >
  //       {<>Ideas<br/>I- Want to create a particle light up for the background to see<br/>
  //       I- Want to create a tree</>}
  //       
  //       <div/>
  //     </h1> */
  )
}
