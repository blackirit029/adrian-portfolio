import React from "react";

import { Link } from "react-router-dom";

const MidLeftMenu: React.FC = () => {
    const navigationPages = [
        { title: "HOME", route: "/" },
        { title: "ABOUT", route: "/about" },
        { title: "SKILLS", route: "/skills" },
        { title: "EDUCATION", route: "/education" },
        { title: "EXPERIENCE", route: "/experience" },
        { title: "CONTACT", route: "/contact" },
    ];

    return (
        <div className="mt-5 flex flex-col items-center">
            {navigationPages.map((data, index) => {
                return (
                    <Link to={data.route} className="mb-3">
                        {data.title}
                    </Link>
                );
            })}
        </div>
    );
}

export default MidLeftMenu;