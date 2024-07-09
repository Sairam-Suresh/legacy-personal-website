import React from 'react';
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Socials() {
    return (
        <div className={"flex flex-row mt-3 space-x-3"}>
            <a href={"https://www.instagram.com/sairam_syrupzzz?igsh=Ynlhc2wwc3Z1aDIx&utm_source=qr"} className={"hover:scale-105"}>
                <FontAwesomeIcon icon={faInstagram} className={"fas fa-instagram"} size={"3x"}/>
            </a>
            <a href={"https://www.linkedin.com/in/sairam-suresh-37871b285/"} className={"hover:scale-105"}>
                <FontAwesomeIcon icon={faLinkedin} className={"fas fa-linkedin"} size={"3x"} />
            </a>
            <a href={"mailto:sairam278.suresh@gmail.com"} className={"hover:scale-105"}>
                <FontAwesomeIcon icon={faEnvelope} className={"fas fa-envelope"} size={"3x"}/>
            </a>
            <a href={"https://github.com/Sairam-Suresh"} className={"hover:scale-105"}>
                <FontAwesomeIcon icon={faGithub} className={"fas fa-github"} size={"3x"}/>
            </a>
        </div>
    );
}

export default Socials;