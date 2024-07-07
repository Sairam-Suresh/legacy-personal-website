import Image from "next/image";
import {LinearGradient} from "react-text-gradients";
import SchoolInfoCard from "@/components/school_info_card";
import ProjectInfoCard from "@/components/project_info_card";
import React from "react";
import Socials from "@/components/socials";

{/*Navigation Bar*/}
{/*<div*/}
{/*    className={"h-1/3 w-full sticky top-5 border-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded p-1 select-none lg:m-2 md:m-auto"}>*/}
{/*    <div className={"md:flex md:flex-row md:justify-around "}>*/}
{/*        <p className={"text-xl hover:underline border-white underline-offset-auto text-center"}>Home</p>*/}
{/*        <p className={"text-xl hover:underline underline-offset-auto text-center"}>About Me</p>*/}
{/*        <p className={"text-xl hover:underline underline-offset-auto text-center"}>Projects</p>*/}
{/*        <p className={"text-xl hover:underline underline-offset-auto text-center"}>Achievements</p>*/}
{/*        <p className={"text-xl hover:underline underline-offset-auto text-center"}>Quote</p>*/}
{/*        <p className={"text-xl hover:underline underline-offset-auto text-center"}>Contacts</p>*/}
{/*    </div>*/}
{/*</div>*/}

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center pt-5 m-2 md:size-fit md:m-5 xl:m-auto xl:size-1/2 space-y-5">
        <div
            // bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-500
            className={"flex flex-col items-center"}>
          <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}
                          fallbackColor="black">
            <p className={"text-5xl lg:text-6xl"}>Sairam Suresh</p>
          </LinearGradient>
          <p className={"text-center py-2 text-xl lg:text-2xl"}>An Aspiring Computer Scientist and Full Stack App Developer</p>

          <Image src={"/profile_photo.jpg"} alt={""} width={300} height={300}
                 className={"aspect-square w-80 h-80 object-cover rounded-full"}/>
          <Socials />
        </div>

        {/*About Me*/}
        <div className={"space-y-2 pt-6"}>
          {/*Intro*/}
          <p className={"font-bold text-4xl text-center"}>About Me</p>
          <p className={"text-wrap text-center"}>
            I am Sairam Suresh, an aspiring Software Engineer.
            I am a self-taught programmer who currently specialises in building applications to benefit the
            community.
            I learnt ruby <span className={"inline-block"}><Image src={"/ruby.png"} alt={"Ruby"} width={20}
                                                                  height={20}/></span> as my first programming
            language and have moved on to
            learn others such as Python, Swift (SwiftUI), and Dart (Flutter).
          </p>

          {/*Leadership Roles in Schools*/}
          <p className={"font-bold text-2xl w-full text-center lg:text-left xl:text-left"}>Leadership Roles in
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
        </div>

        {/*Projects*/}
        <div className={"pt-6 space-y-2"}>
          {/*Intro*/}
          <p className={"font-bold text-4xl text-center"}>My Projects</p>
          <p className={"text-center"}>These are some projects/experiments that I have embarked on during my programming journey</p>

          <ProjectInfoCard src={"/mathx.png"} alt={"MathX"} name={"MathX"} width={150} height={150}
                           className={"rounded-3xl aspect-square m-auto"}>
            <p>Developer (Android Side)</p>
            <p>
              I was given the task to redevelop the android version of the MathX App, made by SST Inc.
              I remade the app in Flutter, Google's Cross Platform Development Toolkit.
            </p>
            <a href={"https://www.github.com/sairam-suresh/mathx"} className={"aspect-square"}>
              <div className={"flex flex-row justify-normal m-2"}>
                <p className={"w-full"}>View on Github</p>
                <Image
                    src={"/github.png"} alt={"Github"} width={20} height={20} className={"aspect-square"}/>
              </div>
            </a>
          </ProjectInfoCard>

          <ProjectInfoCard src={"/announcer.png"} alt={"SST Announcer"} name={"SST Announcer"} width={150}
                           height={150} className={"rounded-3xl aspect-square m-auto"}>
            <p>Developer (Android Side)</p>
            <p>
              I was given the task to redevelop the android version of the SST Announcer App, made by SST Inc.
              I remade the app in Flutter, Google's Cross Platform Development Toolkit.
            </p>

            <a href={"https://www.github.com/sairam-suresh/sst-announcer"}>
              <div className={"flex flex-row justify-normal m-2"}>
                <p className={"w-full"}>View on Github</p>
                <Image
                    src={"/github.png"} alt={"Github"} width={20} height={20} className={"aspect-square"}/>
              </div>
            </a>
          </ProjectInfoCard>

          <ProjectInfoCard src={"/stacked.png"} alt={"Stacked"} name={"Stacked (WIP)"} width={150}
                           height={150} className={"rounded-3xl aspect-square m-auto"}>
            <p>Creator and Flutter Developer</p>
            <p>
              In order to help out my Scout Unit with their admin duties, I am in the progress of creating an
              app which can support them in said duties.
            </p>

            <a href={"https://www.github.com/sairam-suresh/scout-app-enhanced"}>
              <div className={"flex flex-row justify-normal m-2"}>
                <p className={"w-full"}>View on Github</p>
                <Image
                    src={"/github.png"} alt={"Github"} width={20} height={20} className={"aspect-square"}/>
              </div>
            </a>
          </ProjectInfoCard>

          <ProjectInfoCard src={"/placeholder.png"} alt={"Tello Drone Controller"} name={"Tello Drone Controller"}
                           width={150}
                           height={150} className={"rounded-3xl aspect-square m-auto"}>
            <p>Creator and Flutter Developer</p>
            <p>
              In this hobbyist project, I experiment with the DJI Tello Drone's SDK and build the most
              fleshed out controller for it.
            </p>
          </ProjectInfoCard>
        </div>

        {/*Achievements*/}
        <div className={"pt-6 space-y-2"}>
          {/*Intro*/}
          <p className={"font-bold text-4xl text-center"}>Achievements</p>
          <ul className="list-disc space-y-2">
            <li className="">
              <div className="font-bold text-center lg:text-left xl:text-left text-2xl">2024</div>
              <ul className="list-disc pl-4 ml-4 space-y-1">
                <li>Won 1st place for innovative prototype at Discover Week: SIT-SST Workshop (Battling
                  Climate Change with Technologies)
                </li>
                <li>Won "Sustainable Living Award" from A*Star at IDEX by ACS(I) - Presented product
                  from Discover Week
                </li>
              </ul>
            </li>
            <li className="">
              <div className="font-bold text-center lg:text-left xl:text-left text-2xl">2023</div>
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
            </li>
            <li className="">
              <div className="font-bold text-center lg:text-left xl:text-left text-2xl">2022</div>
              <ul className="list-disc pl-4 ml-4 space-y-1">
                <li className="text-white">Young Technopreneurship Challenge (Participation) - Pitched an AR
                  app for phone repairs
                </li>
                <li className="text-white">Opportunity X (3rd Team Placing) - Presented ISS research on
                  light angle and solar panel voltage
                </li>
                <li className="text-white">International Online Science Project Competition (INTOC) (Silver
                  Award) - Presented ISS research on light angle and solar panel voltage
                </li>
                <li className="text-white">VJC-ASTAR Science Fair (Participation) - Presented ISS research
                  on light angle and solar panel voltage
                </li>
                <li className="text-white">Celebrations@SST - Book Prize (Tamil) and Interview Opportunity
                </li>
                <li className="text-white">Design Thinking with Robotics and Computational Thinking (Bronze
                  Award) - Solved problems using computational thinking
                </li>
                <li className="text-white">Singapore and Asian Schools Math Olympiad Competition (Bronze)
                </li>
              </ul>
            </li>
            <li className="">
              <div className="font-bold text-center lg:text-left xl:text-left text-2xl">2021</div>
              <ul className="list-disc pl-4 ml-4 space-y-1">
                <li className="text-white">Edusave Good Progress Award</li>
                <li className="text-white">Edusave Certificate of Academic Achievement</li>
                <li className="text-white">Singapore and Asian Schools Math Olympiad Competition (Bronze)
                </li>
              </ul>
            </li>
          </ul>

          <footer className={"text-center py-5 text-gray-500"}>
            Created with ❤️ by Sairam Suresh
          </footer>
        </div>
      </main>
  );
}
