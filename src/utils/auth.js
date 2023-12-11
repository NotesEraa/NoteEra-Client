import { redirect } from "react-router-dom";
import Cookies from "js-cookie";
import axios from 'axios';
export function getVideoAuthToken(){
    const token = Cookies.get('token');
    return token;
}

export async function checkVideoAuthLoader(){
    const token = getVideoAuthToken();
    try{
    const getvalue = await axios.get("https://noteseravideobackend.onrender.com/authlogin/checkvalidity",{
        headers:{
            Authorization :`Bearer ${token}`
        }
    })}
    catch(error){
        return redirect('/hacker-Samajne-wale-ke-liye-msg')
    }
    if(!getvalue){
        return redirect('/hacker-Samajne-wale-ke-liye-msg')
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