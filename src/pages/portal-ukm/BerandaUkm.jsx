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
                    <div className="mx-auto flex w-full flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-[739px]">
                            <Highlight />
                        </div>
                        <div className="w-full px-4 lg:w-[509px] lg:pl-10">
                            <Populer />
                        </div>
                    </div>
                </div>
            </section>
            <NavigationCategory />
            <AllNews />
        </>
    );
};

export default BerandaUkm;
