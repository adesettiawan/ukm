import React from "react";

const Pagination = () => {
    return (
        <div className="mb-20 mt-5 flex flex-col items-center">
            <div className="flex text-desc">
                <div className="mr-1 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-200">
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
                <div className="flex h-12 rounded-full bg-white font-medium">
                    <div className="hidden w-12 cursor-pointer items-center justify-center  rounded-full text-sm leading-5 transition duration-150 ease-in md:flex">
                        1
                    </div>
                    <div className="hidden w-12 cursor-pointer items-center justify-center  rounded-full bg-primary leading-5 text-white transition duration-150 ease-in md:flex ">
                        2
                    </div>
                    <div className="hidden w-12 cursor-pointer items-center justify-center  rounded-full text-sm leading-5 transition duration-150 ease-in md:flex">
                        3
                    </div>
                    <div className="hidden w-12 cursor-pointer items-center justify-center  rounded-full text-sm leading-5 transition duration-150 ease-in md:flex">
                        ...
                    </div>
                    <div className="hidden w-12 cursor-pointer items-center justify-center  rounded-full text-sm leading-5 transition duration-150 ease-in md:flex">
                        13
                    </div>
                    <div className="hidden w-12 cursor-pointer items-center justify-center  rounded-full text-sm leading-5 transition duration-150 ease-in md:flex">
                        14
                    </div>
                    <div className="hidden w-12 cursor-pointer items-center justify-center  rounded-full text-sm leading-5 transition duration-150 ease-in md:flex">
                        15
                    </div>
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary leading-5 text-white transition duration-150 ease-in md:hidden">
                        2
                    </div>
                </div>
                <div className="ml-1 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-200">
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
