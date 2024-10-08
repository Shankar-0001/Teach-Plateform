import React from 'react';
import './styles/home.css';
import Courses from './Courses';
import Features from './Features';
import { Student } from './student';
import { Statistics } from './statistick';
import { Preparation } from './prepration';
import { VideoBanne } from './video-banner';

export function Home() {
    return (
        <div >

            <div className='bg-gradient-to-r from-cyan-300 to-sky-900'>
                {/* First Banner Section Starts from here */}
                <div className=" grid sm:grid-cols-1 md:grid-cols-2 banner bg-gradient-to-r from-sky-900 to-indigo-800 h-auto bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('./images/doctor-banner.png')" }}>

                    <div className='container mx-auto doctor-data rounded-lg w-[488px] min-h-[100px] flex flex-col items-center  justify-between'>
                        <div className='doctorText'>
                            <div>
                                <span className="text-white text-6xl font-extrabold font-['DM Sans']">Get Flat </span>
                                <span className="text-white text-5xl font-black font-['DM Sans']">100% OFF</span>
                            </div>
                            <div className="text-white text-4xl font-semibold font-['DM Sans']">
                                <span>on all courses purchase</span>
                            </div>
                            <div className="h-14 px-5 py-3 rounded-lg border border-white justify-start items-center gap-1 inline-flex">
                                <div className="text-white text-2xl font-bold font-['DM Sans'] uppercase">Rankp10</div>
                            </div>
                        </div>
                    </div>

                    <div className="doctor-image flex items-center justify-center w-full md:w-full h-[200px] md:h-[350px]">
                        <div className="doctor rounded-lg overflow-hidden w-full h-full">
                            <img src="./images/doctor2.png" alt="doctor" className="w-full h-full object-contain img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>
                {/* Second Banner Section Starts from here */}
                <div className='bg-gradient-to-r from-gray-50 to-sky-50 '>
                    {/* First Banner Section Starts from here */}
                    <div className="  grid sm:grid-cols-1 md:grid-cols-2 banner  h-auto bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('./images/ba.svg')" }}>

                        <div className='container mx-auto doctor-data rounded-lg w-[518px] min-h-[100px] flex flex-col items-center  justify-between '>
                            <div className=' w-[468px] min-h-[100px]'>
                                <div className="text-indigo-950 text-5xl font-extrabold font-['DM Sans'] leading-10">
                                    <span>Student’s most Trusted</span><br /><span>Paramedical Platform</span>
                                </div>

                                <div className="w-96 mt-6 text-zinc-700 text-xl font-normal font-['DM Sans']">Transforming Mind, One Click at a Time – Welcome to RanKplus, Your Ultimate Knowledge Hub.</div>

                                <div className="h-14 mt-6 px-5 py-3 bg-gradient-to-l from-purple-800 to-cyan-400 rounded-3xl justify-start items-center gap-1 inline-flex">
                                    <div className="text-white text-lg font-bold font-['DM Sans']">Explore Now</div>
                                </div>

                            </div>

                        </div>


                        <div className="doctor-image flex items-center justify-center w-full md:w-full h-[200px] md:h-[350px]">
                            <div className="relative doctor rounded-lg overflow-hidden w-full h-full">
                                <img src="./images/teacher.svg" alt="doctor" className="w-full h-full object-contain img-fluid" />
                            </div>

                            <div className="leftCards hidden lg:flex absolute -ml-80 flex-col bg-gray-100 opacity-80 p-3 rounded-xl shadow-lg">
                                <div className="flex">
                                    <i className="bi bi-star-fill text-yellow-400 m-1"></i>
                                    <i className="bi bi-star-fill text-yellow-400 m-1"></i>
                                    <i className="bi bi-star-fill text-yellow-400 m-1"></i>
                                    <i className="bi bi-star-fill text-yellow-400 m-1"></i>
                                    <i className="bi bi-star-fill text-yellow-400 m-1"></i>
                                </div>
                                <div className="">
                                    <p className="text-start text-teal-400 font-bold">24K+</p>
                                    <p className="text-sm">Student Reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="rightCards hidden absolute bottom-28  end-20 md:flex flex-col items-center bg-gray-100 opacity-80 p-3 rounded-xl shadow-lg ">
                            <div className="p-2">
                                <p className="text-center font-bold text-xl text-purple-950">500+</p>
                                <p className="text-center text-sm">Top Class Mentors</p>
                            </div>

                            <div className="cards mt-3">
                                <div className="flex justify-center items-center">
                                    <div className="relative -ml-2 z-40 w-8 h-8">
                                        <div className="absolute inset-0 bg-teal-600 rounded-full"></div>
                                        <img src="./images/person.png" alt="Mentor" className="rounded-full w-full h-full object-cover z-50" />
                                    </div>
                                    <div className="relative -ml-2 z-40 w-8 h-8">
                                        <div className="absolute inset-0 bg-teal-600 rounded-full"></div>
                                        <img src="./images/person.png" alt="Mentor" className="rounded-full w-full h-full object-cover z-50" />
                                    </div>
                                    <div className="relative -ml-2 z-40 w-8 h-8">
                                        <div className="absolute inset-0 bg-teal-600 rounded-full"></div>
                                        <img src="./images/person.png" alt="Mentor" className="rounded-full w-full h-full object-cover z-50" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <Features /> */}
            <section className='mt-6'>
                <Features />
            </section>

            <section className='mt-20 mb-20'>
                <Courses />
            </section>

            <section>
                <Preparation />
            </section>

            <section>
                <VideoBanne />
            </section>

            <section>
                <Statistics />
            </section>

            <section>
                <Student />
            </section>

        </div>
    );
}
