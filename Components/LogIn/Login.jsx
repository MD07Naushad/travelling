import React from "react";
import "./Login.css";
import "../../App.css";

import video from "../../Assets/Loginpage.mp4";
import { BiLogoMediumOld } from "react-icons/bi";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
// import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="loginPage flex">
      <div className="Container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title"> Create And sell Extraordinary Product</h2>
            <p>Adopt the pease of nature</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>

            <button className="btn"> Sign Up</button>
            {/* <Link>
            </Link>  link karna hai*/}
          </div>
        </div>

        <div className="formDiv flex">
          <BiLogoMediumOld className="icon" />
          <span>Ou-Trips</span>

          <h3>Welcome Back</h3>
        </div>

        <form action="" className="form grid">
          <span>Login Status will go here</span>

          <div className="inputDiv">
            <label htmlFor="username">Username</label>
            <div className="input flex">
              <FaUserShield className="icon" />
              <input type="text" id="username" placeholder="Enter Username" />
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="password">Password</label>
            <div className="input flex">
              <BsFillShieldLockFill className="icon" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button type="submit" className="btn flex">
            <span>Login</span>
            <AiOutlineSwapRight className="icon" />
          </button>

          <span className="forgetPassword">
            forget your password? <a href="">Click Here</a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
