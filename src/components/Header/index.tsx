import React, { memo } from "react";

// router
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-full sticky top-0 z-50 py-3.5 transform transition-all duration-700 ease-in-out font-mono text-white">
            <div className="container mx-auto flex justify-between items-center max-w-6xl px-3">
                <div className="flex">
                    <div className="h-[60px] w-[80px] border-4 text-center font-bold border-white text-2xl leading-[3rem]">
                        MAG
                    </div>
                </div>
                <div className="hidden md:flex space-x-4">
                <Link
                    to="/"
                    className={`text-lg  py-1.5 px-2.5`}
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className={`text-lg  py-1.5 px-2.5 `}
                >
                    About
                </Link>
                <Link
                    to="/resume"
                    className={`text-lg py-1.5 px-2.5 `}
                >
                    Resume
                </Link>
                </div>
            </div>
        </div>
    );
}

export default memo(Header);