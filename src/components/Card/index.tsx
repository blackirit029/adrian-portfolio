import React, { memo } from "react";

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// image // to do need to put in one file and export there
import {
    reduxIcon,
    nextJsIcon,
    tailwindIcon,
    svnIcon,
    visualStudioIcon,
    androidStudioIcon,
    xCodeIcon,
    azureIcon,
} from "../../assets/images/manageIconImg";

interface CardProps {
    logo: any;
    name: string;
  }

const Card = ({ logo, name }: CardProps) => {
    const handleIconColor = (name: string) => {
        let color = "";

        if (name === "React") {
            color = " text-cyan-500 ";
        } else if (name === "Javascript") {
            color = " text-yellow-500 ";
        } else if (name === "HTML" || name === "Git") {
            color = " text-amber-700 ";
        } else if (name === "CSS") {
            color = " text-indigo-900 ";
        } else if (name === "Node") {
            color = " text-emerald-500 ";
        } else if (name === "NPM") {
            color = " text-rose-800 ";
        } else if (name === "Yarn") {
            color = " text-blue-500 ";
        }

        return color;
    }

    const renderIcon = (img: any) => {
        let displayIcon = null;

        if (img === "redux") {
            displayIcon = <img src={reduxIcon} alt="reduxIcon" className="mb-3"/>
        } else if (img === "next") {
            displayIcon = <img src={nextJsIcon} alt="nextJsIcon" className="mb-3"/>
        } else if (img === "tailwind") {
            displayIcon = <img src={tailwindIcon} alt="tailwindIcon" className="mb-3"/>
        } else if (img === "svn") {
            displayIcon = <img src={svnIcon} alt="svnIcon" className="mb-3"/>
        } else if (img === "visualStudio") {
            displayIcon = <img src={visualStudioIcon} alt="visualStudioIcon" className="mb-3"/>
        } else if (img === "androidStudio") {
            displayIcon = <img src={androidStudioIcon} alt="androidStudioIcon" className="mb-3"/>
        } else if (img === "xcode") {
            displayIcon = <img src={xCodeIcon} alt="xCodeIcon" className="mb-3"/>
        } else if (img === "azure") {
            displayIcon = <img src={azureIcon} alt="azureIcon" className="mb-3"/>
        } else {
            displayIcon = <FontAwesomeIcon icon={img} className={`h-16 w-16 mb-3 ${handleIconColor(name)}`} />;
        }

        return displayIcon;
    }

    return (
        <div className="w-[150px] h-[150px] shadow-xl rounded bg-zinc-700 flex justify-center flex-col items-center">
            {renderIcon(logo)}
            <div className="font-semibold text-lg">{name}</div>
        </div>
    );
}

export default memo(Card);
