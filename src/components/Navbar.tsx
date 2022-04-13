import React, { useState } from "react";
import styles from "../styles/components/Navbar.module.scss";
const Navbar = () => {
    const links = [
        { key: 1, to: 'Home', link: "/", div: true },
        { key: 2, to: 'About', link: "/about", div: true },
        { key: 3, to: 'Projects', link: "/projects", div: true },
        { key: 4, to: 'Contact Me!', link: "/contact", div: false },
    ]

    return (
        <nav className={styles.nav}>
            <a href="/" className={styles.logo}>Logo</a>
            <div className={styles.navContainer}>
                {links.map((l) =>
                    <>
                        <a href={l.link} className={styles.links} >
                            {l.to}
                        </a>
                        {l.div ?
                            <div className={styles.vl}></div> : null}
                    </>
                )}
            </div>
        </nav >
    );
}

export default Navbar;