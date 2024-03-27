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
      <SectionHeading>Sobre mi</SectionHeading>
      <p className="mb-3">
        Despues de haberme graduado en la escuela tecnica{" "}
        <span className="font-medium">como tecnico electromecanico</span>, decidi empezar con la programacion front-end . Me inscribi en un bootcamp de {" "}
        <span className="font-medium">front-end web development</span>.{" "}
        <span className="italic">Mi parte favorita de programar</span>es la resolucion de problemas. 
        <span className="underline"> Amo </span> el
        sentimiento de por fin saber cual era el error. Mi conjunto principal de tecnolgias
        son{" "}
        <span className="font-medium">
          React, Next.js, html, and css
        </span>
        . Tambien estoy familiarizado con  TypeScript . Y siempre estoy tratando de
        aprender nuevas tecnologias. Actualmente estoy buscando {" "}
        <span className="font-medium">un puesto de tiempo completo</span> como 
         front-developer.
      </p>

      <p>
        <span className="italic">Cuando no estoy programando </span>, disfruto jugando
        o mirando series. Tambien {" "}
        <span className="font-medium">aprendiendo nuevas cosas</span>. Actualmente
        estoy aprendiendo{" "}
        <span className="font-medium">sobre sicologia y habilidades blandas</span>. 
      </p>
    </motion.section>
  );
}
