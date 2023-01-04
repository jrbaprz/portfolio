import React from "react";

const Skills = () => {
  return (
    <>
      <div className="w-screen bg-neutral-100 p-6 md:p-10 xl:p-20">
        <section className="flex flex-col pt-16">
          <h1 className="flex font-extrabold text-5xl md:text-7xl">
            Technical Skills
          </h1>
        </section>

        <div className="md:grid grid-cols-3 md:pt-16">
          <section className="pt-12 text-lg md:pt-0 xl:text-2xl xl:font-light">
            <h1 className="text-2xl font-semibold xl:text-3xl">Languages</h1>
            <ul className="pt-4">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
            </ul>
          </section>

          <section className="pt-8 text-lg md:pt-0 xl:text-2xl xl:font-light">
            <h1 className="text-2xl font-semibold xl:text-3xl">Frameworks</h1>
            <ul className="pt-4">
              <li>React / NextJS</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>REST</li>
            </ul>
          </section>

          <section className="pt-8 text-lg md:pt-0 xl:text-2xl xl:font-light">
            <h1 className="text-2xl font-semibold xl:text-3xl">Tools</h1>
            <ul className="pt-4">
              <li>Git</li>
              <li>Shopify API</li>
              <li>Contentful CMS</li>
              <li>Figma</li>
              <li>Adobe Illustrator</li>
              <li>Asana (Agile Sprint Management)</li>
            </ul>
          </section>
        </div>
        <div className="border-black border-t-4 mt-12 md:border-t-6 xl:border-t-8" />
      </div>
    </>
  );
};

export default Skills;
