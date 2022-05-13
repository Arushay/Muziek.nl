import React from 'react'
import DownloadAds from './DownloadAds';

const Hero = () => {
    return (
        <div>
            <div className="wrapper bg-black flex items-center justify-between px-20 rounded-b-lg h-[35rem] w-full relative">
                {/* left side */}
                <div className="headings flex flex-col items-start justify-center h-full text-5xl">
                    <span>Experience the </span>
                    <span><b>best dutch music</b></span>
                </div>
                <span className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing eliium iusto ipsum voluptatum
                    <br />maiores totam sunt cupiditate accusamus quis libero officiis!
                </span>
                <span className='text-xs'>Download now on IOS and Android</span>
                <DownloadAds/>
                {/* right side */}
                <div className="images">
                    right
                </div>
            </div>
        </div>
    )
}

export default Hero;