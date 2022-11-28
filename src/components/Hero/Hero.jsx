import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import rectangle from "../../assets/pictures/rectangle.png";
import direktur from "../../assets/pictures/direktur.png";
import SearchBar from "../search-bar/SearchBar";

const Hero = () => {
    return (
        <section className="pt-48 pb-36">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center lg:w-1/2 lg:px-14">
                        <h1 className="mb-8 text-[48px] font-bold leading-tight tracking-wider text-dark">
                            Portal Unit Kegiatan Mahasiswa
                        </h1>
                        <p className="mb-12 text-[18px] font-normal tracking-wider text-desc lg:max-w-md">
                            Cari tahu lebih lanjut tentang UKM yang ada di
                            Politeknik Negeri Lampung.
                        </p>
                        <SearchBar />
                    </div>

                    <div className="w-full self-end lg:w-1/2 lg:pl-14">
                        <div className="relative">
                            <div className="absolute z-10 -mt-72 lg:ml-28">
                                <h5 className="max-w-md text-base font-semibold text-white">
                                    Dr. Ir. Sarono, M.Si.
                                </h5>
                                <p className="text-sm font-extralight text-white opacity-70">
                                    Direktur Polinela
                                </p>
                            </div>

                            <div className="absolute -bottom-24 z-10 mt-10 overflow-hidden">
                                <LazyLoadImage
                                    src={direktur}
                                    className="w-full lg:ml-32"
                                    effect="blur"
                                    alt="direktur.png"
                                    placeholderSrc={direktur}
                                    width={"90%"}
                                />
                            </div>

                            <div className="absolute -bottom-24 -z-10">
                                <LazyLoadImage
                                    src={rectangle}
                                    className="w-full lg:ml-20"
                                    effect="blur"
                                    alt="rectangle.png"
                                    placeholderSrc={rectangle}
                                    width={"300px"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
