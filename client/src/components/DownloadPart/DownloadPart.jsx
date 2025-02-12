import React from 'react';
import DownloadImg from '../../Images/downloadImg.png';
import downloadBtn1 from '../../Images/downloadBtn1.png';
import downloadBtn2 from '../../Images/downloadBtn2.png';

const DownloadPart = () => {
    return (
        <div className="bg-gradient-to-t from-orangeL to-orangeR text-white py-12">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0">
                <div className="lg:w-7/12 mb-8 lg:mb-0 lg:pl-10">
                    <h1 className="font-Outfit font-semibold text-48px">Download the most loved</h1>
                    <h2 className="font-Outfit font-semibold text-48px mt-2">fitness app</h2>
                    <h5 className="font-Outfit font-semibold text-20px mt-5">Start your fitness journey with us. Join the cult!</h5>
                    <div className="flex mt-6 space-x-4">
                        <img src={downloadBtn1} alt="Download button" className="w-32 sm:w-36 md:w-40 lg:w-48" />
                        <img src={downloadBtn2} alt="Download button" className="w-32 sm:w-36 md:w-40 lg:w-48" />
                    </div>

                </div>
                <div className="lg:w-5/12">
                    <img src={DownloadImg} alt="Download app" className="w-full object-cover" />
                </div>
            </div>
        </div>
    );
}

export default DownloadPart;
