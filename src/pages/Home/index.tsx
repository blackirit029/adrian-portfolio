import React from "react";

// page
import Skills from "./Skills";
import Tools from "./Tools";

const Home: React.FC = () => {
    return (
        <div className="w-full h-full flex justify-center mt-12 font-mono flex-col items-center text-white">
            <div className="w-[1000px] text-4xl">
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