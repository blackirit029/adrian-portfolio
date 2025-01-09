import React, { memo, useState, useEffect } from "react";

// router
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation(); // Get the current location

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setScrolled(scrollY > 50); // Adjust this value to control when the header changes
      };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

        // Function to check if the link is active
    const isActive = (path: string) => {
        return location.pathname === path ? "activeLinkBorder" : ""; // Add active class
    };

    return (
        <div className={`w-full sticky top-0 z-50 py-3.5 transform transition-all duration-700 ease-in-out font-mono text-white 
         ${scrolled ? " bg-zinc-700 shadow-md" : "bg-transparent"}`}>
            <div className="container mx-auto flex justify-between items-center max-w-6xl px-3">
                <div className="flex">
                    <div className="h-[60px] w-[80px] border-4 text-center font-bold border-white text-2xl leading-[3rem]">
                        MAG
                    </div>
                </div>
                <div className="hidden md:flex space-x-4">
                <Link
                    to="/"
                    className={`text-lg hover:text-sky-500 py-1.5 px-2.5 ${isActive("/")}`}
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className={`text-lg hover:text-sky-500 py-1.5 px-2.5 ${isActive("/about")}`}
                >
                    About
                </Link>
                <Link
                    to="/resume"
                    className={`text-lg hover:text-sky-500 py-1.5 px-2.5 ${isActive("/resume")}`}
                >
                    Resume
                </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col space-y-2 mt-2 ml-3">
                        <Link to="/" onClick={toggleMenu} className="text-lg">
                            Home
                        </Link>
                        <Link to="/about" onClick={toggleMenu} className="text-lg">
                            About
                        </Link>
                        <Link to="/resume" onClick={toggleMenu} className="text-lg">
                            Resume
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default memo(Header);