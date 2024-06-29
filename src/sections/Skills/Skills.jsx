import React from "react";
import styles from "./Skillsstyles.module.css";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
import checkMarkIconDark from "../../assets/checkmark-dark.svg"
import checkMarkIconLight from "../../assets/checkmark-light.svg"

function Skills() {
    const {theme} = useTheme()
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='HTML'/>
      </div>
    </section>
  );
}

export default Skills;