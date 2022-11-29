import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import tesis from "../../assets/images/tesis.png";
import LineUkm from "../../components/lines/LineUkm";

const HighlightPengumuman = () => {
    return (
        <>
            <h5 className="text-xl font-bold text-primary">Pengumuman</h5>
            <LineUkm />
            <div className="flex flex-wrap justify-between">
                <div className="mt-5 w-full lg:w-[320px]">
                    <h5 className="mt-1 mb-8 cursor-pointer text-[17px] font-bold text-dark">
                        Penerimaan Anggota Pers Sukma Baru Tahun 2022
                    </h5>
                    <ul className="text-desclg:w-[270px] text-[13px] font-semibold text-desc lg:w-[270px]">
                        <li className="flex items-center justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="mr-2 h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                />
                            </svg>
                            4 November 2022
                        </li>
                    </ul>
                </div>
                <div className="mt-5 self-center">
                    <LazyLoadImage
                        src={tesis}
                        className="lg:h-[100px] lg:max-w-[100px]"
                        effect="blur"
                        alt="tesis.png"
                        placeholderSrc={tesis}
                        width={"100%"}
                    />
                </div>
            </div>
        </>
    );
};

export default HighlightPengumuman;
