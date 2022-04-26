import React, { useState, Fragment } from "react";
import Link from "next/link";
import { NextPage } from "next";
import styles from "../styles/Layout.module.css";
import styles2 from '../styles/Home.module.css'

const Navbar: NextPage = () => {

  const [isOpen,setIsOpen] = useState(false);
  const openMenu= ()=> setIsOpen(!isOpen);

  return <> 
          <header className={styles2.header}>
              <nav className={styles.navbar}>
                  <Link href='/'>
                   <img className={styles.logo} src="/logo.png" alt="" />
                  </Link>
              <ul className={isOpen === false ? 
                      styles.navmenu : styles.navmenu +' '+ styles.active}>
                  <li className={styles.navitem}>
                     <Link href='/'>
                       <a className={isOpen === false ? 
                                  styles.navlink : styles.navlink+' '+styles.active}
                                  onClick={openMenu}>Home</a>
                      </Link>
                  </li>
                  <li className={styles.navitem}>
                      <Link href='/products'>
                        <a className={isOpen === false ? 
                                  styles.navlink : styles.navlink+' '+styles.active}
                                  onClick={openMenu}>Products</a>
                      </Link>
                  </li>
                  {/* <li className={styles.navitem}>
                      <Link href='/blog'>
                       <a className={isOpen === false ? 
                                  styles.navlink : styles.navlink+' '+styles.active}
                                  onClick={openMenu}>Blog</a>
                      </Link>
                  </li> */}
                  <li className={styles.navitem}>
                      <Link href='/about'>
                       <a className={isOpen === false ? 
                                  styles.navlink : styles.navlink+' '+styles.active}
                                  onClick={openMenu}>About</a>
                      </Link>
                  </li>
              </ul>
              <button className={isOpen === false ? 
                                  styles.hamburger : styles.hamburger+' '+styles.active}
                                  onClick={openMenu}
                                  >
                  <span className={styles.bar}></span>
                  <span className={styles.bar}></span>
                  <span className={styles.bar}></span>
              </button>
              </nav>
          </header>
   </>
}
export default Navbar;