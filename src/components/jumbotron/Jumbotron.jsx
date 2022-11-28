import React from "react";

const Jumbotron = ({ children }) => {
    return (
        <div className="w-full">
            <div className="mb-10 overflow-hidden rounded-3xl border bg-white px-16 py-20 shadow-sm">
                {children}
            </div>
        </div>
    );
};

export default Jumbotron;
