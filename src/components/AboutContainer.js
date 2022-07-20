import React from 'react';

import Mainlogo from '../imgs/ringo.jpg';


export default function AboutContainer() {
    return (
    <div>
      <img src={Mainlogo} className="Mainlogo" alt="ringo"></img>
      <h2>Hello!</h2>
      <p>I am a data analyst, cyclist, reader and history enthusiast. Learning Python.</p>
      <p> Currently working in finance at Cordoba Corporation.</p>
    </div>
    );
}