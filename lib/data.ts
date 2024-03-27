import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: " bootcamp de front-end",
    location: "Codigo Facilito,",
    description:
      "Me gradue despues de 5 meses. E inmediatamente me puse a desarrollar paginas",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Curso Profesional De desarrolo web",
    location: "Codigo Facilito",
    description:
      "Despues de un largo año de estudio logre resivirme en un curso profesional de desarrolo web",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Codo A Codo",
    description:
      "Actualmente me encuentro en un Bootcamp de Full-stack Python para poder terminar mi desarrollo profesional  .",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Travel App Hilink",
    description:
      "Trabaje en una App de camping llamada Hilink",
    tags: ["React", "Next.js", "Tailwind", ],
    imageUrl:wordanalyticsImg ,
  },
  {
    title: "Codo a Codo e-Comerce",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;
