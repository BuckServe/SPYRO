import React from 'react';
import ReactPlayer from 'react-player/lazy';

const VideoPart = () => {
    return (
        <div className="mx-auto py-12 bg-[#1E1E1E]">
            <div className="flex justify-center">
                <div className="w-full max-w-4xl relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                    <ReactPlayer
                        className="absolute top-0 left-0"
                        url="https://youtu.be/4-zjQvTDnbw?si=tBFGf1HW4b5mcdS6"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoPart;
