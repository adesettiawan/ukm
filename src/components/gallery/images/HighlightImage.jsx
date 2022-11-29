import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LineUkm from "../../lines/LineUkm";
import news from "../../../assets/images/news.png";

const HighlightImage = () => {
    return (
        <>
            <div className="mt-10 flex flex-wrap items-center justify-between">
                <h5 className="text-xl font-bold text-primary">Foto</h5>
                <a
                    href="#"
                    className="text-[15px] font-medium text-dark hover:text-secondary"
                >
                    Lihat semua
                </a>
            </div>
            <LineUkm />
            <div className="mt-5 flex flex-row justify-between gap-7">
                <div className="w-full overflow-hidden rounded-lg lg:w-[241px]">
                    <LazyLoadImage
                        src={news}
                        className="w-full"
                        effect="blur"
                        alt="news.png"
                        placeholderSrc={news}
                        width={"100%"}
                    />
                </div>
                <div className="w-full overflow-hidden rounded-lg lg:w-[241px]">
                    <LazyLoadImage
                        src={news}
                        className="w-full"
                        effect="blur"
                        alt="news.png"
                        placeholderSrc={news}
                        width={"100%"}
                    />
                </div>
            </div>
        </>
    );
};

export default HighlightImage;
