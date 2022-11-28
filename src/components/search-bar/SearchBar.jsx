import React from "react";

const SearchBar = () => {
    return (
        <div className="max-w-xs lg:w-[270px]">
            <div className="relative flex items-center justify-end">
                <input
                    type="text"
                    placeholder="Pencarian"
                    className="block w-full rounded-full border-slate-200 bg-slate-50 p-2 px-4 text-sm text-icon shadow-lg ring-1 ring-icon focus:border-secondary focus:outline-none focus:ring-secondary "
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="absolute mr-3 h-5 w-5 cursor-pointer text-icon"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default SearchBar;
