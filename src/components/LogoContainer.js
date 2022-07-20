import React from 'react'

import CWlogo from '../imgs/codewarsicon.png';
import GHlogo from '../imgs/ghicon.png';
import MAILlogo from '../imgs/mailicon.png';
import LOClogo from '../imgs/locicon.png';


export default function LogoContainer(){
    return (
      <div className="Main-logo-cont">
        <a href=""><img src={GHlogo} alt="GH"></img></a>
        <img src={CWlogo} alt="CW"></img>
        <img src={MAILlogo} alt="MAIL"></img>
        <img src={LOClogo} alt="LOCATION"></img>
      </div>
    )
  }