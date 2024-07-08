import React from 'react';
import {LinearGradient} from "react-text-gradients";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

interface ViewInGithubProps {
    url: string
}

function ViewInGithub(props: ViewInGithubProps) {
    return (
        <div className={"flex w-full justify-center"}>
            <div className={"border-2 border-white rounded-lg w-full"}>
                <a href={props.url} className={"aspect-square"}>
                    <div
                        className={"flex flex-row justify-center m-2 space-x-1"}>
                        <FontAwesomeIcon icon={faGithub} className={"fas fa-github"} size={"lg"}/>
                        <p className={""}>View on Github</p>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={"fas fa-arrow-up-right-from-square"}
                                         size={"lg"}/>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ViewInGithub;