import React, { memo } from "react";

// icons
import {
    faNpm,
    faYarn,
} from "@fortawesome/free-brands-svg-icons";

// components
import Card from "../../components/Card";

const Tools: React.FC = () => {
    const tools = [
        { logo: faNpm, name: "NPM" },
        { logo: faYarn, name: "Yarn" },
        { logo: "visualStudio", name: "Visual Studio" },
        { logo: "androidStudio", name: "Android Studio" },
        { logo: "xcode", name: "XCode" },
        { logo: "azure", name: "Azure" },
    ];

    return (
        <>
            <div className="mt-14">
            <h1 className="text-4xl font-bold">Tools Used</h1>
            </div>
            <div className="mt-7 grid gap-4 grid-cols-3 grid-rows-2">
                {
                    tools.map((tool) => {
                        return <Card logo={tool.logo} name={tool.name}/>
                    })
                }
            </div>
        </>
    )
};

export default memo(Tools);
