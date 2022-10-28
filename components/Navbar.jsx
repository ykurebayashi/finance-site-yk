import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const menuHandler = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>FINANCE BUSINESS</div>
        {menuActive && (
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Our Services</Link>
              </li>
              <li>
                <Link href="/Contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        )}
        <div className={styles.menu}>
          <BiMenuAltRight onClick={menuHandler} size="40" color="#a4c639" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
