import React from "react";

export function Statistics() {
    return (
        <div className="max-w-7xl mx-auto bg-white py-12">
            {/* Heading Section */}
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
                    Trusted by Students Worldwide
                </h2>
                <p className="text-gray-500 mt-2">
                    Don&apos;t Just Take Our Word for It. Delve into the Numbers and
                    Witness the Excellence for Yourself!
                </p>
            </div>

            {/* Statistics Cards */}
            <div className=" ml-12 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
                {/* Card 1 */}
                <div className="bg-blue-50 rounded-lg text-center  flex flex-col items-center justify-center
                     w-full h-22 md:w-72 md:h-25 lg:w-[16rem] lg:h-[11rem]">

                    <div className="text-4xl font-bold text-customPurple">22M+</div>
                    <div className="w-full border-t-2 border-gray-300 my-4"></div>
                    <div className="flex items-center">
                        <div className="bg-white rounded-full p-1.5 lg:p-2">
                            <img
                                src="/Student.png"
                                alt="Happy Students"
                                className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8"
                            />
                        </div>
                        <span className="ml-2 text-xs sm:text-sm md:text-md lg:text-md font-semibold">
                            Happy Students
                        </span>
                    </div>
                </div>

                {/* Card 2 */}
                <div
                    className="bg-blue-50 rounded-lg text-center p-6 flex flex-col items-center justify-center
                     w-full h-22 md:w-72 md:h-25 lg:w-[16rem] lg:h-[11rem]"
                >
                    <div className="text-4xl font-bold text-customPurple">54,000+</div>
                    <div className="w-full border-t-2 border-gray-300 my-4"></div>
                    <div className="flex items-center">
                        <div className="bg-white rounded-full p-1.5 lg:p-2">
                            <img
                                src="/Exam.png"
                                alt="Mock Tests"
                                className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8"
                            />
                        </div>
                        <span className="ml-2 text-xs sm:text-sm md:text-md lg:text-md font-semibold">
                            Mock Tests
                        </span>
                    </div>
                </div>

                {/* Card 3 */}
                <div
                    className="bg-blue-50 rounded-lg text-center p-6 flex flex-col items-center justify-center
                     w-full h-22 md:w-72 md:h-25 lg:w-[16rem] lg:h-[11rem]"
                >
                    <div className="text-4xl font-bold text-customPurple">32,000+</div>
                    <div className="w-full border-t-2 border-gray-300 my-4"></div>
                    <div className="flex items-center">
                        <div className="bg-white rounded-full p-1.5 lg:p-2">
                            <img
                                src="/Video.png"
                                alt="Video Lectures"
                                className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8"
                            />
                        </div>
                        <span className="ml-2 text-xs sm:text-sm md:text-md lg:text-md font-semibold">
                            Video Lectures
                        </span>
                    </div>
                </div>

                {/* Card 4 */}
                <div
                    className="bg-blue-50 rounded-lg text-center p-6 flex flex-col items-center justify-center
                     w-full h-22 md:w-72 md:h-25 lg:w-[16rem] lg:h-[11rem]"
                >
                    <div className="text-4xl font-bold text-customPurple">80K+</div>
                    <div className="w-full border-t-2 border-gray-300 my-4"></div>
                    <div className="flex items-center">
                        <div className="bg-white rounded-full p-1.5 lg:p-2">
                            <img
                                src="/Scroll.png"
                                alt="Practice Papers"
                                className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8"
                            />
                        </div>
                        <span className="ml-2 text-xs sm:text-sm md:text-md lg:text-md font-semibold">
                            Practice Papers
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

