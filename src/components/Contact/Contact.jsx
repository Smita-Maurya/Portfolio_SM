import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:smitamaurya02@gmail.com">smitamaurya02@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/smita-maurya-159489229">linkedin.com/smita</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Smita-Maurya">github.com/smita</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/insta.png")} alt="Email icon" />
          <a href="https://instagram.com/smitamaurya0909?igshid=MzNlNGNkZWQ4Mg==">smitamaurya0909</a>
        </li>
      </ul>
    </footer>
  );
};
