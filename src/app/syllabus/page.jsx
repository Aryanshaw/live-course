import React from "react";
import styles from "./syllabus.module.css";
import Image from "next/image";

const Syllabus = () => {
  return (
    <div className={styles.container}>
      <h1>Syllabus</h1>
      <br />
      <div className={styles.subjects}>
        <div className={styles.chemistry}>
          <Image src={"/chemistryIcon.png"} alt="" width={30} height={30} />
          <h4>Chemistry</h4>
          <p>→</p>
        </div>
        <div className={styles.physics}>
          <Image src={"/phyicon.png"} alt="" width={30} height={30} />
          <h4>Physics</h4>
          <p>→</p>
        </div>
        <div className={styles.biology}>
          <Image src={"/bioIcon.png"} alt="" width={30} height={30} />
          <h4>Biology</h4>
          <p>→</p>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
