import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import styles from "./livecourse.module.css";
import Image from "next/image";

const LiveCourse = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.centerContainer}>
        <div>
          <Image src={"/img1.png"} width={578} height={528} alt="" />
        </div>
        <div className={styles.infoContainer}>
          <p>
            <span style={{ color: "yellow" }}>full syllabus + </span>
            revision + test series
          </p>
          <h1 style={{ marginTop: 10 }}>
            <span style={{ color: "yellow" }}>NEET</span> rankers course
          </h1>
          <br />
          <p>
            Discover the fundamental concepts and technologies that power the
            modern web in this introductory web development course. Dive into
            the world of HTML, CSS, and JavaScript—the building blocks of web
            development.
          </p>
          <br />
          <div className={styles.batchInfoContainer}>
            <span>
              <Image src={"/icon1.png"} alt="" width={32} height={32} />
              <p>Biology , Chemistry , Physics</p>
            </span>
            <span>
              <Image src={"/icon2.png"} alt="" width={32} height={32} />
              <p>Batch starts from 24/02/10</p>
            </span>
          </div>
          <div className={styles.priceInfoContainer}>
            <div className={styles.priceDetails}>
              <p>Starting at</p>
              <span
                style={{
                  color: "yellow",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h1>$ 1,660</h1>
                <p>/month</p>
              </span>
              <span style={{ display: "flex", alignItems: "center" }}>
                <p style={{ color: "red", textDecoration: "line-through" }}>
                  $2550
                </p>
                <p>* offer valid till 21st june</p>
              </span>
            </div>
            <div className={styles.discount}>
              <h2>40% Off</h2>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <div>
              <button type="button" className={styles.btn1}>
                enroll at $1660 / month ↗
              </button>
            </div>
            <div className={styles.btn2}>
              <p>start learning for free ↗</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCourse;
