import React, { useContext } from "react"
import { CountContext } from "../CountContext"

function Checkout() {
 
  const [countc,setCountc]=useContext(CountContext)
  console.log(countc)
//   const [count,setCount]=useState(0)
//   useEffect(()=>{
//  console.log("Se han vendido:"+count)  
//  console.log("Se "+setCount)
//   },[count])
  return (
    <div>
        <h1>CHECKING</h1>
        <p>Stock:{countc}</p>
        <p>Total:</p>
    </div>
  )
}


export default Checkout