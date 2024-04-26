import React, { useState } from 'react';

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <nav className="bg-gray-900 p-4 sticky top-0 z-10">

                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="block lg:hidden">
                        <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>

                    <div className={`w-full hidden justify-center items-center flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 lg:ml-auto`}>
                        <ul className="list-reset lg:flex justify-center items-center">
                            <li><a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Inicio</a></li>
                            <li><a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Guía</a></li>
                            <li><a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">Mapa</a></li>
                        </ul>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="w-full justify-center items-center flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 lg:ml-auto">
                        <ul className="list-reset lg:flex justify-center items-center">
                            <li><a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Inicio</a></li>
                            <li><a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Guía</a></li>
                            <li><a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">Mapa</a></li>
                        </ul>
                    </div>
                )}

            </nav>
        </>
    )
}
