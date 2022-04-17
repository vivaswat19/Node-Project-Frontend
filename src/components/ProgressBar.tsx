import React, { useState } from 'react'
import styles from "../styles/components/Progressbar.module.scss";

type Props = {
    done: number;
    total: number;
    skill: string,
}

const ProgressBar = (props: Props) => {
    const [width, setWidth] = useState(props.done / props.total * 100);
    return (
        <div className={styles.skillContainer}>
            <p className={styles.subheading}>{props.skill}</p>
            <div className={styles.progress}>
                <div className={styles.progressDone} style={{ width: `${width}%` }}>
                    <p>
                        {width}%
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;