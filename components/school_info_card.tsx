import React from 'react';
import Image from "next/image";

interface SchoolCardProps {
    src: string,
    alt: string,
    name: string,
    width: number,
    height: number,
    children?: React.ReactNode
}

function SchoolInfoCard(props: SchoolCardProps) {
    return (
        <div className={"flex lg:flex-row xl:flex-row flex-col justify-items-center space-x-2 pt-5"}>
            <Image src={props.src} alt={props.alt} width={props.width} height={props.height} className={"m-auto rounded-lg"}/>
            <div className={"flex-1"}>
                <p className={"font-bold text-lg text-center"}>{props.name}</p>
                <div className={"flex flex-col h-full w-full text-center lg:text-left"}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default SchoolInfoCard;