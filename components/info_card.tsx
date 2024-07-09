import React from 'react';
import Image from "next/image";
import {JetBrains_Mono} from "next/font/google";
import Center from './center';

const jetBrainsMono = JetBrains_Mono({subsets: ["latin"]});

interface ProjectCardProps {
    src?: string,
    className?: string,
    alt?: string,
    name: string,
    width?: number,
    height?: number,
    role: string,
    children?: React.ReactNode
}

function InfoCard(props: ProjectCardProps) {
    return (
        <div className={"pt-3"}>
            <div className={"flex flex-col-reverse lg:flex-row xl:flex-row space-x-2 h-full justify-center justify-items-center"}>
                <div
                    className={"flex-1 justify-center text-center place-content-center lg:text-left xl:text-left pt-2"}>
                    <Center>
                        <p className={jetBrainsMono.className + " text-lg md:w-1/2 w-full lg:w-full"}>{props.name}</p>
                    </Center>
                    <Center>
                        <p className={"font-bold md:w-1/2 w-full lg:w-full"}>{props.role}</p>
                    </Center>
                    <Center>
                        <div className={"flex md:w-1/2 w-full flex-col lg:w-full text-center lg:text-left"}>
                            {props.children}
                        </div>
                    </Center>
                </div>

                <div>
                    {props.src != null ? <Image src={props.src} alt={props.alt ?? props.name}
                                                width={props.width!}
                                                height={props.height!} className={props.className}/> : <></>}
                </div>
            </div>
        </div>
    );
}

export default InfoCard;