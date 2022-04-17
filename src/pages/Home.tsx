import React, { Children, useState } from "react";

import styles from "../styles/pages/Home.module.scss";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import profile from "../images/profile.jpeg";
import { File, Student, Trophy, Baseball, GameController, Gear, CaretDown, CaretUp } from "phosphor-react";

const educationDetails = [
    {
        type: "College",
        name: "Netaji Subhas University of Technology",
        start: new Date("08/01/2019"),
        end: new Date("08/01/2023"),
        grades: [
            {
                class: "Till 4th Semester",
                gradeType: "CGPA",
                board: null,
                score: "8.0"
            }

        ],
        showHr: true,
    },
    {
        type: "School",
        name: "Amity International School, Mayur Vihar",
        start: new Date("04/01/2017"),
        end: new Date("07/01/2019"),
        grades: [
            {
                class: "X",
                gradeType: "CGPA",
                board: "CBSE",
                score: "9.0",
            },
            {
                class: "XII",
                gradeType: "Percentage",
                board: "CBSE",
                score: "95.4",
            },

        ],
        showHr: false,
    },
];

const skillDetails = [
    { name: "C++", level: 10 },
    { name: "Python", level: 10 },
    { name: "Java", level: 6 },
    { name: "Javascript", level: 5 },
    { name: "NodeJs", level: 4 },
    { name: "React", level: 3 },
    { name: "Django", level: 2 },
    { name: "Scikit-learn", level: 4 },
    { name: "Tensorflow", level: 4 },
]

const certificateDetails = [
    { name: "python", src: "/", from: new Date(), to: new Date() },
    { name: "python", src: "/", from: new Date(), to: new Date() },
    { name: "python", src: "/", from: new Date(), to: new Date() },
    { name: "python", src: "/", from: new Date(), to: new Date() },
    { name: "python", src: "/", from: new Date(), to: new Date() },
]

const Home = () => {
    const [active, setActive] = useState<boolean[]>([false, false, false, false, false, false])

    const pdfButtonHandler = (event: any) => {
        console.log(event)
    }

    const setChildActive = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const parent = document.getElementById(e.currentTarget.id)?.parentElement;
        const child = parent?.querySelector(`.${styles.hidden}`);

        if (!child?.classList.contains(styles.show)) {
            child?.classList.add(styles.show);
        }
        else {
            child?.classList.remove(styles.show)
        }
    }


    return (
        <div className={styles.homeContainer} >
            <div className={styles.banner}>
                <img src={profile} alt="photo" />
                <div className={styles.bdata}>
                    <p className={styles.heading}>Hi, I'm Vivaswat Sinha.</p>
                    <p className={styles.heading2}>I'm a Full-Stack Web Developer.</p>
                    <p className={styles.subheading}>I'm also a Software Developer proficient in C++ and a Machine Learning Enthusiast. I believe a healthy mindset, positive attitude and a good cup of coffee can solve any problems and lead to a positive outcome.</p>
                </div>
            </div>

            <div className={styles.InfoContainer}>
                <p className={styles.heading}>About Me!</p>

                {/* Education */}
                <section>
                    <div className={styles.head} id="1" onClick={(event) => {
                        active[0] = !active[0];
                        setActive([...active]);
                        setChildActive(event);
                    }}>
                        <Student className={styles.icon} size={38} color="rgb(99, 99, 99)" />
                        <p className={styles.subheading}>Education</p>
                        {active[0] ?
                            <CaretUp className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                            :
                            <CaretDown className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                        }
                    </div>

                    <div className={styles.hidden}>
                        {/* School, College */}
                        {
                            educationDetails.map((item) =>
                                <div style={{ marginBottom: "10px", }}>
                                    <h1>
                                        <strong>
                                            {item.type}
                                        </strong>
                                    </h1>
                                    <div style={{ display: "flex", height: "min-content", justifyContent: "space-between" }}>
                                        <p>
                                            <strong>
                                                {item.name}
                                            </strong>
                                        </p>
                                        <p>
                                            <em>
                                                {item.start.toDateString()} - {item.end.toDateString()}
                                            </em>
                                        </p>
                                    </div>

                                    {item.grades.map((g) =>
                                        <div style={{ display: "flex" }}>
                                            <p>{g.class}{g.board ? ` : ${g.board}` : null}</p>
                                            <p >{g.gradeType} : {g.score}{g.gradeType == "Percentage" ? "%" : null}</p>
                                        </ div>
                                    )}
                                    {item.showHr ? <hr style={{
                                        width: "75%",
                                        marginTop: "18px",
                                    }}></hr> : null}
                                </div>
                            )
                        }
                    </div>

                </section>

                {/* Skills */}
                <section>
                    <div className={styles.head} id="2" onClick={(event) => {
                        active[1] = !active[1];
                        setActive([...active]);
                        setChildActive(event);
                    }}>
                        <Gear className={styles.icon} size={38} color="rgb(99, 99, 99)" />
                        <p className={styles.subheading}>Skills</p>
                        {active[1] ?
                            <CaretUp className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                            :
                            <CaretDown className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                        }
                    </div>

                    <div className={styles.hidden}>
                        {/* skills with stars */}
                        <div className={styles.skillProgress}>
                            {skillDetails.map((item) =>
                                <ProgressBar skill={item.name} done={item.level} total={10} />
                            )}
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section>
                    <div className={styles.head} id="3" onClick={(event) => {
                        active[2] = !active[2];
                        setActive([...active]);
                        setChildActive(event);
                    }}>
                        <Gear className={styles.icon} size={38} color="rgb(99, 99, 99)" />
                        <p className={styles.subheading}>Certifications</p>
                        {active[2] ?
                            <CaretUp className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                            :
                            <CaretDown className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                        }
                    </div>

                    <div className={styles.hidden}>
                        {/* certificates */}
                        {certificateDetails.map((item) =>
                            <div>
                                <p>{item.name}</p>
                                <a href={item.src}>
                                    <em>Link</em>
                                </a>
                                <p>from: {item.from.toDateString()}</p>
                                <p>to: {item.to.toDateString()}</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Achievements */}
                <section>
                    <div className={styles.head} id="4" onClick={(event) => {
                        active[3] = !active[3];
                        setActive([...active]);
                        setChildActive(event);
                    }}>
                        <Trophy className={styles.icon} size={38} color="rgb(99, 99, 99)" />
                        <p className={styles.subheading}>Achievements</p>
                        {active[3] ?
                            <CaretUp className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                            :
                            <CaretDown className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                        }
                    </div>

                    <div className={styles.hidden}>
                        {/* achievements */}
                    </div>
                </section>

                {/* Interests/Hobbies */}
                <section>
                    <div className={styles.head} id="5" onClick={(event) => {
                        active[4] = !active[4];
                        setActive([...active]);
                        setChildActive(event);
                    }}>
                        <Baseball className={styles.icon} size={38} color="rgb(99, 99, 99)" />
                        <p className={styles.subheading}>Interests / Hobbies</p>
                        {active[4] ?
                            <CaretUp className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                            :
                            <CaretDown className={styles.caret} size={38} color="rgb(99, 99, 99)" />
                        }
                    </div>

                    <div className={styles.hidden}>
                        {/* interests */}
                    </div>
                </section>

            </div >

            <div className={styles.pdfContainer}>
                <Button
                    text="Download Resume! "
                    color="black"
                    hierarchy="secondary"
                    size="medium"
                    icon={File}
                    onClick={pdfButtonHandler}
                />

            </div>
        </div >
    );
}

export default Home;