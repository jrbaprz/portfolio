import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="min-w-screen bg-black p-6 md:p-10 xl:p-20">
      <h1 className="flex justify-end text-white text-5xl pb-4 pt-16 font-bold md:text-7xl">
        Let&apos;s Connect
      </h1>
      <ul className="flex justify-end gap-4 py-4 text-white md:text-xl">
        <Link
          href="mailto:dev@jrbaprz.com"
          className="hover:text-neutral-500 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-300 ease-out"
        >
          Email
        </Link>
        <Link
          className="hover:text-neutral-500 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-300 ease-out"
          href="https://www.linkedin.com/in/jrbaprz/"
        >
          LinkedIn
        </Link>
        <Link
          className="hover:text-neutral-500 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-300 ease-out"
          href="https://github.com/jrbaprz"
        >
          GitHub
        </Link>
      </ul>
      <p className="flex justify-end py-4 text-xs font-light text-white">
        © J.R Perez. All Rights Reserved. 2023
      </p>
    </footer>
  );
};

export default Footer;
