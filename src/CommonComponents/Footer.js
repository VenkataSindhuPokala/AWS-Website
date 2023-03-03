import { fotter } from "../Components/Data";
import React  from "react";

import './Footer.css';

export default function FotterData(){
    return(
    <>
    <div className="footer-data1">
        
        {fotter.map((e) => ( 
      <div className="fotter__main">
      <span className="fotter__title"> {e.title} </span>  
      <span className="fotter__title"> {e.qtn1} </span> 
      <span className="fotter__title"> {e.qtn2} </span> 
      <span className="fotter__title"> {e.qtn3} </span> 
      <span className="fotter__title"> {e.qtn4} </span> 
      <span className="fotter__title"> {e.qtn5} </span> 
      <span className="fotter__title"> {e.qtn6} </span> 
     
      </div>
    
     ))}
      
     
    </div>
   
    </>
    );
}