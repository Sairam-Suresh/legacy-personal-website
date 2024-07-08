import Image from "next/image";
import {LinearGradient} from "react-text-gradients";
import SchoolInfoCard from "@/components/school_info_card";
import InfoCard from "@/components/info_card";
import React from "react";
import Socials from "@/components/socials";
import "@fortawesome/fontawesome-svg-core/styles.css"
import {config} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPython, faSwift, faRust} from "@fortawesome/free-brands-svg-icons";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/header";
import ViewInGithub from "@/components/view_in_github";
import Container from "@/components/container";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col items-center pt-5 m-2 md:size-fit md:m-5 lg:m-auto lg:size-1/2 space-y-5">
            <div className={"flex flex-col items-center justify-center h-screen"}>
                <LinearGradient gradient={['to left', '#17acff, #ff68f0']}
                                fallbackColor="black">
                    <p className={"font-extrabold text-5xl lg:text-6xl"}>Sairam Suresh</p>
                </LinearGradient>
                <p className={"text-center py-2 text-xl lg:text-2xl"}>An Aspiring Computer Scientist and Full Stack
                    App
                    Developer</p>

                <Image src={"/profile_photo.jpg"} alt={""} width={300} height={300}
                       className={"aspect-square w-80 h-80 object-cover rounded-full ring-2 ring-white"}/>
                <Socials/>

                <div className={"h-1/6"}/>

                <div className={"text-lg"}>
                    Scroll down to learn more about me! <FontAwesomeIcon icon={faArrowDown}
                                                                         className={"fas fa-arrow-down animate-bounce"}
                                                                         size={"1x"}/>
                </div>

                <div className={"h-1/6"}/>
            </div>

            {/*About Me*/}
            <Container topPadding={false}>
                {/*Intro*/}
                <Header text={"About Me"}/>

                <p className={"text-wrap text-center"}>
                    I am Sairam Suresh, an aspiring Software Engineer.
                    I am a self-taught programmer who currently specialises in building applications to benefit the
                    community.
                    I learnt ruby <Image src={"/ruby.png"} alt={"Ruby"} width={20} height={20}
                                         className={"inline-block"}/> as my first programming
                    language and have moved on to
                    learn others such as Python <FontAwesomeIcon icon={faPython} className={"fas fa-python"}
                                                                 size={"1x"}/>, Swift (SwiftUI) <FontAwesomeIcon
                    icon={faSwift} className={"fas fa-swift"} size={"1x"}/>, Dart (Flutter), and Rust <FontAwesomeIcon
                    icon={faRust} className={"fas fa-rust"} size={"1x"}/>.
                </p>


                {/*Leadership Roles in Schools*/}
                <p className={"font-bold text-2xl w-full text-center pt-2"}>Leadership Roles in
                    Schools</p>
                {/* SST */}
                <SchoolInfoCard src={"/sst.png"} alt={"SST Singapore"}
                                name={"School of Science and Technology, Singapore"} width={300} height={150}>
                    <li>Class Exco (2021)</li>
                    <li>Flag Raising 2IC for Scouts (2022)</li>
                    <li>SST Inc. Taskforce for React in SST Inc. (2022)</li>
                    <li>Digital Citizenship Leader (2023-2024)</li>
                    <li>Flag Raising Overall IC for Scouts (2023-2024)</li>
                    <li>SST Inc. iOS CTO (2023-2024)</li>
                </SchoolInfoCard>

                {/*GESPS*/}
                <SchoolInfoCard src={"/gesps.png"} alt={"GESPS"} name={"Gan Eng Seng Primary School"} width={300}
                                height={150}>
                    <li>Prefect (2017-2018)</li>
                    <li>Deputy Head Prefect for Welfare (2019-2020)</li>
                </SchoolInfoCard>
            </Container>

            {/*Projects*/}
            <Container>
                {/*Intro*/}
                <Header text={"My Projects"}/>
                <p className={"text-center"}>These are some projects/experiments that I have embarked on during my
                    programming journey</p>

                <InfoCard src={"/mathx.png"} name={"MathX"} width={150} height={150}
                          className={"rounded-3xl aspect-square m-auto"} role={"Developer (Android Side)"}>
                    <p>
                        I was given the task to redevelop the android version of the MathX App, made by SST Inc.
                        I remade the app in Flutter, Google's Cross Platform Development Toolkit.
                    </p>
                    <div >
                        <ViewInGithub url={"https://www.github.com/sairam-suresh/mathx"}/>
                    </div>
                </InfoCard>

                <InfoCard src={"/announcer.png"} name={"SST Announcer"} width={150}
                          height={150} className={"rounded-3xl aspect-square m-auto"}
                          role={"Developer (Android Side)"}>
                    <p>
                        I was given the task to redevelop the android version of the SST Announcer App, made by SST Inc.
                        I remade the app in Flutter, Google's Cross Platform Development Toolkit.
                    </p>
                    <ViewInGithub url={"https://www.github.com/sairam-suresh/sst-announcer"}/>
                </InfoCard>

                <InfoCard src={"/stacked.png"} name={"Stacked (WIP)"} width={150}
                          height={150} className={"rounded-3xl aspect-square m-auto"}
                          role={"Creator and Flutter Developer"}>
                    <p>
                        In order to help out my Scout Unit with their admin duties, I am in the progress of creating an
                        app which can support them in said duties.
                    </p>

                    <ViewInGithub url={"https://www.github.com/sairam-suresh/scout-app-enhanced"}/>
                </InfoCard>

                <InfoCard src={"/placeholder.png"}
                          name={"Tello Drone Controller (WIP)"}
                          width={150}
                          height={150} className={"rounded-3xl aspect-square m-auto"}
                          role={"Creator and Flutter Developer"}>
                    <p>
                        In this hobbyist project, I experiment with the DJI Tello Drone's SDK and build the most
                        fleshed out controller for it.
                    </p>
                </InfoCard>
            </Container>

            {/*Achievements*/}
            <Container>
                {/*Intro*/}
                <Header text={"Achievements"}/>
                <div className="space-y-2">
                    <div className="font-bold text-center text-2xl">2024</div>
                    <ul className="list-disc pl-4 ml-4 space-y-1">
                        <li>Won 1st place for innovative prototype at Discover Week: SIT-SST Workshop (Battling
                            Climate Change with Technologies)
                        </li>
                        <li>Won "Sustainable Living Award" from A*Star at IDEX by ACS(I) - Presented product
                            from Discover Week
                        </li>
                    </ul>
                    <div className="font-bold text-center text-2xl">2023</div>
                    <ul className="list-disc pl-4 ml-4 space-y-1">
                        <li>Perse Coding Team Challenge Round 1 (Merit Award) - Solved programming problems
                            using Python
                        </li>
                        <li>IMDA National Youth Tech Championship (Participation) - Learned to program DJI Tello
                            Drones (Python)
                        </li>
                        <li>Illustratum 2023 (Merit Award) - Used modelling to demonstrate the three-body
                            problem
                        </li>
                        <li>Singapore Science and Engineering Fair (Participation) - Presented ISS research on
                            light angle and solar panel voltage
                        </li>
                    </ul>
                    <div className="font-bold text-center text-2xl">2022</div>
                    <ul className="list-disc pl-4 ml-4 space-y-1">
                        <li>Young Technopreneurship Challenge (Participation) - Pitched an AR
                            app for phone repairs
                        </li>
                        <li>Opportunity X (3rd Team Placing) - Presented ISS research on
                            light angle and solar panel voltage
                        </li>
                        <li>International Online Science Project Competition (INTOC) (Silver
                            Award) - Presented ISS research on light angle and solar panel voltage
                        </li>
                        <li>VJC-ASTAR Science Fair (Participation) - Presented ISS research
                            on light angle and solar panel voltage
                        </li>
                        <li>Celebrations@SST - Book Prize (Tamil) and Interview Opportunity
                        </li>
                        <li>Design Thinking with Robotics and Computational Thinking (Bronze
                            Award) - Solved problems using computational thinking
                        </li>
                        <li>Singapore and Asian Schools Math Olympiad Competition (Bronze)
                        </li>
                    </ul>
                    <div className="font-bold text-center text-2xl">2021</div>
                    <ul className="list-disc pl-4 ml-4 space-y-1">
                        <li>Edusave Good Progress Award</li>
                        <li>Edusave Certificate of Academic Achievement</li>
                        <li>Singapore and Asian Schools Math Olympiad Competition (Bronze)
                        </li>
                    </ul>
                </div>
            </Container>

            {/*Service Learning*/}
            <Container>
                {/*Intro*/}
                <Header text={"Service Learning"}/>
                <p className={"text-center"}>
                    I am a firm believer in giving back to the community. Here are some of the service learning projects
                    that I have participated in.
                </p>

                <InfoCard src={"/engineering_good.png"} name={"S301 Service Learning Project (2023)"} width={150}
                          height={150} className={"rounded-3xl aspect-square m-auto"}
                          role={"Assisted in creating presentation materials"}>
                    <p>
                        I assisted my class in creating the presentation materials in our service learning project with
                        Engineering Good
                    </p>
                </InfoCard>

                <InfoCard src={"/dcb.png"} name={"S301 Service Learning Project (2022-2023)"} width={150}
                          height={150} className={"rounded-3xl aspect-square m-auto"}
                          role={"Cyber Wellness Student Ambassador Programme Outreach to Primary Schools"}>
                    <p>
                        In the years 2022 and 2023, I helped with setting up the logistics for this programme,
                        and was part of the organising committee respectively.
                    </p>
                </InfoCard>

                <InfoCard name={"National Day Commemoration 2023"} width={150}
                          height={150} className={"rounded-3xl aspect-square m-auto"}
                          role={"Part of Parade Contingent"}>
                    <p>
                        I was part of the Parade Contingent for this event.
                    </p>
                </InfoCard>

                <InfoCard name={"Sec 2 Learning Alliance Beyond Borders (Vietnam) 2022"} width={150}
                          height={150} className={"rounded-3xl aspect-square m-auto"}
                          role={"Participant"}>
                    <p>
                        My team and I presented about a problem that we had in Singapore and our solution to it
                    </p>
                </InfoCard>

                <InfoCard name={"Service at Scout West Area Bicycle and Cycling Workshop 2022"} width={150}
                          height={150} className={"rounded-3xl aspect-square m-auto"}
                          role={"Participant"}>
                    <p>
                        I assisted with the programme by setting up logistics for participants' usage
                    </p>
                </InfoCard>
            </Container>

            <Container>
                <Header text={"Events"}/>
                <p className={"text-center"}>These are some programmes that I have participated in.</p>
                <InfoCard name={"Swift Accelerator Programme"} src={"/sap.png"} width={150}
                          height={150} className={"rounded-3xl aspect-square m-auto"}
                          role={"Participant"}>
                    <p>
                        I participated in the Swift Accelerator Programme where I learnt more
                        about developing for apple's platforms using Swift and SwiftUI.
                    </p>
                </InfoCard>

                <InfoCard name={"Sensetime x CodingLab AI Bootcamp"} width={150}
                          height={150} className={"rounded-3xl aspect-square m-auto"}
                          role={"Participant"}>
                    <p>
                        I participated in this AI Bootcamp, where I learnt more about using Python
                        for AI and ML and also scored a Distinction and Best Overall Award.
                    </p>
                </InfoCard>
            </Container>

            {/*Footer*/}
            <footer className={"text-center py-5 text-gray-500"}>
                <p>Created with ❤️ by Sairam Suresh. Made with Next.js and TailwindCSS.</p>
            </footer>
        </main>
    );
}
