import React from "react";

// images
import {
    bikePov,
    desktopDisplay
} from "../../assets/images/manageIconImg";

const About: React.FC = () => {
    const renderRightImgAbout = () => {
        return (
            <div className="mt-12 h-[350px] w-[1080px] rounded-2xl flex flex-row">
                <div className="h-[100%] w-[55%] p-2">
                I have been working as a Front-End Developer for 7 years, crafting engaging user interfaces. My expertise lies in building efficient and responsive web and mobile applications. I specialize in React, delivering seamless experiences across platforms.
                <br/><br/>Over the years, I’ve gained hands-on experience in both web and mobile development. This has honed my skills in creating intuitive designs and maintaining performance. My focus has always been on bridging design and functionality effectively.
                <br/><br/>Looking ahead, I aspire to expand my expertise and become a Full-Stack Developer. I’m eager to explore backend technologies to build complete, end-to-end solutions.
                </div>
                <img src={desktopDisplay} alt="desktopDisplay" className="h-[100%] w-[45%] rounded-r-2xl " />
            </div>
        );
    }

    const renderLeftImgAbout = () => {
        return (
            <div className="mt-16 h-[350px] w-[1080px] rounded-2xl flex flex-row">
                <img src={bikePov} alt="desktopDisplay" className="h-[100%] w-[45%] rounded-l-2xl" />
                <div className="h-[100%] w-[55%] p-3">
                    I have a deep passion for traveling, especially on my motorcycle, as it allows me to explore with freedom and adventure. Riding has taken me to breathtaking destinations across the Philippines, each with its own unique charm.
                    <br/><br/>From winding mountain roads to serene coastal highways, I’ve experienced the beauty of the country up close. Every journey has been an opportunity to discover new cultures, meet amazing people, and embrace the thrill of the open road.
                    <br/><br/>Traveling on two wheels isn’t just a hobby for me—it’s a way of life that fuels my curiosity and love for adventure.
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full flex justify-center mt-12 font-mono flex-col items-center text-white">
            <div className="mt-14">
                <h1 className="text-4xl font-bold">About</h1>
            </div>
            {renderRightImgAbout()}
            {renderLeftImgAbout()}
        </div>
    );
}

export default About;