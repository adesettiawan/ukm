import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import polinela from "../../assets/logo/polinela.png";

const Header = () => {
    return (
        <header className="top-0 left-0 z-10 flex w-full items-center bg-white py-6">
            <div className="container">
                <div className="flex flex-row justify-between">
                    <div className="left-0 mt-2 w-full lg:w-80">
                        <LazyLoadImage
                            src={polinela}
                            className="w-full"
                            effect="blur"
                            alt="polinela.png"
                            placeholderSrc={polinela}
                            width={"150px"}
                        />
                    </div>
                    <div className="w-full lg:max-w-xs">
                        <ul className="flex items-center justify-between py-4">
                            <li className="cursor-pointer text-base font-bold text-dark hover:text-secondary">
                                <a href="/">Beranda</a>
                            </li>
                            <li className="cursor-pointer text-base font-normal text-dark hover:text-secondary">
                                <a href="/profile-polinela">Tentang Kami</a>
                            </li>
                            <li className="cursor-pointer text-base font-normal text-dark hover:text-secondary">
                                <a href="/ukm-polinela">UKM</a>
                            </li>
                            <li className="cursor-pointer text-base font-normal text-dark hover:text-secondary">
                                <a href="/profile-ukm">Profil UKM</a>
                            </li>
                        </ul>
                    </div>
                    <div className="relative items-center lg:w-80">
                        <button className="absolute right-0 rounded-full bg-primary py-3 px-6 text-base font-normal text-white transition duration-200 ease-in-out hover:opacity-90">
                            Kontak Kami
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
