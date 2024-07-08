import React from 'react';
import {LinearGradient} from "react-text-gradients";

interface HeaderProps {
    text: string
    id?: string
}

function Header(props: HeaderProps) {
    return (
        <div>
            <LinearGradient gradient={['to left', '#17acff,#ff68f0']} fallbackColor="white" className={"flex w-full justify-center"}>
                <p className={"font-semibold text-4xl text-center"} id={props.id}>{props.text}</p>
            </LinearGradient>
        </div>
    );
}

export default Header;