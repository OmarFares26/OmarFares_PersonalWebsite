import React from "react";

const PersonalProfile = () => {
  return (
    <div
      id="home"
      className="max-w-5xl mx-auto pt-20 sm:pt-24 md:pt-24 lg:pt-32 lg:flex md:flex"
    >
      <div className="content-center md:pr-8 lg:pr-8">
        <h1 className="text-slate-900 mb-6 font-extrabold text-4xl sm:text-5xl lg:text-6xl dark:text-white">
          Hi👋
          <br />
          I'm <span className="text-sky-500"> Omar fares , </span>
          <br /> a skilled Software Developer.
        </h1>
        <p className="text-base text-slate-600 mb-6 max-w-3xl md:text-lg lg:text-lg dark:text-slate-400">
          I create tailored website solutions designed to propel your business
          forward. My aim is to boost your conversion rates and enhance
          performance across all aspects.
        </p>
        <div className="flex gap-4 mb-6 text-sm font-normal md:text-bases md:font-medium lg:text-base lg:font-medium">
          <a
            href="#contact"
            className="bg-sky-500 hover:bg-sky-600 text-white font-medium	h-12 px-6 rounded-lg w-44 flex items-center justify-center"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="bg-slate-900 hover:bg-slate-700 text-white font-medium	h-12 px-6 rounded-lg w-44 flex items-center justify-center dark:bg-slate-700 dark:hover:bg-slate-600"
          >
            Projects
          </a>
        </div>
      </div>

      <img
        className="rounded-lg pt-4 md:pt-0 lg:pt-0"
        alt="omarspicture"
        src="/images/omarselfie.jpeg"
        width="350"
        height="200"
      />
    </div>
  );
};

export default PersonalProfile;
