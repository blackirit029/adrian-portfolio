import { memo } from "react";

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

const Skills = () => {
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
             <div className="font-bold mt-14 md:text-4xl sm:text-3xl text-3xl">My Skills</div>
            <div className="mt-7 grid gap-4 grid-cols-2 grid-rows-5 md:grid-cols-5 md:grid-rows-2 sm:grid-cols-3 sm:grid-rows-4">
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
