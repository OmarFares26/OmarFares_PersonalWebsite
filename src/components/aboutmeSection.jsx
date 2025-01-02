import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const AboutMeSection = () => {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto pt-20 sm:pt-24 md:pt-24 lg:pt-32 md:flex lg:flex md:flex-col lg:flex-col"
    >
      <div>
        <h2 className="font-semibold text-sky-500">Get To Know More</h2>
        <p className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight mt-4 dark:text-slate-50">
          About Me
        </p>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="text-base text-slate-600 md:text-lg lg:text-lg dark:text-slate-400">
          <p className="mb-4">
            I am Omar Fares, a 23-year-old software developer who holds a
            Bachelor's degree in Creative Computing from FH Sankt Pölten. My
            passion lies in crafting exceptional digital experiences.
          </p>
          <p className="mb-4">
            In web development, I excel in Java, JavaScript, TypeScript,
            ReactJS, Redux, HTML and CSS. Whether it's building responsive layouts or
            optimizing performance, I thrive on the challenges of bringing web
            applications to life.
          </p>
          <p className="mb-4">
            I'm equally adept in mobile development, with expertise in Kotlin,
            Flutter, and React Native. From crafting native mobile apps to
            ensuring seamless user experiences, I'm committed to pushing
            boundaries in the mobile landscape.
          </p>
          <p className="mb-8">
            Beyond coding, I'm a creative problem solver who thrives in
            collaborative environments, always eager to transform ideas into
            elegant solutions.
          </p>
        </div>

        <a
          href="/pdf/OmarFaresCV2025.pdf"
          className="bg-sky-500 hover:bg-sky-600 text-sm md:text-base lg:text-base text-white font-medium h-12 w-44 rounded-lg flex items-center justify-center"
        >
          Download CV
          <FontAwesomeIcon className="pl-2" icon={faDownload} size="lg" />
        </a>
      </div>
    </section>
  );
};

export default AboutMeSection;
