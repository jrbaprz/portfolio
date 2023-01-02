import React from "react";

const index = () => {
  return (
    <>
      <div className="min-h-screen w-screen bg-neutral-100 p-6 space-y-12">
        {/* <section className="pt-20">
          <div className="bg-[url('../public/profile.jpg')] bg-center bg-cover flex justify-center mx-auto h-52 w-52" />
        </section> */}
        <section className="flex flex-col pt-52">
          <h1 className="flex font-extrabold text-7xl">J.R</h1>
          <h1 className="flex font-extrabold text-7xl">Perez</h1>
          <h2 className="text-2xl font-light pt-4 underline underline-offset-4">
            dev@jrbaprz.com
          </h2>
        </section>

        <p className="flex text-lg font-light">
          I&apos;m a frontend web developer based in Toronto, Canada with a love
          for creative design and detail. Let&apos;s get in touch!
        </p>

        <section className="flex gap-6 font-light">
          <a href="https://www.linkedin.com/in/jrbaprz/">LinkedIn</a>
          <a href="https://github.com/jrbaprz">GitHub</a>
        </section>
        <div className="border-black border-t-4" />
        <div className="flex justify-center pt-12">
          <svg
            class="w-8"
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
    </>
  );
};

export default index;
