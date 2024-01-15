"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Electronics</span>, I decided to pursue my
        passion for programming. I've started my coding journey with <span className="font-medium">Java</span> and gradually picked up{" "}
        <span className="font-medium">React & Flutter</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of creating products which solves a real world problem. My core stack
        is{" "}
        <span className="font-medium">
          Flutter, React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and AWS. I am always looking to
        learn new technologies. I am currently working as a{" "}
        <span className="font-medium">Senior Flutter Developer</span> at BuildSuite.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        watching movies, reading self-help books, and playing piano. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
