import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
      <div className="border-t border-slate-200 pt-10 pb-4 dark:border-slate-200/5">
        <div className="flex flex-col justify-center items-center ">
          <ul className="flex gap-x-8">
            <li>
              <a
                className="text-sm md:text-base lg:text-base leading-6 text-slate-500 hover:text-sky-500 dark:hover:text-sky-400"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-sm md:text-base lg:text-base leading-6 text-slate-500 hover:text-sky-500 dark:hover:text-sky-400"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-sm md:text-base lg:text-base leading-6 text-slate-500 hover:text-sky-500 dark:hover:text-sky-400"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-sm md:text-base lg:text-base leading-6 text-slate-500 hover:text-sky-500 dark:hover:text-sky-400"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <ul className="mt-6 flex gap-x-8">
            <li>
              <a
                href="https://github.com/OmarFares26"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-slate-500 hover:text-sky-500"
                  size="lg"
                  icon={faGithub}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/omar-fares-03049021b/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-slate-500 hover:text-sky-500"
                  size="lg"
                  icon={faLinkedin}
                />
              </a>
            </li>
            <li>
              <a href="mailto:omar.fares2626@gmail.com">
                <FontAwesomeIcon
                  className="text-slate-500 hover:text-sky-500"
                  size="lg"
                  icon={faEnvelope}
                />
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm leading-6 text-slate-500">
            © 2024 Omar Fares. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
