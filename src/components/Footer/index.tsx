import React, { memo } from "react";

// icons
import {
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
    return (
        <div className="h-52 text-white flex justify-center items-center flex-col">
            <div className="text-xl font-bold">Looking forward to collaborating with you!</div>
            <button className="mt-4 rounded bg-sky-500 py-1 px-20 text-lg">
                Email me <FontAwesomeIcon icon={faArrowRight} className="h-3 w-7"/>
            </button>
        </div>
    );
}

export default memo(Footer);
