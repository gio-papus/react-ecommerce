import React,{useEffect, useState} from 'react'

function Count() {
    const[count,setCount]=useState(0);
    useEffect(()=>{
   console.log("Se han vendido:"+count)  
    },[count])
    

  return (
    <>
    <p className='plus' onClick={()=>setCount(count+1)}>+</p>
    <p>{count}</p>
    <p className='minus' onClick={()=>setCount(count-1)} min="0">-</p>
    </>
  )
}

export default Count