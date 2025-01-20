import React, { useState, useEffect } from "react";

// page
import Skills from "./Skills";
import Tools from "./Tools";

const Home: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100); // Small delay to trigger the fade-in
        return () => clearTimeout(timer); // Cleanup timer
      }, []);

    return (
        <div className={`w-full h-full flex justify-center mt-12 font-mono flex-col items-center text-white
            transition-opacity duration-1000 ${isVisible ? " opacity-100 " : " opacity-0 "}`}>
            <div className="md:w-[70%] md:text-4xl sm:w-[70%] sm:text-3xl w-[90%] text-2xl">
                Hi, my name is  
                    <span className="text-sky-500"> Mark Adrian Grandia</span>
                .
                I am a  
                    <span className="font-bold"> Front End Developer </span>
                living in  
                    <span className="italic"> Philippines</span>
                .
            </div>
            <Skills />
            <Tools />
        </div>
    );
}

export default Home;