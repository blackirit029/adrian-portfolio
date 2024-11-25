import React from "react";

import TopleftMenu from "./TopLeftMenu";
import MidLeftMenu from "./MidLeftMenu";
import BotLeftMenu from "./BotLeftMenu";

const LeftMenu: React.FC = () => {
    return (
        <div className="w-[300px] absolute ml-[200px] bg-slate-100 min-h-[731px]">
            <TopleftMenu />
            <MidLeftMenu />
            <BotLeftMenu />
        </div>
    );
}

export default LeftMenu;
