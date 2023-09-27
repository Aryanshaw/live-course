import React from "react";
import styles from "./scholarShip.module.css";
import Image from "next/image";

const ScholarShip = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={"/scholarship.png"}
          alt=""
          height={300}
          width={330}
          className={styles.img1}
        />
        <Image
          src={"/scholarshipbg.png"}
          alt=""
          height={250}
          width={500}
          className={styles.img2}
        />
      </div>
      <div className={styles.infoLeftContainer}>
        <h1>
          get up to <span style={{ color: "yellow" }}> 50% scholarShip</span>
        </h1>
        <br />
        <p>
          We’ll guide you in making a study plan that helps you study
          efficiently and in a balanced manner!
        </p>
        <br />
        <br />
        <div className={styles.lowerbtn}>apply to get scholarship ↗ </div>
      </div>
    </div>
  );
};

export default ScholarShip;
