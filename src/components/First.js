import React, { useState } from 'react';

function First() {
    const [isListOpen, setIsListOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);

    const toggleList = () => {
        setIsListOpen(!isListOpen);
    };
    const toggleCompanyList = () => {
        setIsCompanyOpen(!isCompanyOpen);
    };

    return (
        <div className='m-10 flex justify-between items-center'>
            <div className='text-5xl font-bold'>
                snap
            </div>
            <nav className=''>
                <ul className='font-medium text-gray-500 ml-16 flex gap-11 justify-center items-center text-center '>
                    <li className='flex items-center justify-center cursor-pointer hover:text-gray-800' onClick={toggleList}>
                        Features {isListOpen ? (
                            <svg className='ml-2 ' width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="#686868" stroke-width="1.5" fill="none" d="M1 5 4 1 7 5"/>
                            </svg>
                        ) : (
                            <svg className='ml-2' width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="#686868" stroke-width="1.5" fill="none" d="M1 1 4 5 7 1"/>
                            </svg>
                        )}
                    </li>
                    {isListOpen && (
                        <ul className="absolute mt-52 left-[38%] w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Todo List</li>
                            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Calendar</li>
                            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Reminder</li>
                            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Planning</li>
                        </ul>
                    )}
                    <li className='flex items-center justify-center cursor-pointer hover:text-gray-800' onClick={toggleCompanyList}>
                        Company{isCompanyOpen ? (
                            <svg className='ml-2' width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="#686868" stroke-width="1.5" fill="none" d="M1 5 4 1 7 5"/>
                            </svg>
                        ) : (
                            <svg className='ml-2' width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="#686868" stroke-width="1.5" fill="none" d="M1 1 4 5 7 1"/>
                            </svg>
                        )}
                        {isCompanyOpen && (
                            <ul className="absolute mt-44 left-[45%] w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10 ">
                                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">History</li>
                                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Our Team</li>
                                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Blog</li>
                            </ul>
                        )}</li>
                    <li className='hover:text-gray-800 cursor-pointer'>Careers</li>
                    <li className='hover:text-gray-800 cursor-pointer'>About</li>
                </ul>
            </nav>
            <div className='flex items-center space-x-4 font-medium text-gray-500 '>
                <button className='font-semibold py-2 px-4 rounded cursor-pointer hover:text-gray-800'>
                    Login 
                </button>
                <button className='font-semibold py-2 px-4 border-2 p-1 border-gray-500 rounded-xl cursor-pointer hover:text-gray-800'>
                    Register
                </button>
            </div>
        </div>
    );
}

export default First;
