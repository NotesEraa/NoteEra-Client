import { redirect } from "react-router-dom";
import Cookies from "js-cookie";
export function getAuthToken(){
    const token = Cookies.get('token');
    return token;
}

export function checkAuthLoader(){
    const token = getAuthToken();
    if(!token){
        return redirect('/videologin');
    }
    return null
}