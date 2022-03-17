import React from 'react';
import Image from 'next/image'
import profilePic from '../../public/logo/logo-color.png'
const Loader = () => {
    return (
        <div class="stage">
            <div class="wrapper lg:text-6xl md:text-4xl sm:text-3xl">
                <div class="slash"></div>
                <div class="sides">
                    <div class="side"></div>
                    <div class="side"></div>
                    <div class="side"></div>
                    <div class="side"></div>
                </div>
                <div class="text">
                    <div class="text--backing"><span className='text-white'>Sera</span> buy</div>
                    <div class="text--left">
                        <div class="inner"><span className='text-white'>Sera</span>buy</div>
                    </div>
                    <div class="text--right">
                        <div class="inner"><span className='text-white'>Sera</span>buy</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;