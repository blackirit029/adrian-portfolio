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
} from "../assets/images/manageIconImg";

const getHandleIconColor = (name: string) => {
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

const getRenderIcon = (img: any, name: string) => {
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
        displayIcon = <FontAwesomeIcon icon={img} className={`h-16 w-16 mb-3 ${getHandleIconColor(name)}`} />;
    }

    return displayIcon;
};


// to do if possible change the background of card when hover same color with the icon
// https://codepen.io/sosuke/pen/Pjoqqp use this website to change the color of icon
const getHandleCardHoverBgColor = (name: string) => {
    let bgCardColor = "";

    if (name === "React") {
        bgCardColor = " bg-cyan-500 text-white ";
    }

    return bgCardColor;
};

export {
    getHandleIconColor,
    getRenderIcon,
    getHandleCardHoverBgColor,
}