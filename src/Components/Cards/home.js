import React from 'react'
import { detailsArray } from '../Img&Arr/arrays';
import Cards from './cards';

function Home() {
  return (
    <div>
      {detailsArray.map((item) => (
        <Cards heading ={item.heading} img={item.image} desc={item.desc} />
      ))}
    </div>
  )
}

export default Home;
