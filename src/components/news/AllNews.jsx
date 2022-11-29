import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import news from "../../assets/images/news.png";
import HighlightImage from "../gallery/images/HighlightImage";
import HighlightVideo from "../gallery/videos/HighlightVideo";
import Pagination from "../pagination/Pagination";
import HighlightPengumuman from "../pengumuman/HighlightPengumuman";

const AllNews = () => {
    return (
        <section className="pb-12 pt-2">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 lg:w-[739px]">
                        <div className="flex flex-wrap justify-between">
                            <div className="mb-10 w-full overflow-hidden rounded-lg bg-white  shadow-lg lg:w-[340px]">
                                <LazyLoadImage
                                    src={news}
                                    className="w-full"
                                    effect="blur"
                                    alt="news.png"
                                    placeholderSrc={news}
                                    width={"100%"}
                                />
                                <div className="max-w-md px-4 py-6">
                                    <a
                                        href="#"
                                        className="rounded-full bg-category py-1 px-4 text-center text-xs font-semibold text-dark transition duration-200 ease-in-out hover:opacity-80 lg:max-w-sm"
                                    >
                                        BEM
                                    </a>
                                    <h5 className="mb-4 mt-5 cursor-pointer text-[17px] font-bold leading-snug text-dark hover:text-secondary sm:max-w-md">
                                        Tanggap Bencana Lampung Selatan, BEM KBM
                                        Polinela
                                    </h5>
                                    <p className="mb-4 text-[14px] leading-snug text-desc">
                                        Kegiatan ini dilaksanakan mengingat hari
                                        ulang tahun UKMBS yang ke 10 tahun...
                                    </p>
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
                                        <li className="h-4 border-l-2 text-desc">
                                            &nbsp;
                                        </li>
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
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            103 Pembaca
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-10 overflow-hidden rounded-lg bg-white  shadow-lg lg:w-[340px]">
                                <LazyLoadImage
                                    src={news}
                                    className="w-full"
                                    effect="blur"
                                    alt="news.png"
                                    placeholderSrc={news}
                                    width={"100%"}
                                />
                                <div className="max-w-md px-4 py-6">
                                    <a
                                        href="#"
                                        className="rounded-full bg-category py-1 px-4 text-center text-xs font-semibold text-dark transition duration-200 ease-in-out hover:opacity-80 lg:max-w-sm"
                                    >
                                        Formaban
                                    </a>
                                    <h5 className="mb-4 mt-5 cursor-pointer text-[17px] font-bold leading-snug text-dark sm:max-w-md">
                                        Pertama Kali, FORMABAN Polinela
                                        Menggelar Stadium General
                                    </h5>
                                    <p className="mb-4 text-[14px] leading-snug text-desc">
                                        Kegiatan ini dilaksanakan mengingat hari
                                        ulang tahun UKMBS yang ke 10 tahun...
                                    </p>
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
                                        <li className="h-4 border-l-2 text-desc">
                                            &nbsp;
                                        </li>
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
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            103 Pembaca
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-10 w-full overflow-hidden rounded-lg bg-white  shadow-lg lg:w-[340px]">
                                <LazyLoadImage
                                    src={news}
                                    className="w-full"
                                    effect="blur"
                                    alt="news.png"
                                    placeholderSrc={news}
                                    width={"100%"}
                                />
                                <div className="max-w-md px-4 py-6">
                                    <a
                                        href="#"
                                        className="rounded-full bg-category py-1 px-4 text-center text-xs font-semibold text-dark transition duration-200 ease-in-out hover:opacity-80 lg:max-w-sm"
                                    >
                                        Al-Banna
                                    </a>
                                    <h5 className="mb-4 mt-5 cursor-pointer text-[17px] font-bold leading-snug text-dark sm:max-w-md">
                                        Membangun Wanita Tangguh, UKM Al-Banna
                                        Gelar Seminar
                                    </h5>
                                    <p className="mb-4 text-[14px] leading-snug text-desc">
                                        Kegiatan ini dilaksanakan mengingat hari
                                        ulang tahun UKMBS yang ke 10 tahun...
                                    </p>
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
                                        <li className="h-4 border-l-2 text-desc">
                                            &nbsp;
                                        </li>
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
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            103 Pembaca
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-10 w-full overflow-hidden rounded-lg bg-white  shadow-lg lg:w-[340px]">
                                <LazyLoadImage
                                    src={news}
                                    className="w-full"
                                    effect="blur"
                                    alt="news.png"
                                    placeholderSrc={news}
                                    width={"100%"}
                                />
                                <div className="max-w-md px-4 py-6">
                                    <a
                                        href="#"
                                        className="rounded-full bg-category py-1 px-4 text-center text-xs font-semibold text-dark transition duration-200 ease-in-out hover:opacity-80 lg:max-w-sm"
                                    >
                                        Kopma
                                    </a>
                                    <h5 className="mb-4 mt-5 cursor-pointer text-[17px] font-bold leading-snug text-dark sm:max-w-md">
                                        Antusias Mahasiswa Baru Mengikuti Diksar
                                        Ukm Kopma
                                    </h5>
                                    <p className="mb-4 text-[14px] leading-snug text-desc">
                                        Kegiatan ini dilaksanakan mengingat hari
                                        ulang tahun UKMBS yang ke 10 tahun...
                                    </p>
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
                                        <li className="h-4 border-l-2 text-desc">
                                            &nbsp;
                                        </li>
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
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            103 Pembaca
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Pagination />
                    </div>
                    <div className="w-full px-4 lg:w-[509px] lg:pl-10">
                        <HighlightPengumuman />
                        <HighlightImage />
                        <HighlightVideo />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllNews;
