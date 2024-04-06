import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Experience</h2>
      
      <div className={styles.content}>
      <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>SDE Intern, .tension</h3>
              <p>Jan, 2024- Mar, 2024</p>
              <p>
              As an SDE intern, I was focused on creating a dynamic and user-friendly Chrome 
              Extension(Application Record Extension) for job seekers.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Research Intern</h3>
              <p>May, 2023-Aug, 2023</p>
              <p>
              I wrote a research paper titled ‘Apple Leaves Diseases Detection Using Deep Learning' 
              that got published by Springer. We found a new way to use deep learning to 
              spot diseases in apple trees accurately.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>DSA Mentor, GDSC</h3>
              <p>Sept, 2023- Present</p>
              <p>
              Mentoring over 100 learners to help them understand fundamental concepts, 
              problem-solving techniques, and coding practices related to Data Structures and Algorithm.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer, Synergy</h3>
              <p>Sept, 2023- Present</p>
              <p>
              Contributed to the creation and maintenance of the Ignite website. Proficient in 
              developing and customizing WordPress websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer, E-cell</h3>
              <p>Jun, 2023- Present</p>
              <p>
              Proficient web developer at E-cell, specializing in crafting innovative and 
              user-friendly websites.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
