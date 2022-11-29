import React from "react";
import garda from "../../assets/logo/garda.png";
import albana from "../../assets/logo/albana.png";
import sukma from "../../assets/logo/sukma.png";
import ukmbs from "../../assets/logo/ukmbs.png";
import poltapala from "../../assets/logo/poltapala.png";
import ec from "../../assets/logo/ec.png";
import { Link } from "react-router-dom";

const ListUkm = () => {
    return (
        <>
            <div className="flex flex-wrap lg:px-10">
                <div className="w-full px-8 lg:w-1/2">
                    <div className="mb-10 overflow-hidden rounded-lg bg-white px-6 shadow-lg">
                        <div className="flex items-center justify-around">
                            <div className="my-6 py-4 px-4 lg:max-w-[280px]">
                                <h3>
                                    <Link
                                        to={`/beranda-ukm/1`}
                                        className="mb-3 block truncate text-xl font-semibold text-secondary"
                                    >
                                        Bidang Seni
                                    </Link>
                                </h3>
                                <p className="mb-8 text-left text-[14px] font-normal text-desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quam nunc suspendisse quam
                                    consequat pharetra lectus.
                                </p>
                                <a
                                    href="#"
                                    className="flex text-left text-[14px] font-semibold text-dark  hover:text-secondary"
                                >
                                    Selengkapnya
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
                            <img
                                src={ukmbs}
                                alt="Ukm"
                                className="h-[150px] w-[150px] cursor-pointer transition duration-500 ease-in-out hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full px-8 lg:w-1/2">
                    <div className="mb-10 overflow-hidden rounded-lg bg-white px-6 shadow-lg">
                        <div className="flex items-center justify-around">
                            <div className="my-6 py-4 px-4 lg:max-w-[280px]">
                                <h3>
                                    <Link
                                        to={`/beranda-ukm/2`}
                                        className="mb-3 block truncate text-xl font-semibold text-secondary"
                                    >
                                        Poltapala
                                    </Link>
                                </h3>
                                <p className="mb-8 text-left text-[14px] font-normal text-desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quam nunc suspendisse quam
                                    consequat pharetra lectus.
                                </p>
                                <a
                                    href="#"
                                    className="flex text-left text-[14px] font-semibold text-dark  hover:text-secondary"
                                >
                                    Selengkapnya
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
                            <img
                                src={poltapala}
                                alt="Ukm"
                                className="h-[150px] w-[150px] cursor-pointer transition duration-500 ease-in-out hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full px-8 lg:w-1/2">
                    <div className="mb-10 overflow-hidden rounded-lg bg-white px-6 shadow-lg">
                        <div className="flex items-center justify-around">
                            <div className="my-6 py-4 px-4 lg:max-w-[280px]">
                                <h3>
                                    <a
                                        href="#"
                                        className="mb-3 block truncate text-xl font-semibold text-secondary"
                                    >
                                        Sukma
                                    </a>
                                </h3>
                                <p className="mb-8 text-left text-[14px] font-normal text-desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quam nunc suspendisse quam
                                    consequat pharetra lectus.
                                </p>
                                <a
                                    href="#"
                                    className="flex text-left text-[14px] font-semibold text-dark  hover:text-secondary"
                                >
                                    Selengkapnya
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
                            <img
                                src={sukma}
                                alt="Ukm"
                                className="h-[150px] w-[150px] cursor-pointer transition duration-500 ease-in-out hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full px-8 lg:w-1/2">
                    <div className="mb-10 overflow-hidden rounded-lg bg-white px-6 shadow-lg">
                        <div className="flex items-center justify-around">
                            <div className="my-6 py-4 px-4 lg:max-w-[280px]">
                                <h3>
                                    <a
                                        href="#"
                                        className="mb-3 block truncate text-xl font-semibold text-secondary"
                                    >
                                        English Club
                                    </a>
                                </h3>
                                <p className="mb-8 text-left text-[14px] font-normal text-desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quam nunc suspendisse quam
                                    consequat pharetra lectus.
                                </p>
                                <a
                                    href="#"
                                    className="flex text-left text-[14px] font-semibold text-dark  hover:text-secondary"
                                >
                                    Selengkapnya
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
                            <img
                                src={ec}
                                alt="Ukm"
                                className="h-[150px] w-[150px] cursor-pointer transition duration-500 ease-in-out hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full px-8 lg:w-1/2">
                    <div className="mb-10 overflow-hidden rounded-lg bg-white px-6 shadow-lg">
                        <div className="flex items-center justify-around">
                            <div className="my-6 py-4 px-4 lg:max-w-[280px]">
                                <h3>
                                    <a
                                        href="#"
                                        className="mb-3 block truncate text-xl font-semibold text-secondary"
                                    >
                                        Al Banna
                                    </a>
                                </h3>
                                <p className="mb-8 text-left text-[14px] font-normal text-desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quam nunc suspendisse quam
                                    consequat pharetra lectus.
                                </p>
                                <a
                                    href="#"
                                    className="flex text-left text-[14px] font-semibold text-dark  hover:text-secondary"
                                >
                                    Selengkapnya
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
                            <img
                                src={albana}
                                alt="Ukm"
                                className="h-[150px] w-[150px] cursor-pointer transition duration-500 ease-in-out hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full px-8 lg:w-1/2">
                    <div className="mb-10 overflow-hidden rounded-lg bg-white px-6 shadow-lg">
                        <div className="flex items-center justify-around">
                            <div className="my-6 py-4 px-4 lg:max-w-[280px]">
                                <h3>
                                    <a
                                        href="#"
                                        className="mb-3 block truncate text-xl font-semibold text-secondary"
                                    >
                                        Garda
                                    </a>
                                </h3>
                                <p className="mb-8 text-left text-[14px] font-normal text-desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quam nunc suspendisse quam
                                    consequat pharetra lectus.
                                </p>
                                <a
                                    href="#"
                                    className="flex text-left text-[14px] font-semibold text-dark  hover:text-secondary"
                                >
                                    Selengkapnya
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
                            <img
                                src={garda}
                                alt="Ukm"
                                className="h-[150px] w-[150px] cursor-pointer transition duration-500 ease-in-out hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-6 max-w-[150px] text-center">
                <a
                    href="#"
                    className="flex items-center justify-center rounded-full bg-primary py-3 px-6 pb-4 text-center text-sm font-medium text-white transition duration-200 ease-in-out hover:opacity-80"
                >
                    Muat Lebih
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="mt-0 ml-2 h-4 w-4 font-bold"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                        />
                    </svg>
                </a>
            </div>
        </>
    );
};

export default ListUkm;
