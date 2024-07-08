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
import Link from "next/link";
import ViewInGDrive from "@/components/view_in_gdrive";
import ViewInStore from "@/components/view_in_store";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col items-center pt-5 m-5 md:size-fit md:m-5 lg:m-auto lg:size-1/2 space-y-5">
            <div className={"flex flex-col items-center justify-center h-screen"}>
                <LinearGradient gradient={['to left', '#17' +
                '' +
                'acff, #ff68f0']}
                                fallbackColor="black">
                    <p id={"top"} className={"font-extrabold text-5xl lg:text-6xl"}>Sairam Suresh</p>
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

            <div
                className={"h-1/3 w-full sticky top-5 border-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded p-1 select-none lg:m-2 md:m-auto hidden lg:block"}>
                <div className={"md:flex md:flex-row md:justify-around "}>
                    <Link href={"#aboutme"} className={"text-lg hover:underline underline-offset-auto text-center"}>About
                        Me</Link>
                    <Link href={"#projects"}
                          className={"text-lg hover:underline underline-offset-auto text-center"}>Projects</Link>
                    <Link href={"#achievements"}
                          className={"text-lg hover:underline underline-offset-auto text-center"}>Achievements</Link>
                    <Link href={"#VIA"}
                          className={"text-lg hover:underline underline-offset-auto text-center"}>VIA</Link>
                    <Link href={"#events"}
                          className={"text-lg hover:underline underline-offset-auto text-center"}>Events</Link>
                </div>
            </div>


            {/*About Me*/}
            <Container topPadding={false}>
                {/*Intro*/}
                <Header text={"About Me"} id={"aboutme"}/>

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
                                name={"School of Science and Technology, Singapore"} width={250} height={100}>
                    <li>Class Exco (2021)</li>
                    <li>Flag Raising 2IC for Scouts (2022)</li>
                    <li>SST Inc. Taskforce for React in SST Inc. (2022)</li>
                    <li>Digital Citizenship Leader (2023-2024)</li>
                    <li>Flag Raising Overall IC for Scouts (2023-2024)</li>
                    <li>SST Inc. iOS CTO (2023-2024)</li>
                </SchoolInfoCard>

                {/*GESPS*/}
                <SchoolInfoCard src={"/gesps.png"} alt={"GESPS"} name={"Gan Eng Seng Primary School"} width={250}
                                height={100}>
                    <li>Prefect (2017-2018)</li>
                    <li>Deputy Head Prefect for Welfare (2019-2020)</li>
                </SchoolInfoCard>
            </Container>

            {/*Projects*/}
            <Container>
                {/*Intro*/}
                <Header text={"My Projects"} id={"projects"}/>
                <p className={"text-center"}>These are some projects/experiments that I have embarked on during my
                    programming journey</p>

                <InfoCard src={"/mathx.png"} name={"MathX"} width={150} height={150}
                          className={"rounded-3xl aspect-square m-auto"} role={"Developer (Android Side)"}>
                    <p>
                        I was given the task to redevelop the android version of the MathX App, made by SST Inc.
                        I remade the app in Flutter, Google's Cross Platform Development Toolkit.
                    </p>
                    <div className={"flex w-auto flex-col space-y-2"}>
                        <ViewInGithub url={"https://www.github.com/sairam-suresh/mathx"}/>
                        <ViewInStore url={"https://play.google.com/store/apps/details?id=org.sstinc.mathx"}
                                     iOS={false}/>
                    </div>
                </InfoCard>

                <InfoCard src={"/announcer.png"} name={"SST Announcer"} width={150}
                          height={150} className={"rounded-3xl aspect-square m-auto"}
                          role={"Developer (Android Side)"}>
                    <p>
                        I was given the task to redevelop the android version of the SST Announcer App, made by SST Inc.
                        I remade the app in Flutter, Google's Cross Platform Development Toolkit.
                    </p>
                    <div className={"flex w-auto flex-col space-y-2"}>
                        <ViewInGithub url={"https://www.github.com/sairam-suresh/sst-announcer"}/>
                        <ViewInStore url={"https://play.google.com/store/apps/details?id=com.sst.anouncements"}
                                     iOS={false}/>
                    </div>
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
                <InfoCard src={"/placeholder.png"}
                          name={"Green Boxes"}
                          width={150}
                          height={150} className={"rounded-3xl aspect-square m-auto"}
                          role={"Creator and Flutter Developer"}>
                    <p>
                        I created this app for my competitions in Discover Week 2024 and IDEX by ACSI
                    </p>
                </InfoCard>
                <InfoCard
                    name={"Controlling a RainbowHAT with a Raspberry Pi and Python"}
                    role={"Creator and Python Developer"}>
                    <p>
                        This project yields a GUI program which can control all the functions of the RainbowHat
                        except for the Extra GPIO pins.
                    </p>

                    <ViewInGDrive
                        url={"https://drive.google.com/file/d/1YRb4NXYbPpxchhNVjap8ThbAYCkxRzBr/view?usp=sharing"}/>
                </InfoCard>
                <InfoCard src={"/calculator.png"}
                          name={"Calculator"}
                          width={150}
                          height={150} className={"rounded-3xl aspect-square m-auto"}
                          role={"Creator and Python Developer"}>
                    <p>
                        I created this Python Calculator App to obtain the Computer Badge in
                        Scouts
                    </p>

                    <ViewInGDrive
                        url={"https://drive.google.com/file/d/1dLOIxXzo5X8GZ4gxnHUbPIz6f3FIR8M5/view?usp=sharing"}/>
                </InfoCard>
                <InfoCard
                    name={"Access Microbit Sensors From PC"}
                    role={"Creator and Python Developer"}>
                    <p>
                        This project attempts to create a Python program that can retrieve values from the Microbit
                        sensors through the serial interface.
                        It is also designed in such a way that can allow it to be imported and used by other python
                        programs.
                    </p>

                    <ViewInGDrive
                        url={"https://drive.google.com/drive/folders/19f1FsaSFvEpW10S24tDI06Lrv0FudxfO?usp=sharing"}/>
                </InfoCard>
                <InfoCard
                    name={"Communication between 2 PCs over a Microbit network"}
                    role={"Creator and Python Developer"}>
                    <p>
                        This project aids in transferring data between 2 computers using the help of Microbit.
                        This works by first sending the intended message to the sender Microbit through serial.
                        It will then be broadcasted and the other receiver Microbit connected to another PC
                        will receive the message and send it to the PC using Serial.
                    </p>

                    <ViewInGDrive
                        url={"https://drive.google.com/drive/folders/19f1FsaSFvEpW10S24tDI06Lrv0FudxfO?usp=sharing"}/>
                </InfoCard>

            </Container>

            {/*Achievements*/}
            <Container>
                {/*Intro*/}
                <Header text={"Achievements"} id={"achievements"}/>
                <div className="space-y-2">
                    <div className="font-bold text-center text-2xl">2024</div>
                    <InfoCard name={"Discover Week: SIT-SST-ST Workshop (Food Security)"} role={"Won First Place"}>
                        <div className={"space-y-2"}>
                            <p>
                                This workshop was held by SIT and SST to help students understand the importance of food
                                security and allows students to get hands-on with creating their own solutions
                            </p>
                            <p>
                                Created the GreenBoxes App, which is able to administrate
                                Smart Plant Incubators using Bluetooth. This Project won first place.
                            </p>
                            <p>
                                By allowing Singaporeans to own these small plant incubators which can fit into unused
                                spaces
                                in their homes, it allows Singapore to become more self-sufficient in terms of food,
                                promoting
                                greater food security.
                            </p>
                            <div className={"flex flex-row space-x-2 justify-around overflow-x-scroll"}>
                                <Image src={"/discoverweek/presentation.jpg"} alt={"Me presenting at DiscoverWeek"}
                                       width={400}
                                       height={200} className={"flex-1"}/>
                                <Image src={"/discoverweek/certificate.jpg"}
                                       alt={"Receiving Certificate at DiscoverWeek"} width={400}
                                       height={200} className={""}/>
                            </div>
                        </div>
                    </InfoCard>

                    <InfoCard name={"IDEX by ACS(I)"} role={"Won \"Sustainable Living Award\" from A*Star"}>
                        <div className={"space-y-2"}>
                            <p>
                                The project from Discover Week was submitted to IDEX by ACS(I) and won the Sustainable
                                Living Award from A*Star.
                            </p>
                            <div className={"flex flex-row space-x-2 justify-around overflow-x-scroll"}>
                                <Image src={"/IDEX/group_pic.jpg"} alt={"Group Picture for IDEX"} width={200}
                                       height={400} className={"flex-1"}/>
                                <Image src={"/IDEX/presenting.jpg"} alt={"Presenting for IDEX"} width={200}
                                       height={400} className={"flex-1"}/>
                                <Image src={"/IDEX/setup.jpg"} alt={"Setting Up for IDEX"} width={200}
                                       height={400} className={"flex-1"}/>
                            </div>
                        </div>
                    </InfoCard>

                    <div className="font-bold text-center text-2xl">2023</div>
                    <InfoCard name={"Perse Coding Team Challenge Round 1"} role={"Gold Award"}>
                        Solved Programming Problems using Python
                    </InfoCard>
                    <InfoCard name={"IMDA National Youth Tech Championship"} role={"Quarter-Finalists"}>
                        Learned to program DJI Tello Drones (Python)
                    </InfoCard>
                    <InfoCard name={"NUS Illustratum - A Hallway Physics Competition"} role={"Merit Award"}>
                        Used modelling to demonstrate the three-body problem
                    </InfoCard>
                    <InfoCard name={"Singapore Science and Engineering Fair"} role={"Participation"}>
                        Presented ISS research on light angle and solar panel voltage
                    </InfoCard>
                    <div className="font-bold text-center text-2xl">2022</div>
                    <InfoCard name={"Opportunity X"} role={"3rd Team Placing"}>
                        Presented ISS research on light angle and solar panel voltage
                    </InfoCard>
                    <InfoCard name={"International Online Science Project Competition (INTOC)"} role={"Silver Award"}>
                        Presented ISS research on light angle and solar panel voltage
                    </InfoCard>
                    <InfoCard name={"Young Technopreneurship Challenge"} role={"Participation"}>
                        Pitched an AR app for phone repairs
                    </InfoCard>
                    <InfoCard name={"VJC-ASTAR Science Fair"} role={"Participation"}>
                        Presented ISS research on light angle and solar panel voltage
                    </InfoCard>
                    <InfoCard name={"Celebrations@SST"} role={"Book Prize (Tamil) and Interview Opportunity"}>
                        I got the opportunity to be interviewed by the school.
                    </InfoCard>
                    <div className="font-bold text-center text-2xl">2021</div>
                    <InfoCard name={"Edusave Good Progress Award"} role={"Obtained Award"}/>
                    <InfoCard name={"Edusave Certificate of Academic Achievement"} role={"Obtained Award"}/>
                    <InfoCard name={"Singapore and Asian Schools Math Olympiad Competition"} role={"Bronze Award"}/>
                    <InfoCard name={"Design Thinking with Robotics and Computational Thinking"} role={"Bronze Award"}/>
                </div>
            </Container>

            {/*Service Learning*/}
            <Container>
                {/*Intro*/}
                <Header text={"Service Learning"} id={"VIA"}/>
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

                <InfoCard src={"/dcb.png"}
                          name={"Cyber Wellness Student Ambassador Programme Outreach to Primary Schools"} width={150}
                          height={150} className={"rounded-3xl aspect-square m-auto"}
                          role={"Tech Support / Running Committee"}>
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
                <Header text={"Events"} id={"events"}/>
                <p className={"text-center"}>These are some programmes that I have participated in.</p>
                <InfoCard name={"Swift Accelerator Programme"} src={"/sap.png"} width={150}
                          height={150} className={"rounded-3xl aspect-square m-auto"}
                          role={"Participant"}>
                    <p>
                        I participated in the Swift Accelerator Programme where I learnt more
                        about developing for apple's platforms using Swift and SwiftUI.
                    </p>
                </InfoCard>

                <InfoCard name={"Sensetime x CodingLab AI Bootcamp"} className={"rounded-3xl aspect-square m-auto"}
                          role={"Participant"}>
                    <p>
                        I participated in this AI Bootcamp, where I learnt more about using Python
                        for AI and ML and also scored a Distinction and Best Overall Award.
                    </p>
                    <div className={"flex flex-row space-x-2 justify-around overflow-x-scroll"}>
                        <Image src={"/sensetime_bootcamp/award.jpg"} alt={"Sensetime AI Bootcamp"} width={500}
                               height={200}
                               className={"flex-1"}/>
                        <Image src={"/sensetime_bootcamp/presentation.png"} alt={"Sensetime AI Bootcamp"} width={500}
                               height={200}
                               className={"flex-1"}/>
                    </div>
                </InfoCard>
            </Container>

            {/*Footer*/}
            <footer className={"text-center py-5 text-gray-500"}>
                <p>Created with ❤️ by Sairam Suresh. Made with Next.js and TailwindCSS.</p>
            </footer>
        </main>
    );
}
