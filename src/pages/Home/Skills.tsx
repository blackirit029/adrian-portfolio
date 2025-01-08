import React, { memo } from "react";

// icons
import {
    faReact,
    faJs,
    faHtml5,
    faCss,
    faGitAlt,
    faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

// components
import Card from "../../components/Card";

const Skills: React.FC = () => {
    const skills = [
        { logo: faReact, name: "React" },
        { logo: "redux", name: "Redux" },
        { logo: faJs, name: "Javascript" },
        { logo: faHtml5, name: "HTML" },
        { logo: faCss, name: "CSS" },
        { logo: "next", name: "Next.js" },
        { logo: "tailwind", name: "Tailwind" },
        { logo: faGitAlt, name: "Git" },
        { logo: "svn", name: "SVN" },
        { logo: faNodeJs, name: "Node" },
    ];

    return (
        <>
             <div className="mt-14 text-4xl font-bold">My Skills</div>
            <div className="mt-7 grid gap-4 grid-cols-5 grid-rows-2">
                {
                    skills.map((skill) => {
                        return <Card logo={skill.logo} name={skill.name}/>
                    })
                }
            </div>
        </>
    );
};

export default memo(Skills);
