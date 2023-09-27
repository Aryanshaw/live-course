import React from "react";
import styles from "./liveCoursePage2.module.css";
import Image from "next/image";

const LiveCoursePage2 = () => {
  return (
    <div className={styles.container}>
      {/* navbar */}
      <div className={styles.navbar}>
        <div className={styles.activeTab + " " + styles.navItem}>OverView</div>
        <div className={styles.navItem}>Live session</div>
        <div className={styles.navItem}>revice with recordings</div>
        <div className={styles.navItem}>practice mock test</div>
        <div className={styles.navItem}>study with IL books</div>
      </div>

      {/* center component  */}

      <div className={styles.centerContainer}>
        <div className={styles.leftContainer}>
          <h1>all Rounder</h1>
          <h1 style={{ color: "rgb(0, 123, 255" }}>learning!</h1>

          <span>
            1000 + hrs <p> live classes</p>
          </span>
          <span>
            3000 + hrs <p> recorded classes</p>
          </span>
          <span>
            <p>AITS - 24 </p> biweekly mock tests
          </span>
          <span>
            world class<p> IL books</p>
          </span>
        </div>
        <div className={styles.rightContainer}>
          <Image src={"/imgpage2.png"} alt="" width={642} height={524} />
        </div>
      </div>
    </div>
  );
};

export default LiveCoursePage2;
