import React from "react";
import Link from "next/link";
import Image from "next/image";
import ditta from "../public/ditta.jpg";
import stak from "../public/stak.jpg";

const Projects = () => {
  return (
    <>
      <div className="min-h-screen w-screen bg-neutral-100 p-6 md:p-10 xl:p-16">
        <section className="flex flex-col pt-16">
          <h1 className="flex font-extrabold text-5xl md:text-7xl">Projects</h1>
        </section>

        <div className="md:grid grid-cols-3 md:pt-16">
          <section className="pt-12 text-lg md:pt-0">
            <Link href="https://dittaartigianaleto.vercel.app/">
              <Image
                src={ditta}
                alt="Photo of Ditta Hero Section"
                className="border-2 border-black mb-2 rounded-md"
              />
            </Link>
            <h1 className="text-lg font-semibold">Ditta Artigianale Toronto</h1>
            <h2 className="text-sm">Business and e-Commerce Website</h2>
            <p className="text-sm font-light pt-4">
              An elegant business website for Ditta Artigianale Toronto using
              NextJS, Tailwind CSS, Framer Motion, and Shopify Storefront API.
            </p>
            <Link href="https://dittaartigianaleto.vercel.app/">
              <div className="flex pt-4">
                <p className="text-sm pr-1">Explore</p>
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
          </section>

          <section className="pt-12 text-lg md:pt-0">
            <Link href="http://stakbuilds.com/">
              <Image
                src={stak}
                alt="Photo of Stakreative Hero Section"
                className="border-2 border-black mb-2 rounded-md"
              />
            </Link>
            <h1 className="text-lg font-semibold">Stakreative</h1>
            <h2 className="text-sm">Creative Real Estate Wordpress Website</h2>
            <p className="text-sm font-light pt-4">
              A redesign of client&apos;s creative real estate agency website
              using Figma and Wordpress.
            </p>
            <Link href="http://stakbuilds.com/">
              <div className="flex pt-4">
                <p className="text-sm pr-1">Explore</p>
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
          </section>
        </div>
        <div className="border-black border-t-4 mt-12 md:border-t-6 xl:border-t-8" />
      </div>
    </>
  );
};

export default Projects;
