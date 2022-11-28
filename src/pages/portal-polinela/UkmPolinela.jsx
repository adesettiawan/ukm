import React from "react";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import SearchBar from "../../components/search-bar/SearchBar";
import ListUkm from "../../components/ukm/ListUkm";

const UkmPolinela = () => {
    return (
        <section className="pt-12 pb-32">
            <div className="container">
                <Jumbotron>
                    <h2 className="mb-6 font-bold lg:text-3xl">
                        Temukan Unit Kegiatan Mahasiswa
                    </h2>
                    <div className="max-w-sm">
                        <p className="mb-10 text-base font-normal leading-relaxed text-desc">
                            Anda bisa menemukan berita menarik untuk anda baca
                            setiap harinya
                        </p>
                    </div>
                    <SearchBar />
                </Jumbotron>

                <div className="mb-8 max-w-xl text-left lg:pl-[68px]">
                    <h1 className="text-xl font-bold text-primary">
                        Unit Kegiatan Mahasiswa
                    </h1>
                </div>
                <ListUkm />
            </div>
        </section>
    );
};

export default UkmPolinela;
