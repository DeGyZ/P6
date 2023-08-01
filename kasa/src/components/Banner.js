import React from 'react';

const Banner = ({bannerImgSrc, bannerTitle}) => {
    return (
        <div className='photoBanner'>
        <img src={bannerImgSrc} alt="" />
        {!bannerTitle ? "":<h1>{bannerTitle}</h1>}
        </div>
    );
};

export default Banner;