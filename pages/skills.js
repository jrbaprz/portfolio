import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <div className="w-screen bg-[#F5F5F5] p-6 md:p-10 xl:p-20">
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

        <div className="md:grid grid-cols-3 md:pt-16">
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
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
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
              <li>Framer Motion</li>
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
