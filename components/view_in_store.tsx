import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGooglePlay, faAppStoreIos} from "@fortawesome/free-brands-svg-icons";

interface ViewInStoreProps {
    url: string,
    iOS: boolean
}

function ViewInStore(props: ViewInStoreProps) {
    return (
        <div className={"flex w-full justify-center"}>
            <div className={"border-2 border-white rounded-lg w-full"}>
                <a href={props.url} className={"aspect-square"}>
                    <div
                        className={"flex flex-row justify-center m-2 space-x-1"}>
                        <FontAwesomeIcon icon={props.iOS ? faAppStoreIos : faGooglePlay} className={`fas ${props.iOS ? "fa-app-store-ios" : "fa-google-pay"}`} size={"lg"}/>
                        <p className={""}>{props.iOS ? "View on App Store" : "View on Play Store"}</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ViewInStore;