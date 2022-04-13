import React from "react";
import styles from "../styles/pages/Home.module.scss";
import Button from "../components/Button";
import { FilePdf, File, Student, Trophy, Baseball, GameController, Gear } from "phosphor-react";
const Home = () => {

    const pdfButtonHandler = (event: any) => {
        console.log(event)
    }

    const InfoData = [
        { name: "Education" },
        { name: "Skills" },
        { name: "Achievements" },
        { name: "Interests" },
        { name: "Hobbies" },
    ]

    return (
        <div className={styles.homeContainer}>
            <div className={styles.banner}>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQEgRDNhcIhpiw/profile-displayphoto-shrink_400_400/0/1579688254912?e=1655337600&v=beta&t=PJB4gA7YN3trLRzt5c9eJXgFcGRmGLt4UW4MTMa1ODY" alt="photo" />
                <div className={styles.bdata}>
                    <p className={styles.heading}>Hi, I'm Vivaswat Sinha.</p>
                    <p className={styles.heading2}>I'm a Full-Stack Web Developer.</p>
                    <p className={styles.subheading}>I'm also a Software Developer proficient in C++ and a Machine Learning Enthusiast. I believe a healthy mindset, positive attitude and a good cup of coffee can solve any problems and lead to a positive outcome.</p>
                </div>
            </div>
            <hr />

            <div className={styles.InfoContainer}>
                <p className={styles.heading}>About Me!</p>

                <section>
                    <div className={styles.head}>
                        <Student size={38} color="rgb(99, 99, 99)" />
                        <p className={styles.subheading}>
                            Education
                        </p>
                    </div>

                </section>
                <section>
                    <div className={styles.head}>
                        <Gear size={38} color="rgb(99, 99, 99)" />
                        <p className={styles.subheading}>
                            Skills
                        </p>
                    </div>
                </section>
                <section>
                    <div className={styles.head}>
                        <Trophy size={38} color="rgb(99, 99, 99)" />
                        <p className={styles.subheading}>
                            Achievements
                        </p>
                    </div>
                </section>
                <section>
                    <div className={styles.head}>
                        <Baseball size={38} color="rgb(99, 99, 99)" />
                        <p className={styles.subheading}>
                            Interests
                        </p>
                    </div>
                </section>
                <section>
                    <div className={styles.head}>
                        <GameController size={38} color="rgb(99, 99, 99)" />
                        <p className={styles.subheading}>
                            Hobbies
                        </p>
                    </div>
                </section>
            </div>

            <div className={styles.pdfContainer}>
                <Button
                    text="Show PDF"
                    color="black"
                    hierarchy="secondary"
                    size="medium"
                    icon={File}
                    onClick={pdfButtonHandler}
                />

            </div>
        </div>
    );
}

export default Home;