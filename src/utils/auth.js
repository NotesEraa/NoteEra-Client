import { redirect } from "react-router-dom";

export function getAuthToken(){
    const token = localStorage.getItem('userdata');
    return token;
}

export function checkAuthLoader(){
    const token = getAuthToken();
    if(!token){
        return redirect('/videologin');
    }
    return null
}