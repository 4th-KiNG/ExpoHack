import { IButton } from "../../types/ButtonTypes";
import styles from './Button.module.scss'

const Button = (props: IButton) => {
    const {type, content} = props
    return (
        <>
        {type === "button" && <button className={styles.Button}>{content}</button>}
        {type === "submit" && <input type="submit" value={content} className={styles.Button} />}
        </>
    );
}
 
export default Button;