import { redirect } from "react-router-dom";
import Cookies from "js-cookie";
import axios from 'axios';
export function getVideoAuthToken(){
    const token = Cookies.get('token');
    return token;
}

export function checkVideoAuthLoader(){
    const token = getVideoAuthToken();
    axios.get("https://noteseravideobackend.onrender.com/authlogin/checkvalidity",{
        headers:{
            Authorization :`Bearer ${token}`
        }
    }).then(res=>{
        console.log(res)
        return null
    }).catch(err=>{
        console.log(err)
        return redirect('/hacker-Samajne-wale-ke-liye-msg')
    })
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