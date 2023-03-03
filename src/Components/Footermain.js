import FotterData from "../CommonComponents/Footer";
import React from "react";
import './Footermain.css';
import gmail from '../images/gmail.png';
import youtube from '../images/youtube.png';
import images from '../images/images.png';
import facebook from '../images/facebook.png';
export default function Footercomponent(){
    return(
     <>
        <div className="footer_data"> <FotterData/>
          <FotterData/>
          <h1>hi</h1>
          <FotterData/>
          </div>
          
     </>
    );
}