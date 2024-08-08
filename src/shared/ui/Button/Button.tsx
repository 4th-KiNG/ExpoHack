import { IButton } from "../../types/ButtonTypes";
import styles from './Button.module.scss'

const Button = (props: IButton) => {
    const {type, content, size, onClick, bgColor} = props
    return (
        <>
        {type === "button" && 
            <button
                className={size === "large" ? styles.Button : styles.Button_Middle}
                onClick={onClick}
                style={{
                    backgroundColor: bgColor
                }}
            >
                {content}
            </button>
        }
        {type === "submit" && 
            <input type="submit" value={content} className={styles.Button} />
        }
        </>
    );
}
 
export default Button;