import React from "react";

// bg-[url('src/assets/home-cover.jpg')]

const Home: React.FC = () => {
    return (
        <div className="w-full h-full flex bg-slate-100 justify-center">
            <div className="w-[870px] pl-[150px] min-h-[731px] content-center">
                <div className="flex flex-col self-center">
                    <div className="text-6xl mb-3 font-bold">Hi!</div>
                    <div className="text-6xl mb-6 font-bold">I'm Adrian</div>
                    <a href="/" className="py-[10px] px-[15px] tracking-wide w-40 border border-black text-xs">
                        DOWNLOAD CV
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;