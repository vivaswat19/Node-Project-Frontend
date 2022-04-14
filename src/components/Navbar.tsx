import { DotsThreeOutlineVertical, X, XCircle } from "phosphor-react";
import React, { useState } from "react";
import styles from "../styles/components/Navbar.module.scss";
import Button from "./Button";
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

    const hamburgerClick = (event: any) => {
        setNavbarOpen(!navbarOpen);
    }

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
                <button className={styles.hamburger} onClick={hamburgerClick}>
                    {!navbarOpen ?
                        <DotsThreeOutlineVertical size={32} weight="fill" />
                        :
                        <X size={32} weight="fill" />
                    }
                </button>

                <div className={styles.navLinksHamburger}>
                    {navbarOpen && links.map((l) =>
                        <div className={styles.flex} key={l.key}>
                            <a href={l.link} className={styles.links} >
                                {l.to}
                            </a>
                            {l.div ?
                                <div className={styles.vl}></div> : null}
                        </div>
                    )}
                </div>

                <div className={styles.navLinks}>
                    {links.map((l) =>
                        <div className={styles.flex} key={l.key}>
                            <a href={l.link} className={styles.links} >
                                {l.to}
                            </a>
                            {l.div ?
                                <div className={styles.vl}></div> : null}
                        </div>
                    )}
                </div>
            </div>
        </nav >
    );
}

export default Navbar;