import { useContext } from "react"
import CartContext from "../context/CartContext"
import "./styles/itemlist.css"

function ItemList({id,title,price,img}) {
 const {cart,allInCart}=useContext(CartContext);
  console.log(cart)
  const buy=()=>{
    allInCart({id,title,price,img})
  }
  return (
    <div className='object__card--div'>
       <img className='img' src={img} alt=""/>
       <p>{title}</p>
       <p>{price}</p>
       <button onClick={buy}>Buy</button><br></br><br></br><br></br>
       
    </div>
  )
}

export default ItemList