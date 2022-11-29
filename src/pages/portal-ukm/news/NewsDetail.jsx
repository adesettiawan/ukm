import React from "react";
import detail from "../../../assets/pictures/detail.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import HighlightPengumuman from "../../../components/pengumuman/HighlightPengumuman";
import Populer from "../../../components/news/Populer";
import HighlightAgenda from "../../../components/agenda/HighlightAgenda";
import LineUkm from "../../../components/lines/LineUkm";
import fb from "../../../assets/icons/fb.png";
import wa from "../../../assets/icons/wa.png";
import links from "../../../assets/icons/links.png";
import twitter from "../../../assets/icons/twitter.png";
import RelatedNews from "../../../components/news/RelatedNews";

const NewsDetail = () => {
    return (
        <>
            <section className="pb-5 pt-12">
                <div className="container">
                    <div className="w-full">
                        <LazyLoadImage
                            src={detail}
                            className="w-full lg:h-[488px]"
                            effect="blur"
                            alt="detail.png"
                            placeholderSrc={detail}
                            width={"100%"}
                        />
                    </div>
                </div>
            </section>

            <section className="pb-32 pt-5">
                <div className="container">
                    <div className="mx-auto flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-[739px]">
                            <h5 className="mb-7 text-[28px] font-bold leading-snug text-dark">
                                Aliansi Lampung Memanggil Gelar Aksi Demo Tolak
                                Kenaikan Harga BBM
                            </h5>
                            <ul className="mb-5 flex items-center justify-between text-base font-semibold text-desc lg:w-[270px]">
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
                            </ul>
                            <p className="mb-20 text-justify text-[15px] leading-relaxed text-desc">
                                Kamis, 15 September 2022 Aliansi Lampung
                                Memanggil menggelar aksi demo tolak kenaikan
                                harga Bahan Bakar Minyak (BBM) di depan Gedung
                                Dewan Perwakilan Rakyat Daerah (DPRD) Provinsi
                                Lampung. Aksi demo ini diikuti oleh semua
                                mahasiswa di Lampung, terutama dari Universitas
                                Lampung (Unila), Politeknik Negeri Lampung
                                (Polinela), Institusi Teknologi Sumatera
                                (Itera), Politeknik Negeri Kesehatan Tanjung
                                Karang, SMI, UKP, dan para pelajar. Sebelum
                                sampai di depan Gedung DPRD Lampung, massa aksi
                                mulai pawai dari pukul 09.00 WIB dan tiba di
                                depan Gedung DPRD Lampung pada pukul 11.51 WIB.
                                Sesampainya di depan Gedung DPRD, massa aksi
                                disambut dengan kawat berduri yang dikelilingi
                                di area Gedung DPRD Lampung. Adapun tuntutan
                                yang disampaikan oleh demonstran, yaitu: Tolak
                                kenaikan harga BBM Cabut UU No. 11 Tahun 2020
                                Tolak RKUHP Berikan jaminan sosial bagi rakyat
                                Transparasikan RUU Sisdiknas dan libatkan
                                seluruh elemen terdampak dan pembahasan Hentikan
                                tindakan represifitas aparat kepolisian kepada
                                gerakan rakyat Pada aksi demo ini, Hubungan
                                Masyarakat (Humas) dari pihak demonstran, Adil
                                Dharma Wibowo berharap agar pemerintah dapat
                                merealisasikan tuntutan yang mereka sampaikan.
                            </p>
                            <div className="mt-3 border-b border-desc opacity-20"></div>
                            <div className="mb-20 mt-7 w-full self-center px-4 lg:px-0">
                                <div className="flex items-start justify-start">
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="mr-3 flex h-11 w-11 items-center justify-center rounded-full"
                                    >
                                        <LazyLoadImage
                                            src={wa}
                                            className="w-full"
                                            effect="blur"
                                            alt="wa.png"
                                            placeholderSrc={wa}
                                            width={"100%"}
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="mr-3 flex h-11 w-11 items-center justify-center rounded-full"
                                    >
                                        <LazyLoadImage
                                            src={fb}
                                            className="w-full"
                                            effect="blur"
                                            alt="fb.png"
                                            placeholderSrc={fb}
                                            width={"100%"}
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="mr-3 flex h-11 w-11 items-center justify-center rounded-full"
                                    >
                                        <LazyLoadImage
                                            src={twitter}
                                            className="w-full"
                                            effect="blur"
                                            alt="twitter.png"
                                            placeholderSrc={twitter}
                                            width={"100%"}
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="mr-3 flex h-11 w-11 items-center justify-center rounded-full"
                                    >
                                        <LazyLoadImage
                                            src={links}
                                            className="w-full"
                                            effect="blur"
                                            alt="links.png"
                                            placeholderSrc={links}
                                            width={"100%"}
                                        />
                                    </a>
                                </div>
                            </div>
                            <RelatedNews />
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

export default NewsDetail;
