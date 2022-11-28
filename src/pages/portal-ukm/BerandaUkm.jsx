import React from "react";
import Highlight from "../../components/news/Highlight";
import Populer from "../../components/news/Populer";

const BerandaUkm = () => {
    return (
        <section className="pb-32 pt-12">
            <div className="container">
                <div className="flex flex-wrap">
                    <Highlight />

                    <Populer />
                </div>
            </div>
        </section>
    );
};

export default BerandaUkm;
