import Axios from 'axios';
import '../../../public/assets/css//Login.css'
import { useEffect, useRef, useState} from 'react';
import {Link, useNavigate, useOutletContext} from 'react-router-dom'
import RiseLoader from "react-spinners/RiseLoader";
const AdminLogin = ()=>{
  const nav = useNavigate(null)
  const [name, setName] = useState(null)
  const [password, setPassword] = useState(null)
  const [LoginStatus, setLoginStatus]= useState(null)
  const mainContainer = useRef(null)
  const passwordInput = useRef(null)

  const showPassword = () =>
  { 
    if(passwordInput.current.type == "password"){
      passwordInput.current.type = "text"
      eye.current.classList = "fa fa-eye"
    }
    else{
      passwordInput.current.type = "password"
      eye.current.classList = "fa fa-eye-slash"
    }
  }
  const handleSignUp = () => 
  {
      mainContainer.current.classList.add("sign-up-mode")
  }
  const handleSignIn = () => 
  {
    mainContainer.current.classList.remove("sign-up-mode")
  }
  const login = (e) => {
    e.preventDefault();

    // Check if email or password is empty
    if (!name || !password) {
      setLoginStatus("Please fill out all fields");
      return;
    }

    // Proceed with login request if both email and password are provided
    Axios.post("http://localhost:3036/login", {
      name: name,
      password: password,
    })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus("");
          // Manually navigate to the dashboard upon successful login
          window.location.href = "admin/dashboard";
        }
      })
      .catch((error) => {
        console.error("Error occurred while logging in:", error);
        setLoginStatus("Error occurred while logging in");
      });
  };


    return(
  
            <>

  <div className="AdminLogin" ref={mainContainer}>
  <div className="forms-container">
    <div className="signin-signup">
      <form action="#" className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <h1
                  style={{
                    color: "red",
                    fontSize: "15px",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  {LoginStatus}
                </h1>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" 
          placeholder="Username" required
          onChange={(e) => {
                    setName(e.target.value);
                  }}/>
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" 
            placeholder="Password" required
            onChange={(e) => {
            setPassword(e.target.value);
                  }} />
           {/* <i className="fa fa-eye-slash" id='eyes' aria-hidden="true" 
           style={{position:"relative", left:"23vw", bottom: "4.1vw"}}
            onClick={showPassword} ref={eye}></i> */}
        </div>
        <input type="submit" value="Login" className="btn solid"onClick={login} />
        {/* <p className="social-text">Or Sign in with social platforms</p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in" />
          </a>
        </div> */}
      </form>
      <form action="#" className="sign-up-form">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" className="btn" value="Register" />
        {/* <p className="social-text">Or Sign up with social platforms</p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in" />
          </a>
        </div> */}
      </form>
    </div>
  </div>
  <div className="panels-container">
    <div className="panel left-panel">
      <div className="loginContent">
        <h3>New here ?</h3>
        <p>
        Ready to ship with ease?
Sign up now and experience seamless freight management!

        </p>
        <button className="btn transparent" id="sign-up-btn" onClick={handleSignUp} >
          Sign up
        </button>
      </div>
      <img src="/img/log.svg" className="image" alt="" />
    </div>
    <div className="panel right-panel">
      <div className="loginContent">
        <h3>One of us ?</h3>
        <p>
        Welcome aboard the kargada freight services!
Join us and experience seamless shipping like never before.
        </p>
        <button className="btn transparent" id="sign-in-btn" onClick={handleSignIn}>
          Sign in
        </button>
      </div>
      <img src="/img/register.svg" className="image" alt="" />
    </div>
  </div>


  </div>
</>


    )
}

export default AdminLogin;