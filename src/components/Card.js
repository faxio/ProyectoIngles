import React from 'react';
import "../style/card.css"
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    let navigate = useNavigate();
  return(
   <div className='cards'>
    <h2>{props.titulo}</h2>
    <button className='button' onClick={(e) => navigate(`/${props.titulo}`)}>Click</button>
   </div>
  )
};

export default Card;
