import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { NavbarLinks } from "./NavbarLinks";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [navActive, setNavActive] = useState(true);

  const menuHandler = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>FINANCE BUSINESS</div>
        {!menuActive && (
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {NavbarLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
        <div className={styles.menu}>
          <FaBars onClick={menuHandler} size="35" color="#a4c639" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
