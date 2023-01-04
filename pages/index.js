import React from "react";
import Link from "next/link";
import Skills from "./skills";
import Projects from "./projects";

const index = () => {
  return (
    <>
      <div className="min-h-screen w-screen bg-neutral-100 p-6 md:p-10 xl:p-20">
        <section className="flex flex-col pt-52 md:hidden">
          <h1 className="flex font-extrabold text-7xl">J.R</h1>
          <h1 className="flex font-extrabold text-7xl">Perez</h1>
          <h2 className="text-xl pt-2 font-bold">Frontend Web Developer</h2>
          <h2 className="text-2xl font-light pt-6 underline underline-offset-4">
            dev@jrbaprz.com
          </h2>
        </section>

        <section className="hidden md:flex flex-col pt-72 xl:pt-12">
          <h1 className="flex font-extrabold text-8xl">J.R Perez</h1>
          <h2 className="text-3xl font-bold pt-2">Frontend Web Developer</h2>
        </section>

        <div className="md:hidden">
          <p className="flex text-lg font-light pt-12">
            I&apos;m a frontend web developer based in Toronto, Canada with a
            love for creative design and detail. Let&apos;s get in touch!
          </p>

          <section className="flex gap-6 font-light pt-12 pb-2">
            <Link href="https://www.linkedin.com/in/jrbaprz/">LinkedIn</Link>
            <Link href="https://github.com/jrbaprz">GitHub</Link>
            <Link href="https://www.instagram.com/jrbaprz/">Instagram</Link>
          </section>
        </div>

        <div className="hidden md:grid grid-cols-2 pt-24 pb-6 text-xl lg:text-2xl">
          <section className="flex flex-col font-light gap-2">
            <h2 className="font-light underline underline-offset-4">
              dev@jrbaprz.com
            </h2>
            <Link href="https://www.linkedin.com/in/jrbaprz/">LinkedIn</Link>
            <Link href="https://github.com/jrbaprz">GitHub</Link>
            <Link href="https://www.instagram.com/jrbaprz/">Instagram</Link>
          </section>
          <p className="flex font-light items-end xl:w-96 xl:ml-auto">
            I&apos;m a frontend web developer based in Toronto, Canada with a
            love for creative design and detail. Let&apos;s get in touch!
          </p>
        </div>

        <div>
          <div className="border-black border-t-4 mt-2 md:border-t-6" />
          <div className="flex justify-center pt-20 md:pt-28">
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
          </div>
        </div>
      </div>
      <Skills />
      <Projects />
    </>
  );
};

export default index;
