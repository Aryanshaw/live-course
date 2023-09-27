import React from "react";
import styles from "./benfit.module.css";
import Image from "next/image";

const Benfit = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.leftContainer}>
          <h1>multiyear</h1>
          <h1 style={{ color: "rgba(0, 123, 255, 0.703)" }}>Benifts</h1>
          <br />
          <p>Choose your plans accordingly</p>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.smallContainer}>
            <div className={styles.infoSection}>
              <div className={styles.duration}>
                <span>24</span>
                <span>months</span>
              </div>
              <div>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <h3
                    style={{
                      color: "rgb(0, 123, 255)",
                    }}
                  >
                    $ 1,660
                  </h3>
                  <p>/month</p>
                </span>
                <br />
                <p>total $9900</p>
                <p style={{ textDecoration: "line-through", color: "grey" }}>
                  $12000
                </p>
              </div>
            </div>
            <br />
            <p style={{ fontWeight: "500", textAlign: "center" }}>
              42.k students have enrolled
            </p>
            <br />
            <button className={styles.button}>enroll</button>
          </div>
          <div className={styles.smallContainer}>
            <div className={styles.infoSection}>
              <div className={styles.duration}>
                <span>24</span>
                <span>months</span>
              </div>
              <div>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <h3
                    style={{
                      color: "rgb(0, 123, 255)",
                    }}
                  >
                    $ 1,660
                  </h3>
                  <p>/month</p>
                </span>
                <br />
                <p>total $9900</p>
                <p style={{ textDecoration: "line-through", color: "grey" }}>
                  $12000
                </p>
              </div>
            </div>
            <p style={{ fontWeight: "500", textAlign: "center" }}>
              42.k students have enrolled
            </p>
            <button className={styles.button}>enroll</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={styles.lowerContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={"/img2bg.png"}
            alt=""
            width={500}
            height={250}
            className={styles.img1}
          />
          <Image
            src={"/img2.png"}
            alt=""
            width={240}
            height={250}
            className={styles.img2}
          />
        </div>
        <div className={styles.infoLeftContainer}>
          <h1>
            mind over matters with{" "}
            <span style={{ color: "rgb(0, 123, 255)" }}>mentors</span>
          </h1>
          <p>
            We’ll guide you in making a study plan that helps you study
            efficiently and in a balanced manner!
          </p>
          <br />
          <div className={styles.lowerbtn}>lets plan together ↗ </div>
        </div>
      </div>
    </div>
  );
};

export default Benfit;
