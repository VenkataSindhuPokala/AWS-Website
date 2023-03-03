import React, { useState } from 'react';
import Header from '../Components/Header';
import './DescriptionDown.css';
import { description_data } from '../Components/Data';
import CardComponent from './Card-Component1';

function PopUPData({data}){
    const component = (data == "Solutions" ? <CardComponent /> : 'Hello');
    console.log("data",data);
    return (
        <div style={{color:"white", position:'absolute', background:"black" }}>
            {component}
        </div>
    )
}

export default function DescriptionDown(){
    const [hover, setHover] = useState(false)
    const [hoverData, setHoverData] = useState("")
    const show = (data)=>{
        console.log(data)
        setHover(true)
        setHoverData(data)
    }

    const notShow = (data)=>{
        console.log(data)
        setHover(false)
    }
    
    return(
        <div>
           
       
        {description_data.map((e) => (
            <span class="des-product" onMouseEnter={()=>show(e)} onMouseLeave={()=>notShow(e)}> {e.description}  </span> 
        ))}

             {
           hover && <PopUPData data={hoverData.description}/>
            }
        </div>
        );
}