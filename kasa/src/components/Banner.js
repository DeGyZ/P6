import React from 'react';
import photoBanner from './photoBanner.png';

const Banner = () => {
    return (
        <div className='photoBanner'>
        <img src={photoBanner} alt="" />
        {/* <h1>Chez vous, partout et ailleurs</h1> */}
        </div>
    );
};

export default Banner;