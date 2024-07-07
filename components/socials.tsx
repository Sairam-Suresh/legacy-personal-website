import React from 'react';
import Image from "next/image";

function Socials() {
    return (
        <div className={"flex flex-row mt-3 space-x-3"}>
            <a href={"https://www.instagram.com/sairam_syrupzzz?igsh=Ynlhc2wwc3Z1aDIx&utm_source=qr"}>
                <Image src={"/instagram.png"} alt={"Instagram"} width={50} height={50}/>
            </a>
            <a href={"https://www.linkedin.com/in/sairam-suresh-37871b285/"}>
                <Image src={"/linkedin.png"} alt={"LinkedIn"} width={50} height={50}/>
            </a>
            <a href={"mailto:sairam278.suresh@gmail.com"}>
                <Image src={"/mail.png"} alt={"mail"} width={50} height={50}/>
            </a>

        </div>
    );
}

export default Socials;