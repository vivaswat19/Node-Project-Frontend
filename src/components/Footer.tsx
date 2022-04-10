import React from "react";
import styles from "../styles/components/Footer.module.scss";
import { FacebookLogo, GoogleLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";


const Footer = () => {
    return (
        <div className={styles.container}>

            <div className={styles.link}>
                <a href="" className={styles.contactlink}>
                    <GoogleLogo size={32} />
                </a>
                <a href="" className={styles.contactlink}>
                    <LinkedinLogo size={32} />
                </a>
                <a href="" className={styles.contactlink}>
                    <InstagramLogo size={32} />
                </a>
                <a href="" className={styles.contactlink}>
                    <FacebookLogo size={32} />
                </a>
            </div>
        </div>
    );
}


export default Footer;