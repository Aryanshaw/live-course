"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          {/* <a className={styles.logoLink}>Logo</a> */}
          <span className={styles.navLink}>
            <Image src={"/logo.png"} alt="" width={240} height={64} />
          </span>
        </Link>
      </div>
      <div className={styles.menuIcon} onClick={toggleNavbar}>
        <div className={isOpen ? styles.closeIcon : styles.hamburgerIcon}></div>
      </div>
      <div className={isOpen ? styles.navMenuActive : styles.navMenu}>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <Link href="/">
              <span className={styles.navLink}>class 12+ | NEET</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/study-matieral">
              <span className={styles.navLink}>study material</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/result">
              <span className={styles.navLink}>result</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">
              <span className={styles.navLink}>about</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "12px", color: "yellow" }}>
                need help talk to expert
              </span>
              <span style={{ fontSize: "18px", color: "yellow" }}>
                1800-922-266
              </span>
            </div>
          </li>
          <li className={styles.navItem}>
            <button
              style={{
                color: "rgb(2, 119, 245)",
                background: "white",
                padding: "10px 20px 10px",
                borderRadius: "20px",
                border: "none",
              }}
            >
              sign in
            </button>
          </li>
          {/* Add more nav items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
