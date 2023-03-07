import React from 'react'
import './cards.css';

function Cards({ heading,img,desc }) {
    console.log(img)
  return (
    <div className='card'>
        <h1 className='uppar-part'>{heading}</h1>
        <img src={img} alt="" className='img' />
        <p className='lower-part'>{desc}</p>
    </div>
  )
}

export default Cards;
