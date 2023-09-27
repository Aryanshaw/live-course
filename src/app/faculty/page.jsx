import React from "react";
import styles from "./faculty.module.css";
import Image from "next/image";

const Faculty = () => {
  return (
    <div className={styles.container}>
      <h1>Faculty</h1>
      <div className={styles.teacherContainer}>
        <Image
          src={"/Prerana.png"}
          width={392}
          height={463}
          alt=""
          className={styles.teacherimg}
        />
        <Image
          src={"/Anirudh.png"}
          width={392}
          height={463}
          alt=""
          className={styles.teacherimg}
        />
        <Image
          src={"/Aparna.png"}
          width={392}
          height={463}
          alt=""
          className={styles.teacherimg}
        />
      </div>
      <br />
      <div className={styles.lowerbtn}>
        <h4>meet the teachers ↗</h4>
      </div>
    </div>
  );
};

export default Faculty;
