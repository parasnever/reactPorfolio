import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import hipsster from"../../assets/hipsster.png";
import freshBurger from "../../assets/fresh-burger.png"
import ProjectCard from "../../common/ProjectCard";
import fitLift from "../../assets/fitlift.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/parasnever/reactPorfolio"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/parasnever/reactPorfolio"
          h3="Fresh Burger"
          p="Hamburger Resturant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/parasnever/reactPorfolio"
          h3="Hipsster"
          p="Glass Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/parasnever/reactPorfolio"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;