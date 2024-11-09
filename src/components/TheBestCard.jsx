import React from 'react';

const TheBestCard = ({ image, title, description }) => {
    return (
        <div className="row-span-1 bg-[#0d162c] border border-gray-700 rounded-lg shadow-2xl shadow-gray-500 drop-shadow-2xl mb-6">
            <img
                className="rounded-t-lg w-full h-[200px] object-cover"
                src={image}
                alt={title}
            />
            <div className="p-6 pb-8">
                <a href="#">
                    <h5 className="mb-3 text-2xl font-semibold tracking-normal text-white">
                        {title}
                    </h5>
                </a>
                <p className="mb-6 font-normal text-gray-300">{description}</p>
                <button
                    type="button"
                    className="flex flex-row gap-x-2 items-center justify-center w-full text-white font-medium border-[1px] border-white rounded-md text-md px-9 py-2.5 text-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5"
                    >
                        <path
                            className="text-white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                    </svg>
                    Buy now
                </button>
            </div>
        </div>
    );
};

export default TheBestCard;
