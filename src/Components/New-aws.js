import React from "react";
import {Link} from "react-router-dom";
import './New-aws.css';
import { New_account } from "./Data";
export default function Newaccount(){
    return(
        <>
         <div className="Accountimage">
           <img src="https://d3c9ouasuy8pg6.cloudfront.net/dist/images/aws-logo-light_2a8d69e93c95850234f1c278e70f7ddb.png"/>
         </div>

        <div className="Account_main">
         <div className="main">
               <h2>Explore free Tier Products with a new Aws account.</h2>
               <p> To learn more,visit aws.amazon.com/free. </p>
               <img src="https://d3c9ouasuy8pg6.cloudfront.net/dist/images/credential-light_a0fe0c5fd9697bd0322aa18f1769a946.png"/>

            </div>

        

            
         <div className="Account_right">
         <h1 className="NewSignup">SignUp For AWS </h1>
         {
            
           New_account.map((e) => ( 
            
               <div className="Newaccount">  
               <span className="Newaccount__tittle"> {e.title} </span>
              <span className="Newaccount__description"> {e.description}</span>
              <input className="Newaccount_email" type="email" name="email"></input>
              

              </div>
            
            ))}
            <button className="Newaccount_verifyemail">Verify email address</button>

              <button className="Newaccount_existingemail">
                <Link to={"/Signingup"}>
                Sign in to an existing AWS account
                </Link>
                </button>

           </div>
            </div>
            
        </>
    )
}