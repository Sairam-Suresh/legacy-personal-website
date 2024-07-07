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
        <div className={"flex flex-col lg:flex-row xl:flex-row space-x-2 h-full justify-center pt-3"}>
            <Image src={props.src} alt={props.alt} width={props.width} height={props.height} className={props.className}/>
            <div className={"flex-1 justify-center text-center lg:text-left xl:text-left pt-2"}>
                <p className={"font-bold text-lg"}>{props.name}</p>
                <div className={"md-5"}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default ProjectInfoCard;