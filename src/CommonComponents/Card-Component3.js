import React  from "react";
import './Card-Component3.css';
import {Products_OfferList} from '../Components/Data';


export default function ProductsComponent(){

    return(
        <>
          {
           Products_OfferList.map((e) => ( 
            <div className="product-main">
              <div className="product-offer"> {e.Offer} </div>
              <h4 className="product-title"> {e.title} </h4>
             <span className="product-descripton"> {e.description}</span>
             </div> 
           ))}
        </>
       
    );
}
