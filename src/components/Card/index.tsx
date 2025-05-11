import { memo } from "react";

// functions
import { getRenderIcon } from "../../utils/getFunctions";

interface CardProps {
    logo: any;
    name: string;
}

// hover:bg-sky-500

const Card = ({ logo, name }: CardProps) => {
    return (
        <div className="w-[150px] h-[150px] shadow-xl rounded transition duration-150 ease-in-out bg-zinc-700 flex justify-center flex-col items-center hover:scale-105">
            {getRenderIcon(logo, name)}
            <div className="font-semibold text-lg">{name}</div>
        </div>
    );
}

export default memo(Card);
