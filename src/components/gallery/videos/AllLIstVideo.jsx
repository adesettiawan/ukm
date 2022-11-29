import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LineUkm from "../../lines/LineUkm";
import news from "../../../assets/images/news.png";
import Pagination from "../../pagination/Pagination";

const AllLIstVideo = () => {
    return (
        <>
            <div className="flex flex-wrap items-center justify-between">
                <h5 className="text-xl font-bold text-primary">Foto</h5>
                <a
                    href="#"
                    className="flex text-left text-[14px] font-semibold text-dark  hover:text-secondary"
                >
                    Lihat Selengkapnya
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="mt-1 ml-1 h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                    </svg>
                </a>
            </div>
            <LineUkm />
            <div className="mx-auto mt-8 flex w-full flex-wrap items-center justify-center gap-7">
                <div className="mb-10 w-full overflow-hidden rounded-lg bg-white shadow-lg lg:w-[385px]">
                    <LazyLoadImage
                        src={news}
                        className="w-full"
                        effect="blur"
                        alt="news.png"
                        placeholderSrc={news}
                        width={"100%"}
                    />
                    <div className="max-w-md px-4 py-6">
                        <h5 className="mb-5 cursor-pointer text-[17px] font-bold leading-snug text-dark hover:text-secondary sm:max-w-md">
                            Tanggap Bencana Lampung Selatan, BEM KBM Polinela
                        </h5>
                        <ul className="flex items-center justify-between text-[13px] text-base font-semibold text-desc lg:w-[270px]">
                            <li className="flex items-center justify-center">
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
                </div>
                <div className="mb-10 w-full overflow-hidden rounded-lg bg-white shadow-lg lg:w-[385px]">
                    <LazyLoadImage
                        src={news}
                        className="w-full"
                        effect="blur"
                        alt="news.png"
                        placeholderSrc={news}
                        width={"100%"}
                    />
                    <div className="max-w-md px-4 py-6">
                        <h5 className="mb-5 cursor-pointer text-[17px] font-bold leading-snug text-dark hover:text-secondary sm:max-w-md">
                            Tanggap Bencana Lampung Selatan, BEM KBM Polinela
                        </h5>
                        <ul className="flex items-center justify-between text-[13px] text-base font-semibold text-desc lg:w-[270px]">
                            <li className="flex items-center justify-center">
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
                </div>
                <div className="mb-10 w-full overflow-hidden rounded-lg bg-white shadow-lg lg:w-[385px]">
                    <LazyLoadImage
                        src={news}
                        className="w-full"
                        effect="blur"
                        alt="news.png"
                        placeholderSrc={news}
                        width={"100%"}
                    />
                    <div className="max-w-md px-4 py-6">
                        <h5 className="mb-5 cursor-pointer text-[17px] font-bold leading-snug text-dark hover:text-secondary sm:max-w-md">
                            Tanggap Bencana Lampung Selatan, BEM KBM Polinela
                        </h5>
                        <ul className="flex items-center justify-between text-[13px] text-base font-semibold text-desc lg:w-[270px]">
                            <li className="flex items-center justify-center">
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
                </div>
                <div className="mb-10 w-full overflow-hidden rounded-lg bg-white shadow-lg lg:w-[385px]">
                    <LazyLoadImage
                        src={news}
                        className="w-full"
                        effect="blur"
                        alt="news.png"
                        placeholderSrc={news}
                        width={"100%"}
                    />
                    <div className="max-w-md px-4 py-6">
                        <h5 className="mb-5 cursor-pointer text-[17px] font-bold leading-snug text-dark hover:text-secondary sm:max-w-md">
                            Tanggap Bencana Lampung Selatan, BEM KBM Polinela
                        </h5>
                        <ul className="flex items-center justify-between text-[13px] text-base font-semibold text-desc lg:w-[270px]">
                            <li className="flex items-center justify-center">
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
                </div>
                <div className="mb-10 w-full overflow-hidden rounded-lg bg-white shadow-lg lg:w-[385px]">
                    <LazyLoadImage
                        src={news}
                        className="w-full"
                        effect="blur"
                        alt="news.png"
                        placeholderSrc={news}
                        width={"100%"}
                    />
                    <div className="max-w-md px-4 py-6">
                        <h5 className="mb-5 cursor-pointer text-[17px] font-bold leading-snug text-dark hover:text-secondary sm:max-w-md">
                            Tanggap Bencana Lampung Selatan, BEM KBM Polinela
                        </h5>
                        <ul className="flex items-center justify-between text-[13px] text-base font-semibold text-desc lg:w-[270px]">
                            <li className="flex items-center justify-center">
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
                </div>
                <div className="mb-10 w-full overflow-hidden rounded-lg bg-white shadow-lg lg:w-[385px]">
                    <LazyLoadImage
                        src={news}
                        className="w-full"
                        effect="blur"
                        alt="news.png"
                        placeholderSrc={news}
                        width={"100%"}
                    />
                    <div className="max-w-md px-4 py-6">
                        <h5 className="mb-5 cursor-pointer text-[17px] font-bold leading-snug text-dark hover:text-secondary sm:max-w-md">
                            Tanggap Bencana Lampung Selatan, BEM KBM Polinela
                        </h5>
                        <ul className="flex items-center justify-between text-[13px] text-base font-semibold text-desc lg:w-[270px]">
                            <li className="flex items-center justify-center">
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
                </div>
            </div>
            <Pagination />
        </>
    );
};

export default AllLIstVideo;
