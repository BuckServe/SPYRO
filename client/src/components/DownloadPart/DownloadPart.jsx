import React from 'react';
import DownloadImg from '../../Images/downloadImg.webp';
import downloadBtn1 from '../../Images/downloadBtn1.webp';
import downloadBtn2 from '../../Images/downloadBtn2.webp';

const DownloadPart = () => {
    return (
        <section className="overflow-hidden bg-gradient-to-t from-orangeL to-orangeR py-12 text-white">
            <div className="container flex flex-col items-center justify-between gap-8 lg:flex-row">
                <div data-reveal="left" className="text-center lg:w-7/12 lg:pl-10 lg:text-left">
                    <h2 className="font-Outfit text-3xl font-semibold sm:text-4xl lg:text-48px lg:leading-tight">
                        Download the most loved <br className="hidden sm:block" />fitness app
                    </h2>
                    <p className="mt-5 font-Outfit text-lg font-semibold sm:text-20px">Start your fitness journey with us. Join the cult!</p>
                    <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                        <img src={downloadBtn1} alt="Get it on Google Play" className="w-36 md:w-40 lg:w-48" width="194" height="60" loading="lazy" />
                        <img src={downloadBtn2} alt="Download on the App Store" className="w-36 md:w-40 lg:w-48" width="186" height="60" loading="lazy" />
                    </div>
                </div>
                <div data-reveal="right" className="w-full max-w-sm lg:w-5/12 lg:max-w-none">
                    <img src={DownloadImg} alt="SPYRO app screens" className="float-y w-full object-cover" width="543" height="520" loading="lazy" />
                </div>
            </div>
        </section>
    );
};

export default DownloadPart;
