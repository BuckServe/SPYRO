import React from 'react';
import ReactPlayer from 'react-player/youtube';

const VIDEO_ID = '4-zjQvTDnbw';

// "light" mode shows only a thumbnail; the heavy YouTube player loads after the visitor clicks play
const PlayIcon = () => (
    <span className="pulse-ring flex h-16 w-16 items-center justify-center rounded-full bg-orangeL shadow-lg shadow-black/40 transition-transform duration-200 hover:scale-110 sm:h-20 sm:w-20">
        <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-white sm:h-8 sm:w-8" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
    </span>
);

const VideoPart = () => {
    return (
        <section className="bg-ink px-4 py-12 lg:py-16">
            <div data-reveal="zoom" className="mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-lg shadow-2xl shadow-black/50">
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
                    light={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                    playIcon={<PlayIcon />}
                    previewTabIndex={0}
                    playing
                    controls
                    width="100%"
                    height="100%"
                />
            </div>
        </section>
    );
};

export default VideoPart;
