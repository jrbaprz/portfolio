import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <div className="overflow-hidden bg-[#FAF9F6] p-10 lg:p-32 xl:pt-32">
        <motion.section
          className="flex flex-col"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.75,
          }}
          viewport={{ once: true }}
        >
          <h1 className="flex font-extrabold text-5xl md:text-7xl">
            Technical Skills
          </h1>
        </motion.section>

        <div className="md:grid grid-cols-4 md:pt-16">
          <section className="pt-12 md:pt-0 xl:text-2xl xl:font-light">
            <motion.h1
              className="text-2xl font-semibold xl:text-3xl"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
              viewport={{ once: true }}
            >
              Languages
            </motion.h1>
            <motion.ul
              className="pt-4"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.25,
              }}
              viewport={{ once: true }}
            >
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>SQL</li>
            </motion.ul>
          </section>

          <section className="pt-8 md:pt-0 xl:text-2xl xl:font-light">
            <motion.h1
              className="text-2xl font-semibold xl:text-3xl"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
              viewport={{ once: true }}
            >
              Frameworks
            </motion.h1>
            <motion.ul
              className="pt-4"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.25,
              }}
              viewport={{ once: true }}
            >
              <li>React / NextJS</li>
              <li>Tailwind CSS</li>
              <li>Node.js/Express.js</li>
              <li>Django</li>
              <li>Framer Motion</li>
            </motion.ul>
          </section>

          <section className="pt-12 md:pt-0 xl:text-2xl xl:font-light">
            <motion.h1
              className="text-2xl font-semibold xl:text-3xl"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
              viewport={{ once: true }}
            >
              Databases
            </motion.h1>
            <motion.ul
              className="pt-4"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.25,
              }}
              viewport={{ once: true }}
            >
              <li>Postgres</li>
            </motion.ul>
          </section>

          <section className="pt-8 md:pt-0 xl:text-2xl xl:font-light">
            <motion.h1
              className="text-2xl font-semibold xl:text-3xl"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
              viewport={{ once: true }}
            >
              Tools
            </motion.h1>
            <motion.ul
              className="pt-4"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.25,
              }}
              viewport={{ once: true }}
            >
              <li>Git</li>
              <li>Figma</li>
              <li>Adobe Illustrator</li>
              <li>Asana (Agile Sprint Management)</li>
            </motion.ul>
          </section>
        </div>
        <motion.div
          className="border-black border-t-4 mt-12 md:border-t-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
        />
      </div>
    </>
  );
};

export default Skills;
