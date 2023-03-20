import React,{useContext, useEffect, useState} from 'react'
import { CountContext } from '../CountContext'


function Count() {
  const [countc,setCountc]=useContext(CountContext)
  const [count,setCount]=useState(0)
  useEffect(()=>{
 console.log("Se han vendido:"+count)  
 console.log("Se "+setCount)
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