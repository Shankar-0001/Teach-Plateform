// import './style/Nav-Bar.css'
import './styles/Nav-Bar.css';
import React, { useState } from 'react'
import { Search, ChevronDown, Menu, X } from 'lucide-react'

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="h-14 w-auto" src="./images/main-log.svg" alt="RanKplus logo" />
                            <img className="h-7 w-auto" src="./images/sub-logo.svg" alt="RanKplus logo" />
                            {/* <span className="ml-2 text-2xl font-bold text-blue-600">RanKplus</span> */}
                        </div>
                    </div>

                    <div className=" hidden md:flex md:flex-1 md:items-center md:justify-center px-2 lg:ml-6 lg:justify-start">
                        <div className="max-w-lg w-full">
                            <label htmlFor="search" className="sr-only">Search</label>
                            <div className="relative ">
                                <div className="absolute top-0 start-40  flex items-center pointer-events-none rounded-full bg-purple-900 h-10 w-10 m-1">
                                    <Search className="h-5 w-5 text-gray-100 ml-2 " aria-hidden="true" />
                                </div>
                                <input
                                    id="search"
                                    name="search"
                                    className="block w-52 h-[55] pl-10 pr-3 py-3 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    placeholder="Search Courses, Book etc"
                                    type="search"
                                />
                            </div>
                        </div>
                    </div>

                    <div className=" hidden md:flex md:items-center md:space-x-4">
                        <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <div className="relative group">
                            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                                Courses
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </a>
                        </div>
                        <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Test Series</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Books</a>
                        <div className="relative group">
                            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                                Free Library
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </a>
                        </div>
                        <button className="register-btn w-[170px] rounded-[50px] ml-4 inline-flex text-center items-center px-4 py-2 border border-transparent text-sm font-medium  text-white  hover:from-teal-500 hover:to-blue-600">
                            Login/Register
                        </button>
                    </div>

                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Courses</a>
                        <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Test Series</a>
                        <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Books</a>
                        <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Free Library</a>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="px-2 space-y-1">
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="text"
                                    name="mobile-search"
                                    id="mobile-search"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    placeholder="Search Courses, Book etc"
                                />
                            </div>
                            <button className="mt-3 w-full flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600">
                                Login/Register
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}