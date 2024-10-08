import './styles/section-11.css';
import { Link } from 'react-router-dom';

export function Section11() {


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
                                    <Link to="#" className="border-b-2 border-cyan-500 text-cyan-600 whitespace-nowrap py-4 px-1 font-medium text-sm">Description</Link>
                                    <Link to="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm">Live Class</Link>
                                    <Link to="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm">Classroom</Link>
                                    <Link to="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm">DPP</Link>
                                    <Link to="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm">Test Series</Link>
                                    <Link to="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm">Announcement</Link>
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
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Live Classes</h2>
                                <div className="grid gap-1 ">

                                    <div className=" relative border border-1 rounded-lg shadow-md p-4 mb-4 bg-slate-50">
                                            <i className='absolute h-5 w-5 rounded-full bg-gray-200 top-0 start-0  bi bi-lock mb-2 '></i>
                                        
                                        <div className=" flex flex-col md:flex-row md:items-center ">
                                            {/* <!-- Icon Section --> */}
                                            <div className="Video w-32 h-20 rounded-lg shadow bg-white flex justify-center items-center mr-4 mb-4 md:mb-0">
                                                <i className="bi bi-tv text-4xl w-12 h-12"></i>
                                            </div>

                                            {/* <!-- Description Section --> */}
                                            <div className="flex-1 md:mr-4">
                                                <div className="text-slate-900 text-xl font-semibold font-['DM Sans']">
                                                    Etiam vitae metus congue elementum
                                                </div>
                                                <div className="w-96 text-zinc-700 text-base font-normal font-['DM Sans'] mt-2">
                                                    Vestibulum fermentum efficitur aliquet sienean doloser libero,
                                                </div>
                                            </div>

                                            {/* <!-- Lecture Start and Timer Section --> */}
                                            <div className="flex-1">
                                                <div className="text-slate-900 text-xl font-semibold font-['DM Sans']">
                                                    <span className="bi bi-calendar mr-2 w-5 h-5"></span>
                                                    <span className="text-zinc-500 text-base font-normal font-['DM Sans']">Lecture Start Date and Time:</span>
                                                    <div className="text-zinc-700 text-base font-normal font-['DM Sans'] mt-1">
                                                        <span className="ml-6 text-gray-800 text-base font-medium font-['DM Sans']">30 Jan, 2023 - 05:00 PM</span>
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    <span className="bi bi-clock mr-2 w-5 h-5"></span>
                                                    <span className="text-zinc-500 text-base font-normal font-['DM Sans']">Timer: </span>
                                                    <span className="text-red-600 text-base font-medium font-['DM Sans']">10:15:23</span>
                                                </div>
                                            </div>


                                            <div className="flex justify-end ">
                                                <button className="bg-purple-600 text-white w-5 h-5 flex justify-center items-center rounded-full focus:outline-none hover:bg-purple-700" aria-label="Play lecture">
                                                    <i className="bi bi-play-fill"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 border border-1 rounded-lg shadow-md p-4 mb-4">
                                        {/* <i className='absolute h-5 w-5 rounded-full bg-gray-200 top-0 start-0  bi bi-lock mb-2 '></i> */}

                                        <div className=" flex flex-col md:flex-row md:items-center ">
                                            {/* <!-- Icon Section --> */}
                                            <div className="Video w-32 h-20 rounded-lg shadow bg-white flex justify-center items-center mr-4 mb-4 md:mb-0">
                                                <i className="bi bi-tv text-4xl w-12 h-12"></i>
                                            </div>

                                            {/* <!-- Description Section --> */}
                                            <div className="flex-1 md:mr-4">
                                                <div className="text-slate-900 text-xl font-semibold font-['DM Sans']">
                                                    Etiam vitae metus congue elementum
                                                </div>
                                                <div className="w-96 text-zinc-700 text-base font-normal font-['DM Sans'] mt-2">
                                                    Vestibulum fermentum efficitur aliquet sienean doloser libero,
                                                </div>
                                            </div>

                                            {/* <!-- Lecture Start and Timer Section --> */}
                                            <div className="flex-1">
                                                <div className="text-slate-900 text-xl font-semibold font-['DM Sans']">
                                                    <span className="bi bi-calendar mr-2 w-5 h-5"></span>
                                                    <span className="text-zinc-500 text-base font-normal font-['DM Sans']">Lecture Start Date and Time:</span>
                                                    <div className="text-zinc-700 text-base font-normal font-['DM Sans'] mt-1">
                                                        <span className="ml-6 text-gray-800 text-base font-medium font-['DM Sans']">30 Jan, 2023 - 05:00 PM</span>
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    <span className="bi bi-clock mr-2 w-5 h-5"></span>
                                                    <span className="text-zinc-500 text-base font-normal font-['DM Sans']">Timer: </span>
                                                    <span className="text-red-600 text-base font-medium font-['DM Sans']">10:15:23</span>
                                                </div>
                                            </div>


                                            <div className="flex justify-end ">
                                                <button className="bg-purple-600 text-white w-5 h-5 flex justify-center items-center rounded-full focus:outline-none hover:bg-purple-700" aria-label="Play lecture">
                                                    <i className="bi bi-play-fill"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 border border-1 rounded-lg shadow-md p-4 mb-1">
                                        {/* <i className='absolute h-5 w-5 rounded-full bg-gray-200 top-0 start-0  bi bi-lock mb-2 '></i> */}

                                        <div className=" flex flex-col md:flex-row md:items-center ">
                                            {/* <!-- Icon Section --> */}
                                            <div className="Video w-32 h-20 rounded-lg shadow bg-white flex justify-center items-center mr-4 mb-4 md:mb-0">
                                                <i className="bi bi-tv text-4xl w-12 h-12"></i>
                                            </div>

                                            {/* <!-- Description Section --> */}
                                            <div className="flex-1 md:mr-4">
                                                <div className="text-slate-900 text-xl font-semibold font-['DM Sans']">
                                                    Etiam vitae metus congue elementum
                                                </div>
                                                <div className="w-96 text-zinc-700 text-base font-normal font-['DM Sans'] mt-2">
                                                    Vestibulum fermentum efficitur aliquet sienean doloser libero,
                                                </div>
                                            </div>

                                            {/* <!-- Lecture Start and Timer Section --> */}
                                            <div className="flex-1">
                                                <div className="text-slate-900 text-xl font-semibold font-['DM Sans']">
                                                    <span className="bi bi-calendar mr-2 w-5 h-5"></span>
                                                    <span className="text-zinc-500 text-base font-normal font-['DM Sans']">Lecture Start Date and Time:</span>
                                                    <div className="text-zinc-700 text-base font-normal font-['DM Sans'] mt-1">
                                                        <span className="ml-6 text-gray-800 text-base font-medium font-['DM Sans']">30 Jan, 2023 - 05:00 PM</span>
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    <span className="bi bi-clock mr-2 w-5 h-5"></span>
                                                    <span className="text-zinc-500 text-base font-normal font-['DM Sans']">Timer: </span>
                                                    <span className="text-red-600 text-base font-medium font-['DM Sans']">10:15:23</span>
                                                </div>
                                            </div>


                                            <div className="flex justify-end ">
                                                <button className="bg-purple-600 text-white w-5 h-5 flex justify-center items-center rounded-full focus:outline-none hover:bg-purple-700" aria-label="Play lecture">
                                                    <i className="bi bi-play-fill"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 border border-1 rounded-lg shadow-md p-4 mb-4">
                                        {/* <i className='absolute h-5 w-5 rounded-full bg-gray-200 top-0 start-0  bi bi-lock mb-2 '></i> */}

                                        <div className=" flex flex-col md:flex-row md:items-center ">
                                            {/* <!-- Icon Section --> */}
                                            <div className="Video w-32 h-20 rounded-lg shadow bg-white flex justify-center items-center mr-4 mb-4 md:mb-0">
                                                <i className="bi bi-tv text-4xl w-12 h-12"></i>
                                            </div>

                                            {/* <!-- Description Section --> */}
                                            <div className="flex-1 md:mr-4">
                                                <div className="text-slate-900 text-xl font-semibold font-['DM Sans']">
                                                    Etiam vitae metus congue elementum
                                                </div>
                                                <div className="w-96 text-zinc-700 text-base font-normal font-['DM Sans'] mt-2">
                                                    Vestibulum fermentum efficitur aliquet sienean doloser libero,
                                                </div>
                                            </div>

                                            {/* <!-- Lecture Start and Timer Section --> */}
                                            <div className="flex-1">
                                                <div className="text-slate-900 text-xl font-semibold font-['DM Sans']">
                                                    <span className="bi bi-calendar mr-2 w-5 h-5"></span>
                                                    <span className="text-zinc-500 text-base font-normal font-['DM Sans']">Lecture Start Date and Time:</span>
                                                    <div className="text-zinc-700 text-base font-normal font-['DM Sans'] mt-1">
                                                        <span className="ml-6 text-gray-800 text-base font-medium font-['DM Sans']">30 Jan, 2023 - 05:00 PM</span>
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    <span className="bi bi-clock mr-2 w-5 h-5"></span>
                                                    <span className="text-zinc-500 text-base font-normal font-['DM Sans']">Timer: </span>
                                                    <span className="text-red-600 text-base font-medium font-['DM Sans']">10:15:23</span>
                                                </div>
                                            </div>


                                            <div className="flex justify-end ">
                                                <button className="bg-purple-600 text-white w-5 h-5 flex justify-center items-center rounded-full focus:outline-none hover:bg-purple-700" aria-label="Play lecture">
                                                    <i className="bi bi-play-fill"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 border border-1 rounded-lg shadow-md p-4 mb-4">
                                        {/* <i className='absolute h-5 w-5 rounded-full bg-gray-200 top-0 start-0  bi bi-lock mb-2 '></i> */}

                                        <div className=" flex flex-col md:flex-row md:items-center ">
                                            {/* <!-- Icon Section --> */}
                                            <div className="Video w-32 h-20 rounded-lg shadow bg-white flex justify-center items-center mr-4 mb-4 md:mb-0">
                                                <i className="bi bi-tv text-4xl w-12 h-12"></i>
                                            </div>

                                            {/* <!-- Description Section --> */}
                                            <div className="flex-1 md:mr-4">
                                                <div className="text-slate-900 text-xl font-semibold font-['DM Sans']">
                                                    Etiam vitae metus congue elementum
                                                </div>
                                                <div className="w-96 text-zinc-700 text-base font-normal font-['DM Sans'] mt-2">
                                                    Vestibulum fermentum efficitur aliquet sienean doloser libero,
                                                </div>
                                            </div>

                                            {/* <!-- Lecture Start and Timer Section --> */}
                                            <div className="flex-1">
                                                <div className="text-slate-900 text-xl font-semibold font-['DM Sans']">
                                                    <span className="bi bi-calendar mr-2 w-5 h-5"></span>
                                                    <span className="text-zinc-500 text-base font-normal font-['DM Sans']">Lecture Start Date and Time:</span>
                                                    <div className="text-zinc-700 text-base font-normal font-['DM Sans'] mt-1">
                                                        <span className="ml-6 text-gray-800 text-base font-medium font-['DM Sans']">30 Jan, 2023 - 05:00 PM</span>
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    <span className="bi bi-clock mr-2 w-5 h-5"></span>
                                                    <span className="text-zinc-500 text-base font-normal font-['DM Sans']">Timer: </span>
                                                    <span className="text-red-600 text-base font-medium font-['DM Sans']">10:15:23</span>
                                                </div>
                                            </div>


                                            <div className="flex justify-end ">
                                                <button className="bg-purple-600 text-white w-5 h-5 flex justify-center items-center rounded-full focus:outline-none hover:bg-purple-700" aria-label="Play lecture">
                                                    <i className="bi bi-play-fill"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 border border-1 rounded-lg shadow-md p-4 mb-4">
                                        {/* <i className='absolute h-5 w-5 rounded-full bg-gray-200 top-0 start-0  bi bi-lock mb-2 '></i> */}

                                        <div className=" flex flex-col md:flex-row md:items-center ">
                                            {/* <!-- Icon Section --> */}
                                            <div className="Video w-32 h-20 rounded-lg shadow bg-white flex justify-center items-center mr-4 mb-4 md:mb-0">
                                                <i className="bi bi-tv text-4xl w-12 h-12"></i>
                                            </div>

                                            {/* <!-- Description Section --> */}
                                            <div className="flex-1 md:mr-4">
                                                <div className="text-slate-900 text-xl font-semibold font-['DM Sans']">
                                                    Etiam vitae metus congue elementum
                                                </div>
                                                <div className="w-96 text-zinc-700 text-base font-normal font-['DM Sans'] mt-2">
                                                    Vestibulum fermentum efficitur aliquet sienean doloser libero,
                                                </div>
                                            </div>

                                            {/* <!-- Lecture Start and Timer Section --> */}
                                            <div className="flex-1">
                                                <div className="text-slate-900 text-xl font-semibold font-['DM Sans']">
                                                    <span className="bi bi-calendar mr-2 w-5 h-5"></span>
                                                    <span className="text-zinc-500 text-base font-normal font-['DM Sans']">Lecture Start Date and Time:</span>
                                                    <div className="text-zinc-700 text-base font-normal font-['DM Sans'] mt-1">
                                                        <span className="ml-6 text-gray-800 text-base font-medium font-['DM Sans']">30 Jan, 2023 - 05:00 PM</span>
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    <span className="bi bi-clock mr-2 w-5 h-5"></span>
                                                    <span className="text-zinc-500 text-base font-normal font-['DM Sans']">Timer: </span>
                                                    <span className="text-red-600 text-base font-medium font-['DM Sans']">10:15:23</span>
                                                </div>
                                            </div>


                                            <div className="flex justify-end ">
                                                <button className="bg-purple-600 text-white w-5 h-5 flex justify-center items-center rounded-full focus:outline-none hover:bg-purple-700" aria-label="Play lecture">
                                                    <i className="bi bi-play-fill"></i>
                                                </button>
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
