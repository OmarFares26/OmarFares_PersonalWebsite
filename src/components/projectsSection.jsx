import React, { useState } from "react";

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const projectsCardsArray = [
    {
      projectsType: "Web",
      projects: [
        {
          title: "Flappy Bird",
          describtion: "2D Game",
          gitHub: "link",
          image: "",
        },
        {
          title: "BlackJack",
          describtion: "Card Game",
          gitHub: "link",
          image: "",
        },
        {
          title: "Social Media",
          describtion: "Simple Social Media Platform",
          gitHub: "link",
          image: "",
        },
      ],
    },
    {
      projectsType: "Mobile",
      projects: [
        {
          title: "BBetter",
          describtion: "Habit tracking app",
          gitHub: "link",
          image: "",
        },
        {
          title: "UASync",
          describtion: "Social Media App For University",
          gitHub: "link",
          image: "",
        },
        {
          title: "Hangman",
          describtion: "Guessing Game",
          gitHub: "link",
          image: "",
        },
      ],
    },
  ];

  const renderButtons = () => {
    const filterOptions = ["All", "Web", "Mobile"];
    return filterOptions.map((filter) => (
      <button
        key={filter}
        className={`tab-button ${
          selectedFilter === filter ? "selected" : ""
        } w-28 h-12 bg-slate-900 hover:bg-sky-500 text-white text-xs md:text-sm lg:text-sm drop-shadow-xl rounded-lg dark:bg-slate-700 dark:hover:bg-sky-500`}
        onClick={() => setSelectedFilter(filter)}
      >
        {filter}
      </button>
    ));
  };

  const renderProjects = () => {
    const filteredProjects =
      selectedFilter === "All"
        ? projectsCardsArray.flatMap((category) => category.projects)
        : projectsCardsArray.find(
            (category) => category.projectsType === selectedFilter
          )?.projects ?? [];
    return filteredProjects.map((project, index) => (
      <div
        key={index}
        className="group rounded-3xl bg-sky-50 p-6 dark:bg-slate-800/80 hover:bg-sky-100 dark:hover:bg-slate-700/50"
      >
        <div className="shadow-[0_2px_8px_rgba(15,23,42,0.08)]">
          <img
            className="rounded-md"
            alt="projects pic"
            src="/images/webdevelopmentprojects.png"
            width="270"
            height="200"
          />
        </div>
        <div className="flex flex-col mt-6">
          <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
            {project.title}
          </h2>
          <p className="w-full text-[0.8125rem] leading-6 text-slate-500 dark:text-slate-400">
            {project.describtion}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto pt-20 sm:pt-24 md:pt-24 lg:pt-32 md:flex lg:flex md:flex-col lg:flex-col"
    >
      <div>
        <h2 className="font-semibold text-sky-500">Browse My Recent</h2>
        <p className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight mt-4 dark:text-slate-50">
          Projects
        </p>
      </div>

      <div className="flex items-left gap-4 mt-8">{renderButtons()}</div>
      <div className="flex flex-wrap gap-8 mt-8">{renderProjects()}</div>
    </section>
  );
};

export default ProjectsSection;
