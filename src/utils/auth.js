import { redirect } from "react-router-dom";
import Cookies from "js-cookie";
export function getVideoAuthToken(){
    const token = Cookies.get('token');
    return token;
}

export function checkVideoAuthLoader(){
    const token = getVideoAuthToken();
    if(!token){
        return redirect('/videologin');
    }
    return null
}

export function getNotesAuthToken(){
    const token = Cookies.get('notestoken');
    return token;
}

export function checkNotesAuthLoader(){
    const token = getNotesAuthToken();
    if(!token){
        return redirect('/noteslogin');
    }
    return null
}