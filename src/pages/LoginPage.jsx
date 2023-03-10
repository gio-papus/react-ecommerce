import { useNavigate } from "react-router-dom"

function LoginPage() {
    const navigate=useNavigate();
    const nextPageHome=()=>{
navigate("/home");
    };
  return (
    <>
    <form>
<label >Name
<input type="text"></input>
</label><br></br>

<label>Password
<input type="password"></input>
</label><br></br>

<button onClick={nextPageHome}>OK</button>
    </form>
    </>
  )
}

export default LoginPage