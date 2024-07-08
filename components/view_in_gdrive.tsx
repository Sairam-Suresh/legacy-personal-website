import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogleDrive} from "@fortawesome/free-brands-svg-icons";

interface ViewInDriveProps {
    url: string
}

function ViewInGDrive(props: ViewInDriveProps) {
    return (
        <div className={"flex w-full justify-center"}>
            <div className={"border-2 border-white rounded-lg w-full"}>
                <a href={props.url} className={"aspect-square"}>
                    <div
                        className={"flex flex-row justify-center m-2 space-x-1"}>
                        <FontAwesomeIcon icon={faGoogleDrive} className={"fas fa-google-drive"} size={"lg"}/>
                        <p className={""}>View on Google Drive</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ViewInGDrive;