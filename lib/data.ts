import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import relayclosingImg from "@/public/relayclosing.png";
import iotzenImg from "@/public/iotzen.png";
import readioImg from "@/public/readio.png";
import buildsuiteImg from "@/public/buildsuite.png";
import parkImg from "@/public/park.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Electronics Graduate",
    location: "Pondicherry University",
    description:
      "Graduated as Electronics and Communication Engineer with 7.7 CGPA with passion towards Software Development.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Software Engineer",
    location: "Cognizant, Chennai",
    description:
      "I worked as a Software Engineer( React, Java & Spring Boot ) for 1 year. I also upskilled to the Full-stack engineer by leading a team of 4 and built a Travel booking App in the span of 2 months.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Software Engineer",
    location: "Zendynamix, Bengaluru",
    description:
      "I worked as a Software Engineer( React, Flutter, Node & Angular ) for 1+ year. Gained Knowlegdge on realtime applications and production processes.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Founder",
    location: "Readio, Bengaluru",
    description:
      "After working on realtime applications got an Idea for a Mobile App to convert PDF files into audiobook with multi language feature. Designed, Developed and Deployed the same in Playstore(5K+ Downloads & 1k+ Active users) and working for IOS deployment.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "Senior Flutter Developer",
    location: "BuildSuie, Remote",
    description:
      "I'm now a Senior Flutter Developer working on a Construction Management Mobile App(Flutter) & a AI Chatbot(React wih Next JS) specialized for Construction related queries from scratch.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "BuildSuite",
    description:
      "Working as a Senior Flutter developer on this Construction Managemnt project. Clients can manage the contruction process seamlessly.",
    tags: ["Flutter", "Firebase", "GetX & Bloc", "ERP"],
    company: "BuildSuite",
    imageUrl: buildsuiteImg,
  },
  {
    title: "Readio",
    description:
      "I've designed and developed Readio. It is a PDF to audiobook converter app that allows users to listen their PDFs in multiple languages.",
    tags: ["Flutter", "Firebase", "Node JS", "Google API", "Getx", "Bloc"],
    company: "Personal",
    imageUrl: readioImg,
  },
  {
    title: "Park",
    description:
      "Working as a React(Next JS) developer on this ChatGPT like AI Chatbot specialized for Construction related queries.",
    tags: ["Flutter", "Firebase", "GetX & Bloc", "ERP"],
    company: "BuildSuite",
    imageUrl: parkImg,
  },


  {
    title: "Relay Closing",
    description:
      "I worked as a front-end developer on this Mortage Managemnt project for American Firm. Agents can manage the mortages taken by people.",
    tags: ["Angular", "Typescript", "Firebase Functions", "NgRx"],
    company: "Zendynamix",
    imageUrl: relayclosingImg,
  },
  {
    title: "IoTZen",
    description:
      "I worked as a front-end Developer in an IoT enabled cloud based delivery management system. We can track pressure, temperature, etc.",
    tags: ["Angular", "TypeScript", "Next.js", "NgRx", "Node JS"],
    company: "Zendynamix",
    imageUrl: iotzenImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Flutter",
  "Bloc",
  "GetX",
  "Firebase",
  "JavaScript",
  "TypeScript",
  "Angular",
  "NgRx",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
