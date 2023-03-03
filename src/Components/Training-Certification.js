import React from "react";
import { Training_CertificationData } from "./Data";
import './Training-Certification.css';

export default function Training(){
    return(
        <div className="training-content">
       <div className="content">
       <h2 className="head1">Training and Certification</h2>
       <div className="decision-builders">
       <span class="text" > For Builders </span>
       <span class="text"> For Decision Makers</span>
       </div>
       <div className="head1">For developers,data scientists,solutions architects, or anyone intrested in learning how to build on AWS today</div>
       </div>
       <div className="Training-data">
       
       {
           Training_CertificationData.map((e) => ( 
            <div className="Training">
             <div className="image"><img src={e.image} /></div>
              <div>
              <h4 class="Training__title"> {e.title} </h4>
             <span class="Training__description"> {e.description}</span>
             <span className="Training_links"> {e.link1}</span>
               </div>
             </div> 
           ))}
           
           </div>
       </div>
    )
}