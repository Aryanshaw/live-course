import React from "react";
import styles from "./bookPage.module.css";
import Image from "next/image";

const Book = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Image src={"/botany.png"} alt="" width={436} height={584} />
      </div>
      <div className={styles.rightContainer}>
        <div style={{ display: "flex", fontSize: "25px" }}>
          <h1 style={{ color: "rgba(0, 123, 255, 0.703)", marginRight: "8px" }}>
            IL books{" "}
          </h1>
          <h1> for NEET</h1>
        </div>
        <br />
        <br />
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>Bootany class 11 </h1>
          <p> (12 books)</p>
          <br />
        </div>
        <div style={{ marginTop: "15px" }}>
          <div style={{ margin: "5px" }}>
            <p>Based on latest ncert pattern</p>
          </div>
          <div style={{ margin: "5px" }}>
            <p>Concise theory + practice paper</p>
          </div>
          <div style={{ margin: "5px" }}>
            <p>topic wise detailed mcq for revision</p>
          </div>
        </div>
        <br/>
        <br/>
        <div className={styles.lowerBtn}>
            Download sample pdf
        </div>
      </div>
    </div>
  );
};

export default Book;
