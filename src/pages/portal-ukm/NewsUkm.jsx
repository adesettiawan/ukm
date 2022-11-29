import React from "react";
import HeaderCategory from "../../components/header/HeaderCategory";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import NewsUkms from "../../components/news/NewsUkms";
import SearchBar from "../../components/search-bar/SearchBar";

const NewsUkm = () => {
    return (
        <>
            <section className="pb-12 pt-12">
                <div className="container">
                    <Jumbotron>
                        <h2 className="mb-6 font-bold lg:text-3xl">
                            Temukan Berita Terkini di Sini
                        </h2>
                        <div className="max-w-sm">
                            <p className="mb-10 text-base font-normal leading-relaxed text-desc">
                                Anda bisa menemukan berita menarik untuk anda
                                baca setiap harinya
                            </p>
                        </div>
                        <SearchBar />
                    </Jumbotron>
                </div>
            </section>
            <div className="-mt-10">
                <HeaderCategory />
            </div>
            <NewsUkms />
        </>
    );
};

export default NewsUkm;
