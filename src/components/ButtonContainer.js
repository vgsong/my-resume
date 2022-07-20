import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function ButtonContainer(){
    return (
      <div className="Main-button-cont">
        <Link className="Default-Links" to="/blog">BLOG</Link>       
        <Link className="Default-Links" to="/resume">RESUME</Link>
        <Link className="Default-Links" to="/projects">PROJECTS</Link> 
        <Link className="Default-Links" to="/favorites">FAVORITES</Link>
      </div>
    )
}