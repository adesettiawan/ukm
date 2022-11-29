import React from "react";
import NavigationCategory from "../../components/header/NavigationCategory";
import AllNews from "../../components/news/AllNews";
import Highlight from "../../components/news/Highlight";
import Populer from "../../components/news/Populer";

const BerandaUkm = () => {
    return (
        <>
            <section className="pb-12 pt-12">
                <div className="container">
                    <div className="flex flex-wrap">
                        <Highlight />
                        <Populer />
                    </div>
                </div>
            </section>
            <NavigationCategory />
            <AllNews />
        </>
    );
};

export default BerandaUkm;
