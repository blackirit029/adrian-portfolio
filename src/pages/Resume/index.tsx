import React from "react";

// page
import Contact from "./Contact";
import Experience from "./Experience";
import Education from "./Education";

const Resume = () => {
    return (
        <div className="w-full h-full flex justify-center mt-12 font-mono flex-col items-center text-white">
            <Contact />
            <Experience />
            <Education />
        </div>
    );
};

export default Resume;
