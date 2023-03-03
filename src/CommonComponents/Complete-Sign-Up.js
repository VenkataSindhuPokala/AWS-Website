import React from 'react';
import Header from '../Components/Header';
import './Complete-Sign-Up.css';
import {Link} from "react-router-dom";
export default function SignUp({buttonStyle,prop}){
    
    return(
        <div className='signup'>
            {/* <nav> */}
        <button className={buttonStyle}>
            <Link to={"/signup"}>

             {prop}
             </Link>
        </button>
              {/* </nav> */}
        </div>
    );
}