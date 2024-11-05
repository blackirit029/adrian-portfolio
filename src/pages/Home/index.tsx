import React from "react";

import LeftMenu from "../../components/LeftMenu";

const Home: React.FC = () => {
    return (
        <div className="w-full h-full flex bg-gray-200 justify-center">
            <div className="flex content-between">
                <LeftMenu />
                <div className="w-[870px]">
                    right content
                </div>
            </div>
        </div>
    );
}

export default Home;