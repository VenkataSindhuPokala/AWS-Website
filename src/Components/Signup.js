import React from "react";
import logo from '../images/logo2.png'
import { User } from "./Data";
import './Signup.css';
import {Link} from "react-router-dom";
import Main from "../main";
export default function Signingup(){
    return(
        <>
        
   
        <div className="UserSingin">
        <div className="main1">
        <div>
         <Link to={"/Main"}>
           <img class="aws-logo" src={logo} alt="logo"/>
           </Link>
        </div>

        <b>Sign in</b>
        {
            
           User.map((e) => ( 
            <div className="user">
              <div className="title"> <input className="check"type="checkbox"></input>{e.title} </div>
              <div className="learn-description">
              <span className="descriptionl"> {e.description} </span>
             <span className="learn"> {e.learn}</span>
             </div>
             </div> 
           ))}
        
        
           <h4 className="email"> Root user email address</h4>
           <input className="email__address"type="tel"  placeholder="example@divami.com" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
           <button className="next_button">Next</button>

           <p>By continuing, you agree to the<span> AWS Customer Agreement</span> or other agreement for AWS services, and the<span> Privacy Notice.</span> This site uses essential cookies. See our<span > Cookie Notice</span> for more information.</p>
          <h4>New to AWS?</h4>

   
          <button>
             <Link to={"/Newaccount"}>
             Create a anew AWS account
            </Link>
            </button>
           </div>
       

            <div className="imagelogo">
               <img src="https://d1.awsstatic.com/Digital%20Marketing/sitemerch/sign-in/en/Site-Merch_AWS-Certification-Propel_Console-Sign-In.38703e5d6aaef403076700b453c82e6efe487b71.png"/>
            </div>
          </div>
        </>
    );
}
