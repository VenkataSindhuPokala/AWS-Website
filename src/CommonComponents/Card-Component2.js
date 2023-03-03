import React  from "react";
import './Card-Component2.css';
//  import { Marketing_data } from '../Components/Data';

export default function Marketingcomponent({marketingmain,marketinghead,marketingpara,Marketing_data}){

    return(
        <>
          {Marketing_data.map((e) => ( 
            <div className={marketingmain}>
           
            <div><img src={e.image} /></div>
             <h4 className={marketinghead}> {e.heading} </h4>
             <span class={marketingpara}>{e.description}</span>
             </div> 
             
           ))}
        </>
       
    );
}
