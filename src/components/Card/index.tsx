import React, { memo } from "react";

// functions
import { getRenderIcon } from "../../app/getFunctions";

interface CardProps {
    logo: any;
    name: string;
  }

const Card = ({ logo, name }: CardProps) => {
    return (
        <div className="w-[150px] h-[150px] shadow-xl rounded bg-zinc-700 flex justify-center flex-col items-center hover:bg-sky-500">
            {getRenderIcon(logo, name)}
            <div className="font-semibold text-lg">{name}</div>
        </div>
    );
}

export default memo(Card);
