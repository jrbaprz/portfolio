import { React, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <>
      <div className="overflow-hidden bg-[#FAF9F6] p-10 lg:p-32 xl:pt-32">
        <motion.section
          className="flex flex-col pt-16"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.75,
          }}
          viewport={{ once: true }}
        >
          <h1 className="flex font-extrabold text-5xl md:text-7xl">Projects</h1>
        </motion.section>

        {/* ===== Ditta TO ===== */}

        <div className="pb-12 lg:grid grid-cols-2 md:pt-16">
          <motion.section
            className="pt-12 md:pt-0"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.75,
            }}
            viewport={{ once: true }}
          >
            <Link href="https://dittaartigianaleto.vercel.app/">
              <video
                className="border-4 border-black mb-2 rounded-md"
                src="/Ditta.mp4"
                alt="Video of Ditta"
                type="video/mp4"
                defaultMuted
                muted={true}
                autoPlay={true}
                loop={true}
                playsInline={true}
                ref={vidRef}
              />
            </Link>
          </motion.section>

          <motion.section
            className="lg:flex flex-col justify-center lg:p-8"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.75,
            }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl font-semibold xl:text-3xl">
              Ditta Artigianale Toronto
            </h1>
            <h2 className="md:text-lg xl:text-2xl">
              Business and e-Commerce Website
            </h2>
            <p className="font-light pt-4 md:text-lg">
              An elegant business website for Ditta Artigianale Toronto using
              NextJS, Tailwind CSS, Framer Motion, and Shopify Storefront API.
            </p>
            <Link href="https://dittaartigianaleto.vercel.app/">
              <div className="flex pt-4 hover:text-neutral-500 duration-200">
                <p className="pr-1 md:text-lg">Explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 flex items-center"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          </motion.section>
        </div>

        {/* ===== Stakreative ===== */}

        <div className="lg:grid grid-cols-2 md:pt-16">
          <motion.section
            className="pt-4 text-lg md:pt-0 order-2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.75,
            }}
            viewport={{ once: true }}
          >
            <Link href="http://stakbuilds.com/">
              <video
                className="border-4 border-black mb-2 rounded-md"
                src="/Stakreative.mp4"
                alt="Video of Stakreative"
                type="video/mp4"
                defaultMuted
                muted={true}
                autoPlay={true}
                loop={true}
                playsInline={true}
                ref={vidRef}
              />
            </Link>
          </motion.section>
          <motion.section
            className="lg:flex flex-col justify-center lg:text-right lg:p-8"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.75,
            }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl font-semibold xl:text-3xl">Stakreative</h1>
            <h2 className="md:text-lg xl:text-2xl">
              Creative Real Estate Wordpress Website
            </h2>
            <p className="font-light pt-4 md:text-lg">
              A redesign of client&apos;s creative real estate agency website
              using Figma and Wordpress.
            </p>
            <Link href="http://stakbuilds.com/">
              <div className="flex pt-4 lg:justify-end hover:text-neutral-500 duration-200">
                <p className="pr-1 md:text-lg">Explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 flex items-center"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          </motion.section>
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

export default Projects;
