import React from "react";
import ListUkm from "./ListUkm";

const Ukm = () => {
    return (
        <section className="pt-10 pb-36">
            <div className="container">
                <div className="mx-auto mb-16 max-w-xl text-center">
                    <h1 className="text-3xl font-bold">
                        Unit Kegiatan Mahasiswa
                    </h1>
                </div>
                <ListUkm />
            </div>
        </section>
    );
};

export default Ukm;
