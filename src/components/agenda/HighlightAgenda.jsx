import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import tesis from "../../assets/images/tesis.png";
import LineUkm from "../../components/lines/LineUkm";

const HighlightAgenda = () => {
    return (
        <>
            <h5 className="mt-10 text-xl font-bold text-primary">Agenda</h5>
            <LineUkm />
            <div className="flex flex-wrap justify-between">
                <div className="mt-5 w-full lg:w-[320px]">
                    <h5 className="mt-1 mb-8 cursor-pointer text-[17px] font-bold text-dark hover:text-secondary">
                        UKM Pers SUKMA Polinela gelar Sukma Fair 2022.
                    </h5>
                </div>
                <div className="mt-5 self-center">
                    <div className="flex h-24 w-24 flex-col items-center justify-center rounded-xl bg-primary opacity-80">
                        <h1 className="text-3xl font-bold text-white">10</h1>
                        <p className="text-[14px] font-normal text-white">
                            Nov
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HighlightAgenda;
