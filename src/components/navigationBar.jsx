import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLightbulb,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  const localSotredTheme = localStorage.getItem("theme");
  const [theme, settheme] = useState(localSotredTheme);

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
          />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
