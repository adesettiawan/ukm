import React from "react";
import jumbotron from "../../assets/pictures/jumbotron.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProfilePolinela = () => {
    return (
        <section className="pt-12 pb-12">
            <div className="container">
                <div className="w-full">
                    <LazyLoadImage
                        src={jumbotron}
                        className="w-full"
                        effect="blur"
                        alt="jumbotron.png"
                        placeholderSrc={jumbotron}
                        width={"100%"}
                    />
                </div>

                <div className="mx-auto max-w-xl py-10 text-center">
                    <h1 className="text-3xl font-bold text-primary">
                        Tentang Kami
                    </h1>
                </div>

                <div className="w-full px-10">
                    <p className="mb-8 text-justify text-base font-normal leading-relaxed text-desc">
                        Dalam rangka memenuhi kebutuhan tenaga terampil dan
                        profesional di bidang pertanian, Pemerintah Indonesia
                        membuka sistem pendidikan baru yang berbentuk Politeknik
                        Pertanian. Politeknik Pertanian Negeri di Propinsi
                        Lampung ini resmi terbentuk dengan diterbitkannya SK.
                        Dirjen Dikti Depdikbud No.14/Dikti/Kep/1984, tanggal 7
                        April 1984 tentang Pembentukan Politeknik Pertanian
                        Universitas Lampung. Kemudian dalam rangka mempersiapkan
                        pengembangan Politeknik Pertanian, yang meliputi
                        pengembangan fisik kampus, tenaga pengajar, dan
                        pengembangan kurikulum, maka pada tanggal 3 Desember
                        1985, melalui SK. Dirjen Dikti Depdikbud
                        No.79/Dikti/Kep/1985, dibentuk Penanggung Jawab Unit
                        Pelaksana Proyek pada Proyek Pengembangan Pendidikan
                        Politeknik Pertanian Universitas Lampung.
                    </p>
                    <p className="mb-8 text-justify text-base font-normal leading-relaxed text-desc">
                        Pada tanggal 3 Nopember 1988 Politeknik Pertanian
                        Universitas Lampung menempati kampus baru di Jalan
                        Soekarno-Hatta, Rajabasa, Bandar Lampung, dan pada
                        tanggal 15 Desember 1988 Penanggungjawab Pengembangan
                        Politeknik Pertanian Negeri Lampung dilantik oleh Rektor
                        Universitas Lampung. Pada tanggal 7 April 2001,
                        berdasarkan SK. Mendiknas RI No. 036/O/2001 tentang
                        Pendirian Politeknik Pertanian Negeri Bandar Lampung,
                        Politeknik Pertanian Negeri Lampung resmi mandiri
                        menjadi salah satu bentuk Perguruan Tinggi Negeri (PTN)
                        di Propinsi Lampung dengan nama Politeknik Pertanian
                        Negeri Bandar Lampung.
                    </p>
                    <p className="mb-8 text-justify text-base font-normal leading-relaxed text-desc">
                        Berdasarkan rapat Senat Politeknik tanggal 19 Oktober
                        2002 telah ditetapkan perubahan nama Politeknik menjadi
                        Politeknik Negeri Lampung. Pertimbangan perubahan nama
                        tersebut merupakan rencana pengembangan Politeknik di
                        masa mendatang agar memperluas bidang studi yang dapat
                        dilaksanakan dan dibutuhkan masyarakat, misalnya bidang
                        studi ekonomi secara umum, keteknikan, manajemen dan
                        sebagainya.
                    </p>
                </div>

                <div className="w-full px-8 pt-10 pb-10">
                    <div className="flex flex-wrap justify-between">
                        <div className="mb-10 w-full px-4 lg:w-1/2">
                            <h4 className="mb-5 text-2xl font-bold text-primary">
                                Visi
                            </h4>
                            <p className="mb-10 max-w-xl text-justify text-base font-normal text-desc">
                                Menjadi politeknik yang bermutu, inovatif, dan
                                unggul dalam ilmu pengetahuan dan teknologi
                                terapan.
                            </p>

                            <h4 className="mb-5 text-2xl font-bold text-primary">
                                Misi
                            </h4>
                            <ol className="ml-4 list-decimal text-justify text-base font-normal leading-relaxed text-desc">
                                <li>
                                    Menyelenggarakan pendidikan tinggi vokasi
                                    yang berorientasi pada akhlak mulia,
                                    terampil, disiplin, mandiri, dan kompetitif;
                                </li>
                                <li>
                                    Melaksanakan kajian keilmuan dan penelitian
                                    terapan untuk menopang pendidikan dan
                                    pengajaran;
                                </li>
                                <li>
                                    Melaksanakan pengabdian kepada masyarakat
                                    melalui transfer ilmu pengetahuan dan
                                    teknologi terapan;
                                </li>
                                <li>
                                    Menguatkan budaya akademik, organisasi, dan
                                    kerja yang berkarakter dan beretika;
                                </li>
                                <li>
                                    Menjalin kerjasama secara berkelanjutan
                                    dengan pihak lain.
                                </li>
                            </ol>
                        </div>

                        <div className="mb-10 w-full px-4 lg:w-1/2 lg:pl-14">
                            <h4 className="mb-5 text-2xl font-bold text-primary">
                                Tujuan
                            </h4>
                            <ol className="ml-4 list-decimal text-justify text-base font-normal leading-relaxed text-desc">
                                <li>
                                    Menghasilkan lulusan yang berakhlak mulia,
                                    terampil, disiplin, mandiri, dan memiliki
                                    keahlian di bidang iptek terapan;
                                </li>
                                <li>
                                    Mengembangkan pengetahuan terapan bidang
                                    teknologi terapan yang memajukan penerapan
                                    teknologi di industri dan masyarakat;
                                </li>
                                <li>
                                    Meningkatkan budaya akademik, organisasi,
                                    dan kerja yang sehat dan dinamis sebagai
                                    basis kerja sama dengan pemangku kepentingan
                                    guna mengembangkan penerapan teknologi dan
                                    memajukan kemandirian masyarakat;
                                </li>
                                <li>
                                    Menerapkan manajemen perguruan tinggi modern
                                    dalam pengelolaan pendidikan, penelitian,
                                    dan pengabdian kepada masyarakat;
                                </li>
                                <li>
                                    Mewujudkan kepakaran bidang teknologi dan
                                    bisnis yang bermanfaat dan diakui secara
                                    nasional dan internasional.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfilePolinela;
