import React, { memo, useState } from "react";

// icons
import {
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
    const [showCopyDiv, setShowCopyDiv] = useState(false);

    const handleOnClick = () => {
        navigator.clipboard.writeText("markadrian.grandia@gmail.com");
        setShowCopyDiv(true);

        setTimeout(() => {
            setShowCopyDiv(false);
        }, 3000);
    }

    return (
        <div className="h-52 text-white flex justify-center items-center flex-col">
            <div className="text-xl font-bold">Looking forward to collaborating with you!</div>
            <button className="mt-4 rounded bg-sky-500 py-1 px-20 text-lg" onClick={handleOnClick}>
                Email me <FontAwesomeIcon icon={faArrowRight} className="h-3 w-7"/>
            </button>
            <div className="transition-opacity ease-in duration-700 h-4 m-2">
                {showCopyDiv ? "My email is copied to your clipboard!" : " " }
            </div>
        </div>
    );
}

export default memo(Footer);
