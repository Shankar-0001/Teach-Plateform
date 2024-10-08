import './styles/section12.css';

export function Section12() {


    return (
        <div>
            <div className='micro-banner'>
                <div className="max-w-full mx-4 sm:mx-6 md:mx-8 lg:mx-16 p-6">
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* <!-- Left Column --> */}
                        <div className="flex flex-col lg:w-2/3">

                            {/* <!-- Rating --> */}
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-400">
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </span>
                                <span className="ml-2 text-gray-800 text-sm sm:text-base">5.0 (300)</span>
                            </div>

                            {/* <!-- Title and Description --> */}
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Microbiology Batch</h1>
                            <p className="text-gray-600 mb-6 text-sm sm:text-base">
                                Vestibulum rhoncus magna sollicitudin aliquet luctus tiam vitae consectetur
                            </p>

                            {/* <!-- Course Details --> */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 md:mb-20">
                                <div>
                                    <h3 className="font-semibold text-gray-700 bi-calendar3"> Start Date:</h3>
                                    <p className="text-sm sm:text-base">30 Jan, 2023</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-700 bi-calendar3"> End Date:</h3>
                                    <p className="text-sm sm:text-base">25 May, 2024</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-700 bi-calendar2-date"> Validity:</h3>
                                    <p className="text-sm sm:text-base">12 Month</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-700 bi-clock"> Total Hours:</h3>
                                    <p className="text-sm sm:text-base">420 Hours</p>
                                </div>
                            </div>

                            {/* <!-- Syllabus --> */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-700 mb-2 bi-book"> Syllabus:</h3>
                                <div className="flex items-center">
                                    <p className="text-gray-600 text-sm sm:text-base">Evolution, Hematology, Biochemistry</p>
                                    <span className="ml-2 text-white text-center w-6 cursor-pointer rounded-full bg-purple-900 bi-download"></span>
                                </div>
                            </div>

                            {/* <!-- Tabs --> */}
                            <div className="border-b border-gray-200 mb-6">
                                <nav className="-mb-px flex space-x-4 sm:space-x-8 overflow-x-auto">
                                    <a href="#" className="border-b-2 border-cyan-500 text-cyan-600 whitespace-nowrap py-4 px-1 font-medium text-sm">Description</a>
                                    <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm">Live Class</a>
                                    <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm">Classroom</a>
                                    <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm">DPP</a>
                                    <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm">Test Series</a>
                                    <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm">Announcement</a>
                                </nav>
                            </div>

                            {/* <!-- Description --> */}
                            <div className="mt-6">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Description</h2>
                                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus consequat neque a sagitti...
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm sm:text-base">
                                    <li>Duis luctus consequat neque a sagitti...</li>
                                    <li>Maecenas consequat nisi dictum venenatis...</li>
                                    <li>Donec ultricies vestibulum lacinia ullam hendrerit...</li>
                                    <li>Maecenas scelerisque, nisi a elementum...</li>
                                </ul>
                                <p className="text-gray-600 mt-4 text-sm sm:text-base">
                                    Donec ultricies vestibulum lacinia. Nullam hendrerit nisl turpis...
                                </p>
                            </div>

                            <div className='container mx-auto mt-10'>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Classroom</h2>
                                <div className="section12">



                                    <div className="w-196 h-14 bg-slate-50 rounded-tl-2xl rounded-tr-2xl border border-slate-200 flex flex-row justify-start aligns-center items-center ">
                                        <div className="m-2 basis-1/4 text-indigo-950 text-xl font-bold font-['DM Sans']">Subjects</div>
                                        <div className=' basis-1/2 '>
                                            <span className=" text-cyan-500  text-xl font-bold font-['DM Sans'] m-2">Lecture</span>
                                            <span className="text-indigo-950 text-xl font-bold font-['DM Sans'] m-2">Notes</span>
                                        </div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <div className="w-72 h-96 bg-white  rounded-bl-2xl border border-slate-200 scrollable-content" >
                                            <div className=''>
                                                <div className="w-74 h-16 flex justify-around items-center  ">
                                                    <div className='w-6 h-6  bi bi-book'></div>
                                                    <div className=" text-lg font-semibold font-['DM Sans'] text-gay-800">Demo Lectures</div>
                                                    <div className='h-5 w-5 relative bi bi-chevron-right'></div>
                                                </div>
                                                <div className="w-74 h-16 flex justify-around items-center  ">
                                                    <div className='w-6 h-6  bi bi-book'></div>
                                                    <div className=" text-lg font-semibold font-['DM Sans'] text-gay-800">Today's Lectures</div>
                                                    <div className='h-5 w-5 relative bi bi-chevron-right'></div>
                                                </div>

                                                <div className="w-74 h-16 opacity-10 bg-cyan-500 flex justify-around items-center">
                                                    <i className='w-6 h-6  bi bi-book'></i>
                                                    <span className=" text-lg font-semibold font-['DM Sans'] text-gay-800">Bacteriology</span>
                                                    <i className='h-5 w-5 relative bi bi-chevron-right'></i>
                                                </div>

                                                <div className="w-74 h-16 flex justify-around items-center  ">
                                                    <div className='w-6 h-6  bi bi-book'></div>
                                                    <div className=" text-lg font-semibold font-['DM Sans'] text-gay-800">Parasitology</div>
                                                    <div className='h-5 w-5 relative bi bi-chevron-right'></div>
                                                </div>
                                                <div className="w-74 h-16 flex justify-around items-center  ">
                                                    <div className='w-6 h-6  bi bi-book'></div>
                                                    <div className=" text-lg font-semibold font-['DM Sans'] text-gay-800">Mycology</div>
                                                    <div className='h-5 w-5 relative bi bi-chevron-right'></div>
                                                </div>
                                                <div className="w-74 h-16 flex justify-around items-center  ">
                                                    <div className='w-6 h-6  bi bi-book'></div>
                                                    <div className=" text-lg font-semibold font-['DM Sans'] text-gay-800">Virology</div>
                                                    <div className='h-5 w-5 relative bi bi-chevron-right'></div>
                                                </div>
                                                <div className="w-74 h-16 flex justify-around items-center  ">
                                                    <div className='w-6 h-6  bi bi-book'></div>
                                                    <div className=" text-lg font-semibold font-['DM Sans'] text-gay-800">Immunology</div>
                                                    <div className='h-5 w-5 relative bi bi-chevron-right'></div>
                                                </div>
                                                <div className="w-74 h-16 flex justify-around items-center  ">
                                                    <div className='w-6 h-6  bi bi-book'></div>
                                                    <div className=" text-lg font-semibold font-['DM Sans'] text-gay-800">Immunology</div>
                                                    <div className='h-5 w-5 relative bi bi-chevron-right'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full scrollable-content h-96 bg-white  rounded-bl-2xl border border-slate-200'>
                                            <div className="border-2 flex flex-col md:flex-row md:items-center bg-slate-50 m-2 rounded-lg " >
                                                <div className="Video w-32 h-20 rounded-lg shadow bg-white flex justify-center items-center ml-4  mr-4 mb-4 md:mb-0">
                                                    <i className="bi bi-tv text-4xl w-12 h-12"></i>
                                                </div>


                                                <div className="flex-1 md:mr-4">
                                                    <div className='flex justify-between'>
                                                        <div className="h-5 border justify-start items-center gap-1 inline-flex">
                                                            <div className=" relative bi bi-star-fill text-yellow-500" />
                                                            <div className=" relative bi bi-star-fill text-yellow-500 items-center" />
                                                            <div className=" relative bi bi-star-fill text-yellow-500 items-center" />
                                                            <div className=" relative bi bi-star-fill text-yellow-500 items-center" />
                                                            <div className=" relative bi bi-star-fill text-yellow-500 items-center" />
                                                            <div className="text-zinc-700 text-base font-normal font-['DM Sans']">(15)</div>
                                                        </div>
                                                        <div className="text-gray-800 text-base font-medium font-['DM Sans']">
                                                            <i className='bi bi-book mr-1'></i>30 Jan, 2023
                                                        </div>
                                                        <div className="text-gray-800 text-base font-medium font-['DM Sans']">
                                                            <i className='bi bi-clock'></i> 35:15
                                                        </div>
                                                    </div>
                                                    <div className="text-slate-900 text-xl font-semibold font-['DM Sans']">
                                                        Etiam vitae metus congue elementum
                                                    </div>
                                                    <div className="w-96 text-zinc-700 text-base font-normal font-['DM Sans'] mt-2">
                                                        Vestibulum fermentum efficitur aliquet sienean
                                                    </div>
                                                </div>
                                                <div className='border-l-2 border-gray-150 p-4'>
                                                    <div className="w-9 h-9 bg-cyan-500 rounded-full border flex justify-center items-center m-1" >
                                                        <div className="w-5 h-5 relative text-white text-center mb-1" >
                                                            <i className='bi bi-lock'></i>
                                                        </div>
                                                    </div>
                                                    <div className="w-9 h-9 bg-purple-900 rounded-full flex justify-center items-center m-1" >
                                                        <div className="w-5 h-5 relative text-center mb-1 " >
                                                            <i className='bi bi-eye text-white'></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" border-2 flex flex-col md:flex-row md:items-center bg-slate-50 m-2 rounded-lg " >
                                                <div className="Video w-32 h-20 rounded-lg shadow bg-white flex justify-center items-center ml-4  mr-4 mb-4 md:mb-0">
                                                    <i className="bi bi-tv text-4xl w-12 h-12"></i>
                                                </div>


                                                <div className="flex-1 md:mr-4">
                                                    <div className='flex justify-between'>
                                                        <div className="h-5 border justify-start items-center gap-1 inline-flex">
                                                            <div className=" relative bi bi-star-fill text-yellow-500" />
                                                            <div className=" relative bi bi-star-fill text-yellow-500 items-center" />
                                                            <div className=" relative bi bi-star-fill text-yellow-500 items-center" />
                                                            <div className=" relative bi bi-star-fill text-yellow-500 items-center" />
                                                            <div className=" relative bi bi-star-fill text-yellow-500 items-center" />
                                                            <div className="text-zinc-700 text-base font-normal font-['DM Sans']">(15)</div>
                                                        </div>
                                                        <div className="text-gray-800 text-base font-medium font-['DM Sans']">
                                                            <i className='bi bi-book mr-1'></i>30 Jan, 2023
                                                        </div>
                                                        <div className="text-gray-800 text-base font-medium font-['DM Sans']">
                                                            <i className='bi bi-clock'></i> 35:15
                                                        </div>
                                                    </div>
                                                    <div className="text-slate-900 text-xl font-semibold font-['DM Sans']">
                                                        Etiam vitae metus congue elementum
                                                    </div>
                                                    <div className="w-96 text-zinc-700 text-base font-normal font-['DM Sans'] mt-2">
                                                        Vestibulum fermentum efficitur aliquet sienean
                                                    </div>
                                                </div>
                                                <div className='border-l-2 border-gray-150 p-4'>
                                                    <div className="w-9 h-9 bg-cyan-500 rounded-full border flex justify-center items-center m-1" >
                                                        <div className="w-5 h-5 relative text-white text-center mb-1" >
                                                            <i className='bi bi-lock'></i>
                                                        </div>
                                                    </div>
                                                    <div className="w-9 h-9 bg-purple-900 rounded-full flex justify-center items-center m-1" >
                                                        <div className="w-5 h-5 relative text-center mb-1 " >
                                                            <i className='bi bi-eye text-white'></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-2 flex flex-col md:flex-row md:items-center bg-slate-50 m-2 rounded-lg " >
                                                <div className="Video w-32 h-20 rounded-lg shadow bg-white flex justify-center items-center ml-4  mr-4 mb-4 md:mb-0">
                                                    <i className="bi bi-tv text-4xl w-12 h-12"></i>
                                                </div>


                                                <div className="flex-1 md:mr-4">
                                                    <div className='flex justify-between'>
                                                        <div className="h-5 border justify-start items-center gap-1 inline-flex">
                                                            <div className=" relative bi bi-star-fill text-yellow-500" />
                                                            <div className=" relative bi bi-star-fill text-yellow-500 items-center" />
                                                            <div className=" relative bi bi-star-fill text-yellow-500 items-center" />
                                                            <div className=" relative bi bi-star-fill text-yellow-500 items-center" />
                                                            <div className=" relative bi bi-star-fill text-yellow-500 items-center" />
                                                            <div className="text-zinc-700 text-base font-normal font-['DM Sans']">(15)</div>
                                                        </div>
                                                        <div className="text-gray-800 text-base font-medium font-['DM Sans']">
                                                            <i className='bi bi-book mr-1'></i>30 Jan, 2023
                                                        </div>
                                                        <div className="text-gray-800 text-base font-medium font-['DM Sans']">
                                                            <i className='bi bi-clock'></i> 35:15
                                                        </div>
                                                    </div>
                                                    <div className="text-slate-900 text-xl font-semibold font-['DM Sans']">
                                                        Etiam vitae metus congue elementum
                                                    </div>
                                                    <div className="w-96 text-zinc-700 text-base font-normal font-['DM Sans'] mt-2">
                                                        Vestibulum fermentum efficitur aliquet sienean
                                                    </div>
                                                </div>
                                                <div className='border-l-2 border-gray-150 p-4'>
                                                    <div className="w-9 h-9 bg-cyan-500 rounded-full border flex justify-center items-center m-1" >
                                                        <div className="w-5 h-5 relative text-white text-center mb-1" >
                                                            <i className='bi bi-lock'></i>
                                                        </div>
                                                    </div>
                                                    <div className="w-9 h-9 bg-purple-900 rounded-full flex justify-center items-center m-1" >
                                                        <div className="w-5 h-5 relative text-center mb-1 " >
                                                            <i className='bi bi-eye text-white'></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" border-2 flex flex-col md:flex-row md:items-center bg-slate-50 m-2 rounded-lg " >
                                                <div className="Video w-32 h-20 rounded-lg shadow bg-white flex justify-center items-center ml-4  mr-4 mb-4 md:mb-0">
                                                    <i className="bi bi-tv text-4xl w-12 h-12"></i>
                                                </div>


                                                <div className="flex-1 md:mr-4">
                                                    <div className='flex justify-between'>
                                                        <div className="h-5 border justify-start items-center gap-1 inline-flex">
                                                            <div className=" relative bi bi-star-fill text-yellow-500" />
                                                            <div className=" relative bi bi-star-fill text-yellow-500 items-center" />
                                                            <div className=" relative bi bi-star-fill text-yellow-500 items-center" />
                                                            <div className=" relative bi bi-star-fill text-yellow-500 items-center" />
                                                            <div className=" relative bi bi-star-fill text-yellow-500 items-center" />
                                                            <div className="text-zinc-700 text-base font-normal font-['DM Sans']">(15)</div>
                                                        </div>
                                                        <div className="text-gray-800 text-base font-medium font-['DM Sans']">
                                                            <i className='bi bi-book mr-1'></i>30 Jan, 2023
                                                        </div>
                                                        <div className="text-gray-800 text-base font-medium font-['DM Sans']">
                                                            <i className='bi bi-clock'></i> 35:15
                                                        </div>
                                                    </div>
                                                    <div className="text-slate-900 text-xl font-semibold font-['DM Sans']">
                                                        Etiam vitae metus congue elementum
                                                    </div>
                                                    <div className="w-96 text-zinc-700 text-base font-normal font-['DM Sans'] mt-2">
                                                        Vestibulum fermentum efficitur aliquet sienean
                                                    </div>
                                                </div>
                                                <div className='border-l-2 border-gray-150 p-4'>
                                                    <div className="w-9 h-9 bg-cyan-500 rounded-full border flex justify-center items-center m-1" >
                                                        <div className="w-5 h-5 relative text-white text-center mb-1" >
                                                            <i className='bi bi-lock'></i>
                                                        </div>
                                                    </div>
                                                    <div className="w-9 h-9 bg-purple-900 rounded-full flex justify-center items-center m-1" >
                                                        <div className="w-5 h-5 relative text-center mb-1 " >
                                                            <i className='bi bi-eye text-white'></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* <!-- Right Column --> */}
                        <div className="lg:w-1/3">
                            <div className="bg-white rounded-lg shadow-xl mt-10 lg:mt-20">
                                <img src="./images/class-img.svg" alt="Course Instructor" className="w-full rounded-lg" />
                                <div className="p-4 m-4">
                                    <div className="flex justify-center mb-5">
                                        <div className="flex text-center items-center">
                                            <span className="mt-2">
                                                <p className="w-12 h-12 rounded-full bg-purple-900 text-white text-center text-sm">10% <br />OFF</p>
                                            </span>
                                            <span className="text-xl sm:text-3xl font-bold text-purple-900 m-1">₹2900</span>
                                            <span className="text-sm sm:text-lg text-gray-500 line-through m-1">₹3200</span>
                                        </div>
                                    </div>

                                    <button className="expolre-btn w-full text-white py-3 rounded-3xl hover:bg-teal-700 transition duration-300 mb-2">
                                        Explore Now
                                    </button>

                                    <button className="w-full bg-purple-900 text-white py-3 rounded-3xl hover:bg-purple-500 transition duration-300">
                                        Buy Now
                                    </button>

                                    <div className="mt-4">
                                        <h3 className="font-semibold text-gray-700 mb-2">Apply Coupon</h3>
                                        <button className="rounded text-start border-dotted border-2 border-gray-400 p-2 mb-2 w-full">RANKP10</button>
                                        <div className="flex">
                                            <input type="text" placeholder="Enter Coupon" className="flex-grow border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-cyan-500" />
                                            <button className="bg-cyan-500 text-white px-4 py-2 rounded-r-md hover:bg-cyan-600 transition duration-300">
                                                Apply
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
