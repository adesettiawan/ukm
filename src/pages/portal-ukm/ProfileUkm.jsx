import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import rectangle from "../../assets/pictures/rectangle.png";
import ketua from "../../assets/pictures/ketua.png";

const ProfileUkm = () => {
    return (
        <section className="bg-ukm pt-12 pb-36">
            <div className="container">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full self-center lg:w-1/2 lg:max-w-xl">
                        <h1 className="mb-6 text-[32px] font-bold leading-tight tracking-wider text-primary">
                            Tentang Kami
                        </h1>
                        <p className="mb-8 text-justify text-base font-normal leading-snug text-desc lg:w-full">
                            Pers SUKMA (Suara Kreatifitas Mahasiswa) adalah
                            salah satu Unit Kegiatan Mahasiswa (UKM) di
                            Politeknik Negeri Lampung (Polinela) dan merupakan
                            satu-satunya UKM yang bergerak dibidang Jurnalistik.
                            SUKMA memiliki peran yang cukup penting sebagai
                            kontrol sosial secara kritis, analisis, ilmiah dan
                            bersifat membangun serta sebagai sumber informasi
                            bagi civitas akademika Politeknik Negeri Lampung.
                            Pada awal terbentuk, UKM Pers SUKMA bernama Lembaga
                            Pers Mahasiswa Suara Kreatifitas Mahasiswa yang
                            disingkat menjadi LPM SKM. Namun, pada Sidang Umun
                            Mahasiswa (SUM) yang ke-6 pada tanggal 15 September
                            2000, LPM SKM berganti nama menjadi LPM SUKMA. Lalu,
                            Pada 3 Februari 2002 LPM SUKMA resmi berganti nama
                            menjadi UKM Pers SUKMA sampai saat ini.
                        </p>
                        <p className="mb-12 text-justify text-base font-normal leading-snug text-desc lg:w-full">
                            Sebagai Pers Mahasiswa, UKM Pers SUKMA memilik 3
                            produk media yaitu Buletin, Majalah, dan Media
                            Daring. Hingga usianya ke-20, saat ini SUKMA telah
                            menerbitkan 95 Buletin dan 13 Majalah. Anggota SUKMA
                            akan terlatih kemampuan menulis berita atau
                            kemampuan jurnalisnya dengan diadakan kegiatan
                            pelatihan Jurnalistik serta magang di beberapa Media
                            yang ada di Bandar Lampung seperti Radar Lampung,
                            Kompas TV, Harian Momentum, Lampung Newspaper, 3
                            Media dan media lain yang berada di Bandar Lampung.
                            Selain di dalam kampus UKM Pers SUKMA juga tergabung
                            dalam kegiatan eksternal seperti Aliansi Pers
                            Mahasiswa Lampung (APML) dan Aliansi Pers Mahasiswa
                            Politeknik se-Indonesia (APMPI).
                        </p>
                    </div>

                    <div className="mt-80 w-full justify-center self-center lg:mt-72 lg:w-1/2 lg:pl-14">
                        <div className="relative">
                            <div className="absolute z-10 -mt-72 px-4 lg:ml-28">
                                <h5 className="max-w-md text-base font-semibold text-white">
                                    Nama Ketua Umum
                                </h5>
                                <p className="text-sm font-extralight text-white opacity-70">
                                    Ketua Umum
                                </p>
                            </div>

                            <div className="absolute -bottom-[82px] z-10 overflow-hidden lg:-bottom-24 lg:mt-10">
                                <LazyLoadImage
                                    src={ketua}
                                    className="ml-8 w-full lg:ml-32"
                                    effect="blur"
                                    alt="ketua.png"
                                    placeholderSrc={ketua}
                                    width={"90%"}
                                />
                            </div>

                            <div className="-z-1 absolute -bottom-[66px]">
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

                <div className="w-full pt-24 pb-10 lg:pt-5">
                    <h4 className="mb-5 text-2xl font-bold text-primary">
                        Visi
                    </h4>
                    <p className="mb-10 text-justify text-base font-normal text-desc">
                        Sebagai motor, dinamisator, stabilisator, mediator dan
                        inspirator dalam dinamika pers kampus di Indonesia.
                    </p>

                    <h4 className="mb-5 text-2xl font-bold text-primary">
                        Misi
                    </h4>
                    <ol className="ml-4 list-decimal text-justify text-base font-normal leading-relaxed text-desc">
                        <li>
                            Mewujudkan masyarakat kampus yang kreatif, disiplin,
                            komunikatif, bermoral, intelektual, menjunjung
                            supremasi hukum, serta berwawasan luas.
                        </li>
                        <li>
                            Sebagai wadah aktifitas, komunikasi, informasi dan
                            media belajar antara anggota UKM Pers SUKMA dan
                            civitas akademika lainnya.
                        </li>
                        <li>
                            Wadah yang menampung dan menyalurkan aspirasi
                            mahasiswa dan civitas akademika lainnya.
                        </li>
                        <li>
                            Melakukan kontrol sosial secara kritis, analisis,
                            ilmiah dan bersifat membangun serta tidak memihak
                            dalam memberi kontribusi untuk kemajuan Politeknik
                            Negeri Lampung.
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default ProfileUkm;
