// import React from "react"; 
// import './Login.css';
// import NavBar from "./Components/navbar";
// import { Link } from "react-router-dom";
// function Login() {
//   return (

//     <div className="logLogin" >
      
//       <div className="login">    
//           <form id="login" name="suForm">    
//             <label className="la" ><b>Email Id:</b>
//             </label><br />
//             <input type="email" name="uname" className="uname" placeholder="EmailID" />    
//             <br /><br />    
//             <label className="la"><b>Password:</b>    
//             </label>    
//             <input type="Password" name="Pass" id="Pass" placeholder="Password" onclick="resetBut()" />    
//             <br /><br /> <br /> <br />
//             <input type="checkbox" id="check" />    
//             <span>Remember me</span>    
//             <br /><br />    
//             <input type="button" name="log" id="log" />
//         <div className="but">
//           <Link to='/navbar'>Login</Link>     
//         </div>
//             <br /><br /> <br /><br />
//             <div className="urll">
//               <Link to="/signup" id="sign-link">Create an Account</Link>
//             </div>
//             <a className="fpass">Forgot Password?</a>    
//           </form>
//       </div></div>
//   );
// }
// export default Login;

import React, { useState } from "react";
// import './App.css';
// import { Link } from "react-router-dom";

// function Signup() {
//   const [isLoginForm, setIsLoginForm] = useState(true);

  // const switchToLogin = (event) => {
  //   event.preventDefault();
  //   setIsLoginForm(true);
  // };

  // const switchToSignup = (event) => {
  //   event.preventDefault();
  //   setIsLoginForm(false);
  // };

  // return (
    // <div className="container">
    //   <div className={`form-container ${!isLoginForm ? "active" : ""}`} id="signup-form">
    //     <h1>New User</h1>
    //     <form>
    //       <label htmlFor="new-username">First name</label>
    //       <input className="margin" type="text" id="new-username" name="new-username" required placeholder="   enter your firstname"/>
    //       <label htmlFor="new-username">Last name</label>
    //       <input className="margin" type="text" id="new-username" name="new-username" required placeholder="   enter your lastname"/>
    //       <label htmlFor="new-email">Email Id</label>
    //       <input className="margin" type="text" id="new-username" name="new-username" required placeholder="   Enter your emailid"/>
    //       <label htmlFor="new-email">Mobile No</label>
    //       <input className="margin" type="number" id="new-password" name="new-password" placeholder="   enter mobile no" required />
    //       <label htmlFor="new-email">Vechile No</label>
    //       <input className="margin" type="text" id="new-password" name="new-password" placeholder="   enter vechile no" required />
    //       <label htmlFor="new-email">Select Vechile Type </label>
    //       <select className="margin1" id="new-password" name="new-paddword" >
  
    //          <option value="volvo">  TWO-Wheeler</option>

    //          <option value="fiat">  FOUR-Wheeler  </option>
    //          <option value="audi">  OTHER</option>
             
    //          </select>
    //       <button  className="sumit" type="submit">Sign Up</button>
    //     </form>
    //     <p>
    //       Already have an account?{" "}
    //       <Link to="/"  id="login-link">
    //         Login
    //       </Link>
    //     </p>
    //   </div>
    // </div>
//   );
// }

// export default Signup;
import "./Login.css";
import {Link} from 'react-router-dom';
function Login()
{
    return(
        <div className="full">
            <div className="outer">
                <h1 id="title">KCHS INSTRUCTION </h1>
                <h1 id="head">LOGIN</h1>
                <div className="fields">

<br></br>
<br></br>
<input id="eml" type="email" required placeholder="Enter your email here" ></input>
<br></br>
<br></br>
<br></br>
<input id="pwd" type="password" required placeholder="Enter your password here" ></input>
<br></br>
<br></br>
<br></br>
<Link to='/navbar'><button id="submit">LOGIN</button></Link>
<br></br>

<br></br>
<br></br>
           <h4 id="lower">Don't  you have an account?     <Link to='/reg'>Register</Link></h4>
                </div>
            </div>
        </div>
    )
}

export default Login;