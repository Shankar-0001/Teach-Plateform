import './styles/section14.css';
import { Link } from 'react-router-dom';

export function Section14() {


    return (
        <div>
            <div className='micro-banner h-[293]'>
                <div className="max-w-full mx-4 sm:mx-6 md:mx-8 lg:mx-16 p-6">
                    <div className="flex flex-col lg:flex-row gap-24">
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
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4  md:mb-2">
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
                                    
                                    < Link to="" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm">Description</Link>

                                    <Link to="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm">Live Class</Link>

                                    < Link to="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm">Classroom</Link>

                                    <Link to="#" className="border-b-2 border-cyan-500 text-cyan-600 whitespace-nowrap py-4 px-1 font-medium text-sm">DPP</Link>

                                    <Link to="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm">Test Series</Link>

                                    <Link to="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm">Announcement</Link>
                                </nav>
                            </div>


                            <div className='container mx-auto mt-1'>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">DPP</h2>
                                <div className="section13">



                                    <div className=" w-196 h-14 bg-slate-50 rounded-xl border border-slate-200 flex flex-row justify-between aligns-center items-center">
                                        <div className="mx-4  text-slate-900 text-md font-semibold font-['DM Sans']">
                                            Sd  purus diam lacinia
                                        </div>
                                        <div className=''>
                                            <span className=" text-slate-900 text-md  font-['DM Sans']">
                                                No. of questions
                                                <br />
                                            </span>
                                            <span className=" text-slate-900 text-md  font-['DM Sans'] ">
                                                30
                                            </span>

                                        </div>
                                        <div className='flex justify-between'>
                                            <div className="  text-sm  font-['DM Sans'] m-2">
                                                <span>Time <br /></span>
                                                <span>30 min</span>
                                            </div>

                                            <div className="  text-sm  font-['DM Sans'] m-2">
                                                <span>Marks <br /></span>
                                                <span>30</span>
                                            </div>

                                        </div>
                                        <div className='flex justify-between border-l-2 mr-2'>
                                            {/* <span className="   text-xl font-bold font-['DM Sans'] m-2">Lecture</span> */}
                                            <div className="w-9 ml-1 h-9 bg-cyan-500 rounded-full flex items-center justify-center mr-1">
                                                <i className='text-2xl text-center bi bi-lock text-white'></i>
                                            </div>
                                            <div className="w-9 h-9 bg-purple-900 rounded-full flex items-center justify-center mr-1">
                                                <i className='text-2xl text-center bi bi-play text-white ml-1'></i>
                                            </div>
                                            <div className="h-9 px-3.5 py-3 bg-white/20 rounded-full border border-purple-800 justify-start items-center gap-1 inline-flex">
                                                <div className="text-purple-800 text-base font-bold font-['DM Sans']">Unlock</div>
                                            </div>
                                            <div className="w-6 h-6  py-2 ml-1">
                                                <i className='bi bi-chevron-down my-1'></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=" w-196 h-14 bg-slate-50 rounded-xl border border-slate-200 flex flex-row justify-between aligns-center items-center my-3">
                                        <div className="mx-4  text-slate-900 text-md font-semibold font-['DM Sans']">
                                            Sd  purus diam lacinia
                                        </div>
                                        <div className=''>
                                            <span className=" text-slate-900 text-md  font-['DM Sans']">
                                                No. of questions
                                                <br />
                                            </span>
                                            <span className=" text-slate-900 text-md  font-['DM Sans'] ">
                                                30
                                            </span>

                                        </div>
                                        <div className='flex justify-between'>
                                            <div className="  text-sm  font-['DM Sans'] m-2">
                                                <span>Time <br /></span>
                                                <span>30 min</span>
                                            </div>

                                            <div className="  text-sm  font-['DM Sans'] m-2">
                                                <span>Marks <br /></span>
                                                <span>30</span>
                                            </div>

                                        </div>

                                        <div className='flex justify-between border-l-2 mr-2'>
                                            {/* <span className="   text-xl font-bold font-['DM Sans'] m-2">Lecture</span> */}
                                            <div className="w-9 ml-1 h-9 bg-cyan-500 rounded-full flex items-center justify-center mr-1">
                                                <i className='text-2xl text-center bi bi-lock text-white'></i>
                                            </div>
                                            <div className="w-9 h-9 bg-purple-900 rounded-full flex items-center justify-center mr-1">
                                                <i className='text-2xl text-center bi bi-play text-white ml-1'></i>
                                            </div>
                                            <div className="h-9 px-3.5 py-3 bg-white/20 rounded-full border border-purple-800 justify-start items-center gap-1 inline-flex">
                                                <div className="text-purple-800 text-base font-bold font-['DM Sans']">Unlock</div>
                                            </div>
                                            <div className="w-6 h-6  py-2 ml-1">
                                                <i className='bi bi-chevron-down my-1'></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* <!-- Right Column --> */}
                        <div className="lg:w-1/4">
                            <div className="bg-white rounded-lg shadow-xl mt-8 ">
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
