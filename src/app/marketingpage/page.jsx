import React from "react";
import styles from "./marketing.module.css";
import Image from "next/image";

const Marketing = () => {
  return (
    <div className={styles.container}>

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
          <div>
            <h5>download the app</h5>
            <br/>
            <Image src={"/buttons2.png"} alt="" width={350} height={60}/>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <Image src={"/phone.png"} alt="" width={382} height={624} className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default Marketing;
