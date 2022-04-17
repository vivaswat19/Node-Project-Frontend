import React, { useState } from "react";
import styles from "../styles/components/Footer.module.scss";
import { FacebookLogo, GoogleLogo, InstagramLogo, LinkedinLogo, ArrowFatRight } from "phosphor-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Contact from "../pages/Contact";

const Footer = () => {
    const ContactClick = () => {
        console.log("contact")
    }


    return (
        <div className={styles.footcontainer}>
            <Button
                text="Contact Me Now!"
                link="contact"
                color="mustard"
                size="medium"
                hierarchy="primary"
                icon={ArrowFatRight}
                onClick={ContactClick}
            />

            <div className={styles.link}>
                <a href="mailto: vivaswat19@gmail.com" className={styles.contactlink}>
                    <GoogleLogo weight="bold" size={40} />
                </a>
                <a href="https://www.linkedin.com/in/vivaswat-sinha/" target="__blank" className={styles.contactlink}>
                    <LinkedinLogo weight="bold" size={40} />
                </a>
                <a href="https://www.instagram.com/vivaswat_sinha/" target="__blank" className={styles.contactlink}>
                    <InstagramLogo weight="bold" size={40} />
                </a>
                <a href="https://www.facebook.com/vivaswat.sinha" target="__blank" className={styles.contactlink}>
                    <FacebookLogo weight="bold" size={40} />
                </a>
            </div>
        </div >
    );
}


export default Footer;