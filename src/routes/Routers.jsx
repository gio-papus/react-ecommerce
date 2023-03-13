import{Routes,Route,BrowserRouter,Link} from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/HomePage"
import CartPage from "../pages/CartPage"
import ErrorPage from "../pages/ErrorPage"
import "./routers.css"


function Routers() {
  return (
        <BrowserRouter>
    <nav className="routers__nav--links">
        <Link to={"/"}>Login</Link><br></br>
       
     
        <Link to={"/cart"}>Cart</Link><br></br>
    
    </nav>

        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers