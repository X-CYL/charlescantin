import React from 'react';
import Cam from '../../assets/pics/charte/camera-64.png'

const SmallCharlesCantinLogo = () => {
    return (
        <div>
            <div className='smallCharlesCantinLogo'>
                <div className = 'cameraLogo'>
                    <img src = { Cam } alt = ''></img>
                </div>
                   <p>Charles Cantin</p> 
            </div> 
        </div>
    );
};

export default SmallCharlesCantinLogo;