import React, { useState } from "react";

import styles from "../styles/pages/Home.module.scss";
import Button from "../components/Button";
import { File, Student, Trophy, Baseball, GameController, Gear, CaretDown, CaretUp } from "phosphor-react";
const Home = () => {
    const [active, setActive] = useState<boolean[]>([false, false, false, false, false])

    const pdfButtonHandler = (event: any) => {
        console.log(event)
    }
    return (
        <div className={styles.homeContainer} >
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

                <section onClick={(event) => {
                    active[0] = !active[0];
                    setActive([...active]);
                }}>
                    <div className={styles.head}>
                        <Student className={styles.icon} size={38} color="rgb(99, 99, 99)" />
                        <p className={styles.subheading}>Education</p>
                        {active[0] ?
                            <CaretUp className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                            :
                            <CaretDown className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                        }
                    </div>
                </section>
                <section onClick={(event) => {
                    active[1] = !active[1];
                    setActive([...active]);
                }}>
                    <div className={styles.head}>
                        <Gear className={styles.icon} size={38} color="rgb(99, 99, 99)" />
                        <p className={styles.subheading}>Skills</p>
                        {active[1] ?
                            <CaretUp className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                            :
                            <CaretDown className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                        }
                    </div>
                </section>
                <section onClick={(event) => {
                    active[2] = !active[2];
                    setActive([...active]);
                }}>
                    <div className={styles.head}>
                        <Trophy className={styles.icon} size={38} color="rgb(99, 99, 99)" />
                        <p className={styles.subheading}>Achievements</p>
                        {active[2] ?
                            <CaretUp className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                            :
                            <CaretDown className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                        }
                    </div>
                </section>
                <section onClick={(event) => {
                    active[3] = !active[3];
                    setActive([...active]);
                }}>
                    <div className={styles.head}>
                        <Baseball className={styles.icon} size={38} color="rgb(99, 99, 99)" />
                        <p className={styles.subheading}>Interests</p>
                        {active[3] ?
                            <CaretUp className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                            :
                            <CaretDown className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                        }
                    </div>
                </section>
                <section onClick={(event) => {
                    active[4] = !active[4];
                    setActive([...active]);
                }}>
                    <div className={styles.head}>
                        <GameController className={styles.icon} size={38} color="rgb(99, 99, 99)" />
                        <p className={styles.subheading}>Hobbies</p>
                        {active[4] ?
                            <CaretUp className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                            :
                            <CaretDown className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                        }
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