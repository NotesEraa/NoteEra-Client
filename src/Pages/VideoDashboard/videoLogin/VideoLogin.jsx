import './videologin.css';
import { useState} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
const VideoLogin=()=>{
    const navigate =useNavigate();
    const[emailInput,setEmailInput]=useState(null);
    const [passwordInput,setPasswordInput]=useState(null);
    const [errormsg,setErrorMsg]=useState(false);
    const emailInputHandler =(event)=>{
        setEmailInput(event.target.value)
    }
    const passwordInputHandler=(event)=>{
        setPasswordInput(event.target.value)
    }
    
    const submitHandler=(event)=>{
        event.preventDefault();
        if(passwordInput===""||emailInput===""){
            setErrorMsg(true)
        }
        else{
            axios.post("https://noteseravideobackend.onrender.com/authlogin/admin",{
                username:emailInput,
                password:passwordInput
            }).then(res=>{
                console.log(res.status);
                localStorage.setItem('userdata',res.data.find_user._id)
                navigate("/video/dashboard");
                setErrorMsg(false)
            }).catch(err=>{
                if(err.response.status===401){
                    alert("invalid user details please enter correct details");
                    setErrorMsg(true);
                }
            })
            

        }
        
    }
    return<div className="videologincontainer">
	<div className="screen">
		<div className="screen__content">
        <a href='/' className='btn btn_dark'>back</a>
			<form className="login">
            <h3>Notes-Era Admin</h3>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder=" Enter User name" onChange={emailInputHandler}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password" onChange={passwordInputHandler}/>
				</div>
                {errormsg && "please enter correct credentials"}
				<button className="button login__submit"onClick={submitHandler}>
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
            
			{/* <div className="social-login">
				<h3>log in via</h3>
				<div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
			</div> */}
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>

}
export default VideoLogin;