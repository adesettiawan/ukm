import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import news from "../../assets/images/news.png";

const Highlight = () => {
    return (
        <div className="w-full px-4 lg:w-[739px]">
            <LazyLoadImage
                src={news}
                className="relative w-full lg:h-[584px]"
                effect="blur"
                alt="news.png"
                placeholderSrc={news}
                width={"100%"}
            />
            <div className="absolute z-10 -mt-52 max-w-md px-10">
                <a
                    href="#"
                    className="rounded-full bg-category py-2 px-4 text-center text-sm font-medium text-white transition duration-200 ease-in-out hover:opacity-80 lg:max-w-sm"
                >
                    Kopma
                </a>
                <h5 className="mb-2 mt-5 cursor-pointer text-[24px] font-bold leading-snug text-white sm:max-w-md">
                    Antusias Mahasiswa Baru Mengikuti Diksar Ukm Kopma
                </h5>
                <span className="text-xs text-white">10 September 2022</span>
            </div>
        </div>
    );
};

export default Highlight;
