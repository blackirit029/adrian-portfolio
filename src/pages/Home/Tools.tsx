import { memo } from "react";

// icons
import {
    faNpm,
    faYarn,
} from "@fortawesome/free-brands-svg-icons";

// components
import Card from "../../components/Card";

const Tools = () => {
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
            <div className="font-bold mt-14 md:text-4xl sm:text-3xl text-3xl">Tools</div>
            <div className="mt-7 grid gap-4 grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 sm:grid-cols-3 sm:grid-rows-2">
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
