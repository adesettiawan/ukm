import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import news from "../../assets/images/news.png";

const Highlight = () => {
    return (
        <div className="w-full px-4 lg:w-1/2">
            <LazyLoadImage
                src={news}
                className="relative w-full lg:h-[584px]"
                effect="blur"
                alt="news.png"
                placeholderSrc={news}
                width={"100%"}
            />
            <div className="absolute z-10 -mt-52 w-full px-10 lg:max-w-md">
                <a
                    href="#"
                    className="w-full rounded-full bg-category py-2 px-4 text-center text-sm font-medium text-white transition duration-200 ease-in-out hover:opacity-80 lg:max-w-sm"
                >
                    Kopma
                </a>
                <h5 className="mb-2 mt-5 max-w-md cursor-pointer text-[24px] font-bold leading-snug text-white">
                    Antusias Mahasiswa Baru Mengikuti Diksar Ukm Kopma
                </h5>
                <span className="text-xs text-white">10 September 2022</span>
            </div>
        </div>
    );
};

export default Highlight;
