import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLightbulb,
  faEllipsisVertical,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  const localSotredTheme = localStorage.getItem("theme");
  const [theme, settheme] = useState(localSotredTheme);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="pt-6 lg:pt-10 flex items-center justify-between text-slate-900 font-semibold leading-6 dark:text-slate-200">
      <div className="flex items-center gap-x-2">
        <FontAwesomeIcon icon={faCode} className="text-sky-500" size="lg" />
        <p>Omar Fares</p>
      </div>

      <section
        className={
          isNavOpen ? "fixed z-50 inset-0 lg:hidden md:hidden" : "hidden"
        }
      >
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80">
          <div className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
            <FontAwesomeIcon
              className="cursor-pointer absolute top-6.5 right-5 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              icon={faXmark}
              size="xl"
              onClick={() => setIsNavOpen(false)}
            />
            <ul className="space-y-6">
              <li>
                <a
                  className="hover:text-sky-500 dark:hover:text-sky-400"
                  href="#home"
                  onClick={() => setIsNavOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-sky-500 dark:hover:text-sky-400"
                  href="#about"
                  onClick={() => setIsNavOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:text-sky-500 dark:hover:text-sky-400"
                  href="#projects"
                  onClick={() => setIsNavOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="hover:text-sky-500 dark:hover:text-sky-400"
                  href="/contact"
                  onClick={() => setIsNavOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex">
        <ul className="items-center gap-x-8 hidden md:flex lg:flex">
          <li>
            <a
              className="hover:text-sky-500 dark:hover:text-sky-400"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-sky-500 dark:hover:text-sky-400"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:text-sky-500 dark:hover:text-sky-400"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="hover:text-sky-500 dark:hover:text-sky-400"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4 md:border-l md:border-slate-200 lg:border-l lg:border-slate-200 ml-6 pl-6 dark:border-slate-1000">
          <FontAwesomeIcon
            className="cursor-pointer text-sky-500 hover:text-sky-600"
            icon={faLightbulb}
            size="lg"
            onClick={handleThemeSwitch}
          />
          <FontAwesomeIcon
            className="cursor-pointer hover:text-sky-500 md:hidden lg:hidden"
            icon={faEllipsisVertical}
            size="lg"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
