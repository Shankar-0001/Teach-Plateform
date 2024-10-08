import React from "react";

export function VideoBanne() {
    return (
        <div className="w-full h-screen mt-6">
            <div
                className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center p-5"
                style={{
                    backgroundImage: `linear-gradient(275.86deg, rgba(80, 30, 146, 0.7) -0.84%, rgba(17, 134, 155, 0.7) 100%), url('../../public/images/man-banner.svg')`,
                }}
            >
                <div className="w-full max-w-4xl ">
                    <div className="relative mb-10 text-center text-white text-5xl font-semibold font-['DM Sans']">Revolutionize Learning With RanKplus
                    </div>
                    
                </div>
                <div className=" bg-white space-x-10 shadow-lg flex flex-col justify-between md:flex-row rounded-lg max-w-[75rem] h-96 overflow-hidden">
                    <div className="flex-1 w-96 h-96 flex items-center justify-center p-5 md:max-w-3xl">
                        <img
                            src="../../public/images/video-img.png"
                            alt="video-img"
                            className=" h-auto rounded-lg object-cover"
                        />
                    </div>
                    <div className="flex-1 p-5 flex items-center justify-center text-left">
                        <div className="text-gray-800 space-y-4">
                            <p className="text-sm md:text-base">
                                We provide premium education to all by offering a variety of
                                learning options like theory video lectures, their PDF notes,
                                practical video lectures, live MCQ’s classes, MCQ’s PDF, MCQ’s
                                practice sets, online test series, and many more.
                            </p>
                            <p className="text-sm md:text-base">
                                We offer enthusiastic educational content for BMLT, DMLT,
                                Bvoc.MLT, and various Lab competition exams such as AIIMS,
                                SGPGI, PGI Chandigarh, Group-5, DSSSB, BSF, RSSMB, DHA, UP NHM,
                                MP NHM, and other state lab exams.
                            </p>
                            <button
                                className="text-white px-4 py-2 mt-4 rounded-full flex items-center justify-center"
                                style={{
                                    borderRadius: "50px",
                                    background:
                                        "linear-gradient(276deg, #6F3199 -0.84%, #1ECBDB 100%)",
                                }}
                            >
                                Download <i className="bi bi-download ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

