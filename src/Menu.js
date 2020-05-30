import React from 'react';
import logo from './logo1.jpg';

const Menu = ()=>{

    return(
        <>
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="menu">
                <a href="https://www.youtube.com/">Home</a>
                <a href="https://www.youtube.com/">About</a>
                <a href="https://www.youtube.com/">Service</a>
                <a href="https://www.youtube.com/">Contact</a>
            </div>
        </>

    )
}

export default Menu;