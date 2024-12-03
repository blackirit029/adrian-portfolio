import React from "react";
import HomeCover from "../../assets/images/home-cover.jpg";

const Home: React.FC = () => {
    return (
        <div className="w-full h-full flex bg-slate-100 justify-center">
            <div className="w-[870px] pl-[150px] min-h-[731px] content-center">
                <img src={HomeCover} alt="HomeCover" className="object-fill h-full w-full rounded-md m-auto"/>
                <div className="flex flex-col self-center absolute z-10 top-1/3 ml-10">
                    <div className="text-6xl mb-3 font-bold">Hi!</div>
                    <div className="text-6xl mb-6 font-bold">I'm Adrian</div>
                    <a href="/" className="py-[10px] px-[15px] tracking-wide w-40 border border-black text-xs hover:bg-cyan-400 hover:text-white hover:border-cyan-400">
                        DOWNLOAD CV
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;