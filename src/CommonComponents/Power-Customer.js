import React  from "react";
import { Power_customer } from "../Components/Data";
import './Power-Customer.css';

export default function PowerCustomer(){
    return(
    <>
   
    <h2 className="power-main">Powering Customer Innovation</h2>
    
    <div className="power">
    {Power_customer.map((e) => ( 
      <div className="power1">
      <div className="power__image"><img src={e.image} /></div>
      <span className="power__heading"> {e.heading} </span>  
      </div>
     ))}
     </div>
     
    </>
    );
}