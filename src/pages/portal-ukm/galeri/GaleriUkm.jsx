import React from "react";
import HighlightAgenda from "../../../components/agenda/HighlightAgenda";
import ListImage from "../../../components/gallery/images/ListImage";
import ListVideo from "../../../components/gallery/videos/ListVideo";
import Jumbotron from "../../../components/jumbotron/Jumbotron";
import Populer from "../../../components/news/Populer";
import HighlightPengumuman from "../../../components/pengumuman/HighlightPengumuman";
import SearchBar from "../../../components/search-bar/SearchBar";

const GaleriUkm = () => {
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
                    <div className="mx-auto flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-[739px]">
                            <ListImage />
                            <ListVideo />
                        </div>
                        <div className="w-full px-4 lg:w-[509px] lg:pl-10">
                            <HighlightPengumuman />
                            <div className="mt-10">
                                <Populer />
                            </div>
                            <HighlightAgenda />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GaleriUkm;
