import React from "react";
import AllListImage from "../../../components/gallery/images/AllListImage";
import Jumbotron from "../../../components/jumbotron/Jumbotron";
import SearchBar from "../../../components/search-bar/SearchBar";

const GaleriFotoUkm = () => {
    return (
        <>
            <section className="pb-5 pt-12">
                <div className="container">
                    <Jumbotron>
                        <h2 className="mb-6 font-bold lg:text-3xl">
                            Dokumentasi Kami
                        </h2>
                        <div className="max-w-sm">
                            <p className="mb-10 text-base font-normal leading-relaxed text-desc">
                                Anda bisa melihat kegiatan yang kami lakukan
                                melalui dokumentasi ini
                            </p>
                        </div>
                        <SearchBar />
                    </Jumbotron>
                </div>
            </section>

            <section className="pb-32 pt-0">
                <div className="container">
                    <div className="mx-auto">
                        <div className="w-full px-4">
                            <AllListImage />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GaleriFotoUkm;
