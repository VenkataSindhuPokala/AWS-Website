import React  from "react";
import './Card-Component1.css';
import { card_data } from '../Components/Data';

export default function CardComponent(){

    return(
        <>
          {card_data.map((e) => ( 
            <div className="head">
            <div className="card__head__para"> <h1 className="card__head"> {e.heading} </h1> <p class="card__para">{e.description}</p></div> 
            <div><img src={e.image} /></div>
            </div>
           ))}
        </>
       
    );
}
