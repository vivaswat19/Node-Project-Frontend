import React, { useState } from "react";
import styles from "../styles/components/Navbar.module.scss";
const Navbar = () => {
    const links = [
        { to: 'Home', link: "/", div: true },
        { to: 'About', link: "/about", div: true },
        { to: 'Projects', link: "/projects", div: true },
        { to: 'Contact Me!', link: "/contact", div: false },
    ]

    return (
        <nav className={styles.nav}>
            <a href="/" className={styles.logo}>Logo</a>
            <div className={styles.navContainer}>
                {links.map((l) =>
                    <>
                        <a key={l.to} href={l.link} className={styles.links} >
                            {l.to}
                        </a>
                        {l.div ?
                            <div className={styles.vl}></div> : null}
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;