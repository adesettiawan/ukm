import React from "react";

const Pagination = () => {
    return (
        <div className="mb-20 mt-10 flex flex-col items-center">
            <div className="flex text-desc">
                <div className="mr-1 flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg bg-slate-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </div>
                <div className="flex h-11 rounded-lg bg-white font-medium">
                    <div className="hidden w-11 cursor-pointer items-center justify-center  rounded-lg text-sm leading-5 transition duration-150 ease-in md:flex">
                        1
                    </div>
                    <div className="hidden w-11 cursor-pointer items-center justify-center  rounded-lg bg-primary leading-5 text-white transition duration-150 ease-in md:flex ">
                        2
                    </div>
                    <div className="hidden w-11 cursor-pointer items-center justify-center  rounded-lg text-sm leading-5 transition duration-150 ease-in md:flex">
                        3
                    </div>
                    <div className="hidden w-11 cursor-pointer items-center justify-center  rounded-lg text-sm leading-5 transition duration-150 ease-in md:flex">
                        ...
                    </div>
                    <div className="hidden w-11 cursor-pointer items-center justify-center  rounded-lg text-sm leading-5 transition duration-150 ease-in md:flex">
                        25
                    </div>
                </div>
                <div className="ml-1 flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg bg-slate-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
