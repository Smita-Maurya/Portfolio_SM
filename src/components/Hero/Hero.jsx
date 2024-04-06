import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Smita Maurya</h1>
        <p className={styles.description}>
        I am pre-final year student pursuing a Bachelor's degree in Computer Science 
        Engineering from Indira Gandhi Delhi Technical University for Women.
        Skilled in C++ , engineering principles, problem solving, and frontend web development.
        Currently, my focus lies on honing my backend web development skills and 
        mastering Data Structures and Algorithms. I believe in the importance of 
        continuous learning and am always eager to tackle new challenges that allow 
        me to broaden my knowledge and skillset.
        </p>
        <a href="https://drive.google.com/file/d/1KLBdsSf3lFjWqPYYb-eVXIzozFleT-6n/view?usp=drivesdk" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img //hero/heroImage.png
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
