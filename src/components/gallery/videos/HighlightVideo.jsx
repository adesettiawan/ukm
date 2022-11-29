import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LineUkm from "../../lines/LineUkm";
import news from "../../../assets/images/news.png";

const HighlightVideo = () => {
    return (
        <>
            <div className="mt-10 flex flex-wrap items-center justify-between">
                <h5 className="text-xl font-bold text-primary">Video</h5>
                <a
                    href="#"
                    className="text-[15px] font-medium text-dark hover:text-secondary"
                >
                    Lihat semua
                </a>
            </div>
            <LineUkm />

            <div className="mb-10 mt-5 w-full overflow-hidden rounded-lg">
                <LazyLoadImage
                    src={news}
                    className="w-full sm:h-[420px] lg:h-[300px]"
                    effect="blur"
                    alt="news.png"
                    placeholderSrc={news}
                    width={"100%"}
                />
            </div>
        </>
    );
};

export default HighlightVideo;
