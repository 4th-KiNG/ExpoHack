import { IButton } from "../../types/ButtonTypes";
import styles from './Button.module.scss'

const Button = (props: IButton) => {
    const {type, content, size, onClick} = props
    return (
        <>
        {type === "button" && 
            <button className={size === "large" ? styles.Button : styles.Button_Middle} onClick={onClick}>{content}</button>
        }
        {type === "submit" && 
            <input type="submit" value={content} className={styles.Button} />
        }
        </>
    );
}
 
export default Button;