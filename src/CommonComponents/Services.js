import React  from "react";
import './Services.css';
import { Services_list } from "../Components/Data"; 

export default function Services(){

    return(
        <>
          {Services_list.map((e) => ( 
            <button className="services"> 
            <div className="services__title"> {e.title} </div>
             <div class="service__description">{e.description}</div>
             </button> 
           ))}
        </>
       
    );
}