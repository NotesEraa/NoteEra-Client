import Cookies from "js-cookie";
import Button from "../../components/UI/button"
import { useNavigate } from "react-router-dom"
const HackerBhai =()=>{
    const navigate= useNavigate();
    return<>
    <h1>"beta masti nahi kerte chup chap padai likhai kero .. love from Notes-era  </h1>
    <h3> next time try mat kerna ip block kerte bhi aati hai exam time me code mat kerwa mujhse !!</h3>
    <Button onClick={()=>{
        Cookies.remove('notestoken');
        Cookies.remove('token');
        navigate('/');
    }}>hello bhai please back hojao ab  </Button>
    </>
}
export default HackerBhai;