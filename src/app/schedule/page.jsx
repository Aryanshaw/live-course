import React from "react";
import styles from "./Schedule.module.css";

const Schedule = () => {
  const subjectData = [
    {
      id: 1,
      day: "Mon",
      date: "16 June",
      subject: "Biology",
      time: "10am - 1pm",
      desc: "chapter 1 - Morphology",
      subject2: "Chemistry",
      time2: "2pm - 4pm",
      desc2: "chapter 2 - chemical reaction",
    },
    {
      id: 2,
      day: "Tue",
      date: "17 June",
      subject: "Physics",
      time: "10am - 1pm",
      desc: "chapter 1 - Force",
      subject2: "Chemistry",
      time2: "2pm - 4pm",
      desc2: "chapter 2 - chemical reaction",
    },
    {
      id: 3,
      day: "Wed",
      date: "18 June",
      subject: "Biology",
      time: "10am - 1pm",
      desc: "chapter 3 - Animal kingdom",
      subject2: "Chemistry",
      time2: "2pm - 4pm",
      desc2: "chapter 3 - electrolysis",
    },
    {
      id: 4,
      day: "Thu",
      date: "19 June",
      subject: "Physics",
      time: "10am - 1pm",
      desc: "chapter 3 - Motion",
      subject2: "Biology",
      time2: "2pm - 4pm",
      desc2: "chapter 4 - Excretion",
    },
    {
      id: 5,
      day: "Fri",
      date: "20 June",
      subject: "Biology",
      time: "10am - 1pm",
      desc: "chapter 3 - Animal kingdom",
      subject2: "Chemistry",
      time2: "2pm - 4pm",
      desc2: "chapter 3 - electrolysis",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.centerContainer}>
        <h1>Schedule</h1>
        <div className={styles.header}>
          <span>
            syllabus will be completed by <p>24.12.12</p>after which revision
            will commence
          </span>
          <div className={styles.dropdown}>15 june to 24 june ▼</div>
        </div>
        <div className={styles.scheduleContainer}>
          {subjectData.map((item) => (
            <div className={styles.weekDay} key={item.id}>
              <div style={{ flexDirection: "column", display: "flex" }}>
                {item.day}
                <span style={{ color: "grey", fontSize: "13px" }}>
                  {item.date}
                </span>
              </div>
              <div className={styles.subject}>
                <div className={styles.subjectHeader}>
                  <div style={{ fontSize: "18px", fontWeight: "600" }}>
                    {item.subject}
                  </div>
                  <div style={{ color: "grey", fontSize: "13px" }}>
                    {item.time}
                  </div>
                </div>
                <div className={styles.subjectDesc}>{item.desc}</div>
              </div>
              <div className={styles.subject}>
                <div className={styles.subjectHeader}>
                  <div style={{ fontSize: "18px", fontWeight: "600" }}>
                    {item.subject2}
                  </div>
                  <div style={{ color: "grey", fontSize: "13px" }}>
                    {item.time2}
                  </div>
                </div>
                <div className={styles.subjectDesc}>{item.desc2}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.lowerContainer}>
          <div>
            <span>
              need help with{" "}
              <p style={{ color: "yellow", marginLeft: "5px" }}>
                {" "}
                your study plan
              </p>
            </span>
          </div>
          <div className={styles.lowerBtn}>
            <h4>Let us plan together</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
