import { ArrowFatRight, Envelope, FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo, WhatsappLogo } from "phosphor-react";
import React from "react";
import styles from "../styles/pages/Contact.module.scss";

const links = [
    { key: 1, name: "Email", link: "mailto: vivaswat19@gmail.com", id: "vivaswat19@gmail.com", icon: Envelope, linkData: "Write to Me!" },
    { key: 2, name: "Whatsapp", link: "https://wa.me/918076856334", id: "(+91) 8076856334", icon: WhatsappLogo, linkData: "Message Me!" },
    { key: 3, name: "Facebook", link: "https://www.facebook.com/vivaswat.sinha", id: "Vivaswat Sinha", icon: FacebookLogo, linkData: "Like Me!" },
    { key: 4, name: "Instagram", link: "https://www.instagram.com/vivaswat_sinha/", id: "@Vivaswat_Sinha", icon: InstagramLogo, linkData: "Follow Me!" },
    { key: 5, name: "LinkedIn", link: "https://www.linkedin.com/in/vivaswat-sinha/", id: "/Vivaswat Sinha", icon: LinkedinLogo, linkData: "Add Me!" },
    { key: 6, name: "Twitter", link: "https://twitter.com/vivaswatsinha", id: "@VivaswatSinha", icon: TwitterLogo, linkData: "Tweet Me!" },
]


const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <h1>Contact Information: </h1>

            <div className={styles.linkContainer}>
                {links.map((l) =>
                    <div key={l.key} className={styles.linkCard}>
                        {l.icon &&
                            <l.icon className={styles.icon} color="#303030" weight="thin" size={100}></l.icon>
                        }
                        <h3 className={styles.name}>{l.name}</h3>
                        <p className={styles.id}>{l.id}</p>
                        <a className={styles.link} href={l.link} target="_blank" rel="noopener noreferrer">{l.linkData}</a>

                    </div>
                )}
            </div>

        </div >
    );
}

export default Contact;