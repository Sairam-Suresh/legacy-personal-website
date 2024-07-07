import React from 'react';
import Image from "next/image";

interface ProjectCardProps {
    src: string,
    className?: string,
    alt: string,
    name: string,
    width: number,
    height: number,
    children?: React.ReactNode
}

function ProjectInfoCard(props:ProjectCardProps) {
    return (
        <div className={"flex flex-row space-x-2 h-full justify-center"}>
            <Image src={props.src} alt={props.alt} width={props.width} height={props.height} className={props.className}/>
            <div className={"flex-1 justify-center"}>
                <p className={"font-bold text-lg"}>{props.name}</p>
                {props.children}
            </div>
        </div>
    );
}

export default ProjectInfoCard;