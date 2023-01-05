import React from "react";
import Link from "next/link";
import Head from "next/head";
import Skills from "./skills";
import Projects from "./projects";
import { motion } from "framer-motion";

const index = () => {
  return (
    <>
      <Head>
        <title>J.R Perez | Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen w-screen bg-[#F5F5F5] p-6 md:p-10 xl:p-20 xl:pt-32">
        <motion.section
          className="flex flex-col pt-24 md:hidden"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 3,
          }}
          viewport={{ once: true }}
        >
          <h1 className="flex font-extrabold text-7xl">J.R</h1>
          <h1 className="flex font-extrabold text-7xl">Perez</h1>
          <h2 className="text-xl pt-2 font-bold">Frontend Web Developer</h2>
          <div className="pt-6">
            <Link
              href="mailto:dev@jrbaprz.com"
              className="text-xl font-light underline underline-offset-4 md:hidden"
            >
              dev@jrbaprz.com
            </Link>
          </div>
        </motion.section>

        <div className="md:hidden">
          <motion.p
            className="flex text-lg font-light pt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            viewport={{ once: true }}
          >
            Hi there! I&apos;m a web developer based in Toronto, Canada with a
            love for creative design and detail.
          </motion.p>

          <section className="flex gap-6 font-light pt-12 pb-2">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 2,
              }}
              viewport={{ once: true }}
            >
              <Link href="https://www.linkedin.com/in/jrbaprz/">LinkedIn</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 2.25,
              }}
              viewport={{ once: true }}
            >
              <Link href="https://github.com/jrbaprz">GitHub</Link>
            </motion.div>
          </section>
        </div>

        {/* ===== Medium Breakpoint ===== */}

        <motion.section
          className="hidden md:flex flex-col pt-72 xl:pt-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 3,
          }}
          viewport={{ once: true }}
        >
          <h1 className="flex font-extrabold text-8xl xl:text-[8rem]">
            J.R Perez
          </h1>
          <h2 className="text-3xl font-bold pt-2">Frontend Web Developer</h2>
        </motion.section>

        <div className="hidden md:grid grid-cols-2 pt-24 pb-6 text-xl lg:text-2xl">
          <section className="flex flex-col font-light gap-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.75,
              }}
              viewport={{ once: true }}
            >
              <Link
                href="mailto:dev@jrbaprz.com"
                className="mr-auto hover:text-neutral-500 bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-300 ease-out"
              >
                Email
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 2,
              }}
              viewport={{ once: true }}
            >
              <Link
                className="mr-auto hover:text-neutral-500 bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-300 ease-out"
                href="https://www.linkedin.com/in/jrbaprz/"
              >
                LinkedIn
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 2.25,
              }}
              viewport={{ once: true }}
            >
              <Link
                className="mr-auto hover:text-neutral-500 bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-300 ease-out"
                href="https://github.com/jrbaprz"
              >
                GitHub
              </Link>
            </motion.div>
          </section>
          <motion.p
            className="flex font-light items-end xl:w-96 xl:ml-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            viewport={{ once: true }}
          >
            Hi there! I&apos;m a web developer based in Toronto, Canada with a
            love for creative design and detail.
          </motion.p>
        </div>

        <div>
          <motion.div
            className="border-black border-t-4 mt-2 md:border-t-6"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 2.75,
            }}
            viewport={{ once: true }}
          />
          <motion.div
            className="flex justify-center pt-12 md:pt-28 xl:pt-12"
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 4,
            }}
            viewport={{ once: true }}
          >
            <svg
              className="w-8 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              ></path>
            </svg>
          </motion.div>
        </div>
      </div>
      <Skills />
      <Projects />
    </>
  );
};

export default index;
