import React from 'react';
import Header from '../Components/Header';
import './Description.css';
export default function Description({prop}){
    
    return(
        <div className='description'>
        <button className='description__butoon'> {prop} </button>
        </div>
    );
}