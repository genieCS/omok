import React from 'react';
import '../styles/GoStone.css';
import white from '../images/white.png';
import black from '../images/black.png';

export function White() {
    return (
    <img src={ white }
        className='stone'
        alt='white' />
    );
}

export function Black() {
    return (
    <img src={ black }
        className='stone'
        alt='black'/>
    );
}
