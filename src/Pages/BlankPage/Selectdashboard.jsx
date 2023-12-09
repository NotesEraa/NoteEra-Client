import  Button from '../../components/UI/button'
import Card from "../../components/UI/Card"
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom'
const SelectDashboard=()=>{
    const navigate = useNavigate();
    const handleBack=()=>{
        Cookies.remove('token');
        navigate('/');
    }
    return<Card>
        <Button onClick={()=>{navigate('/login9874Notes/dashboard')}}>NOTES DASHBOARD</Button>
        <Button onClick={()=>{navigate('/video/dashboard')}}>Video DASHBOARD</Button>
        <Button onClick={handleBack}>Back</Button>
    </Card>
}

export default SelectDashboard;