import React from "react";
import logo from '../images/logo.png'
import Description from "../CommonComponents/Description";
import Descriptionarrow from "../CommonComponents/Description-down-arrow";
import DescriptionDown from "../CommonComponents/DescriptionDown";
import SignUp from "../CommonComponents/Complete-Sign-Up";
import './Header.css';
export default function Header(){
    return(
        <header className="header-main">
        <div className="header">
         <div className="header-left">
        <img class="aws-logo" src={logo} alt="logo"/>
        </div>
        <div className="header-right">
        <Description  prop={'Contact Us'} />
         <Descriptionarrow prop={'Support'}/>
         <Descriptionarrow prop={'English'}/>
         <Descriptionarrow prop={'My Account'}/>
        <Description prop={'Sign In'} />
        <SignUp prop={'Complete Sign Up'} buttonStyle = {"Sign__button2"} />
        </div>
        </div>
          <div className="header-bottom">
             <DescriptionDown />
           </div>
       
        </header>
    );
}
