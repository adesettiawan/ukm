import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import news from "../../assets/images/news.png";
import populer from "../../assets/images/populer.png";
import tesis from "../../assets/images/tesis.png";
import wisuda from "../../assets/images/wisuda.png";
import LineUkm from "../../components/lines/LineUkm";

const BerandaUkm = () => {
    return (
        <section className="pb-32 pt-12">
            <div className="container">
                <div className="flex flex-wrap">
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
                                Antusias Mahasiswa Baru Mengikuti Diksar Ukm
                                Kopma
                            </h5>
                            <span className="text-xs text-white">
                                10 September 2022
                            </span>
                        </div>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 lg:pl-10">
                        <h5 className="text-xl font-bold text-primary">
                            Populer
                        </h5>
                        <LineUkm />
                        <div className="flex flex-wrap justify-between">
                            <div className="mt-5 w-full lg:max-w-xs">
                                <span className="cursor-pointer text-base font-semibold text-secondary">
                                    Berita
                                </span>
                                <h5 className="mt-3 mb-8 cursor-pointer text-[18px] font-bold text-dark">
                                    Polinela Raih Predikat Akreditasi Baik
                                    Sekali dari BAN PT
                                </h5>
                                <ul className="flex items-center justify-between text-[14px] text-base font-semibold text-desc">
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
                            <div className="mt-5 self-center">
                                <LazyLoadImage
                                    src={populer}
                                    className="w-full lg:h-[135px] lg:max-w-[135px]"
                                    effect="blur"
                                    alt="populer.png"
                                    placeholderSrc={populer}
                                    width={"100%"}
                                />
                            </div>
                        </div>
                        <LineUkm />
                        <div className="flex flex-wrap justify-between">
                            <div className="mt-5 w-full lg:max-w-xs">
                                <span className="cursor-pointer text-base font-semibold text-secondary">
                                    Berita
                                </span>
                                <h5 className="mt-3 mb-8 cursor-pointer text-[18px] font-bold text-dark">
                                    Perdana! Mahasiswa Magister Terapan
                                    Ketahanan Pangan Laksanakan Ujian Tesis
                                </h5>
                                <ul className="flex items-center justify-between text-[14px] text-base font-semibold text-desc">
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
                            <div className="mt-5 self-center">
                                <LazyLoadImage
                                    src={tesis}
                                    className="w-full lg:h-[135px] lg:max-w-[135px]"
                                    effect="blur"
                                    alt="tesis.png"
                                    placeholderSrc={tesis}
                                    width={"100%"}
                                />
                            </div>
                        </div>
                        <LineUkm />
                        <div className="flex flex-wrap justify-between">
                            <div className="mt-5 w-full lg:max-w-xs">
                                <span className="cursor-pointer text-base font-semibold text-secondary">
                                    Berita
                                </span>
                                <h5 className="mt-3 mb-8 cursor-pointer text-[18px] font-bold text-dark">
                                    324 Mahasiswa Polinela Ikuti Wisuda Periode
                                    Oktober
                                </h5>
                                <ul className="flex items-center justify-between text-[14px] text-base font-semibold text-desc">
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
                            <div className="mt-5">
                                <LazyLoadImage
                                    src={wisuda}
                                    className="w-full lg:h-[135px] lg:max-w-[135px]"
                                    effect="blur"
                                    alt="wisuda.png"
                                    placeholderSrc={wisuda}
                                    width={"100%"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BerandaUkm;
