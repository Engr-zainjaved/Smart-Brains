import React from 'react';
import './Logo.css';
import brain from './Brain.png'
const Logo = () => {
    return(
        <div className=' m-6 mt-0 text-left h-21 w-20'>
        <img src={brain} alt="logo" />
        </div>
    )
}

export default Logo;