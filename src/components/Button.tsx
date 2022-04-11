import React, { MouseEventHandler } from "react";
import { IconProps, IconWeight } from "phosphor-react";
import styles from "../styles/components/Button.module.scss";

interface Props {
    size?: "small" | "medium" | "large",
    hierarchy?: "primary" | "secondary";
    color?: "red" | "blue" | "black" | "mustard";
    text?: string,
    link?: string,
    icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: Props) => {
    const value = props.hierarchy ? props.hierarchy : "primary";
    const color = props.color ? props.color : "blue";
    const size = props.size ? props.size : "medium";

    return (
        <button
            className={styles.button}
            data-value={value}
            color={color}
            button-size={size}
            onClick={props.onClick}
        >
            {props.link ?
                <a href={props.link}>
                    {props.text &&
                        <p className={styles.p}>{props.text}</p>
                    }
                </a>
                :
                props.text && <p className={styles.p}>{props.text}</p>
            }
            {props.icon &&
                <props.icon className={styles.icon} weight="fill"></props.icon>
            }
        </button>
    )
}

export default Button;