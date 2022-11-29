import React from "react";
import LineUkm from "../lines/LineUkm";
import SearchBar from "../search-bar/SearchBar";

const NavigationCategory = () => {
    return (
        <section className="pb-12">
            <div className="container">
                <div className="px-4">
                    <LineUkm />
                </div>
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full px-4 lg:w-1/2">
                        <ul className="mt-2 flex items-center justify-between py-4 ">
                            <li className="cursor-pointer text-base font-normal text-dark hover:text-secondary">
                                <a href="#">Semua</a>
                            </li>
                            <li className="cursor-pointer text-base font-normal text-dark hover:text-secondary">
                                <a href="#">Kesenian</a>
                            </li>
                            <li className="cursor-pointer text-base font-normal text-dark hover:text-secondary">
                                <a href="#">Acara</a>
                            </li>
                            <li className="cursor-pointer text-base font-normal text-dark hover:text-secondary">
                                <a href="#">Video</a>
                            </li>
                            <li className="cursor-pointer text-base font-normal text-dark hover:text-secondary">
                                <a href="#">Pengumuman</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-2 flex w-full items-center justify-end px-4 lg:w-1/2">
                        <SearchBar />
                    </div>
                </div>
                <div className="px-4">
                    <LineUkm />
                </div>
            </div>
        </section>
    );
};

export default NavigationCategory;
