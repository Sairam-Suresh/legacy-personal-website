import React from 'react';
import {LinearGradient} from "react-text-gradients";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

interface ViewInGithubProps {
    url: string
}

function ViewInGithub(props:ViewInGithubProps) {
    return (
        <div className={"hover:border-2 border-white rounded-lg"}>
            <a href={props.url} className={"aspect-square"}>
                <div
                    className={"flex w-full flex-row justify-center lg:justify-start xl:justify-start m-2 space-x-1"}>
                    <p className={""}>View on Github</p>
                    <FontAwesomeIcon icon={faGithub} className={"fas fa-github"} size={"lg"}/>
                </div>
            </a>
        </div>
    );
}

export default ViewInGithub;