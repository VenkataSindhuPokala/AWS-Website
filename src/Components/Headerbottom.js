import React from "react";
import Description from "../CommonComponents/Description";
import './Headerbottom.css';
import SignUp from "../CommonComponents/Complete-Sign-Up";
export default function Headerbottom(){
    return(
        <section className="b-image">
        <h1 className="registration">Complete your Aws Registration</h1>
        <p  className="registration" id="Millions">Millions of Customers are using AWS cloud solutions to build applications</p>
        <p className="registration" id="Millions"> with increased flexibility, scalability, security, and reliability </p>
        
        <SignUp prop='Complete Sign Up' buttonStyle = "Sign__button" />
        
        <div class="aws-speacialist">
        <p className="registration" id="Question">Questions about getting started with AWS? </p>
        <button id="question">Contact an Aws speacialist </button>
        </div>
        </section>
    )
}