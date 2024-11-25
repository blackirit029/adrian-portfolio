import React from "react";

// assets
import Profile from "../../assets/profile.jpg";

const TopleftMenu: React.FC = () => {
    return (
        <div className="mt-10 flex flex-col items-center">
            <img src={Profile} alt="profile" className="h-40 w-40 rounded-full"/>
            <div className="mt-4 text-lg font-semibold">
                Mark Adrian Grandia
            </div>
            <div className="">
                Software Engineer
            </div>
        </div>
    );
}

export default TopleftMenu;
