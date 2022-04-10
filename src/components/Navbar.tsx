import React, { useState } from "react";
import styles from "../styles/components/Navbar.module.scss";
const Navbar = () => {
    const links = [
        { to: 'Home', link: "/" },
        { to: 'About', link: "/about" },
        { to: 'Projects', link: "/projects" },
        { to: 'Contact Me!', link: "/contact" },
    ]

    return (
        <nav className={styles.nav}>
            <a href="/" className={styles.logo}>Logo</a>
            <div className={styles.navContainer}>
                {links.map((l) =>
                    <a href={l.link} className={styles.links} >{l.to}</a>
                )}
            </div>
        </nav>
    );
}

export default Navbar;