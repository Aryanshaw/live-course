import React from "react";
import styles from "./booksession.module.css";

const BookSession = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <h1>
          book a demo <span style={{ color: "yellow" }}> session</span>
        </h1>
        <br />
        <p>
          We’ll guide you in making a study plan that helps you study
          efficiently and in a balanced manner!
        </p>
      </div>
      <div className={styles.infoLeftContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="number"
            placeholder="Enter phone number"
          />
          <button className={styles.lowerbtn}  style={{ marginLeft: "-10px", padding: "20px" }}>Submit</button>
        </div>
        <br/>
        <h5>We will send an otp for verification</h5>
      </div>
    </div>
  );
};

export default BookSession;
